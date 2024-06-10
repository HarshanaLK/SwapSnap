import cv2
import dlib
import numpy as np

# Load dlib's pre-trained detector and predictor
detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor('shape_predictor_68_face_landmarks.dat')

def get_landmarks(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    faces = detector(gray)
    if len(faces) > 0:
        return predictor(gray, faces[0])
    else:
        return None

def align_face(image, landmarks, size=(256, 256)):
    points = []
    for i in range(0, 68):
        points.append((landmarks.part(i).x, landmarks.part(i).y))
    points = np.array(points, dtype=np.float32)

    h, w = size
    dst_points = np.float32([
        [0.3 * w, 0.3 * h], [0.7 * w, 0.3 * h], [0.5 * w, 0.8 * h]
    ])
    src_points = np.float32([points[36], points[45], points[33]])

    M = cv2.getAffineTransform(src_points, dst_points)
    aligned_face = cv2.warpAffine(image, M, (w, h))

    return aligned_face, M

def create_mask(image, landmarks):
    mask = np.zeros_like(image)
    points = np.array([[p.x, p.y] for p in landmarks.parts()], np.int32)
    hull = cv2.convexHull(points)
    cv2.fillConvexPoly(mask, hull, (255, 255, 255))
    return mask

def swap_faces(image1, image2):
    landmarks1 = get_landmarks(image1)
    landmarks2 = get_landmarks(image2)

    if landmarks1 is None or landmarks2 is None:
        return None

    aligned_face1, M1 = align_face(image1, landmarks1)
    aligned_face2, M2 = align_face(image2, landmarks2)

    mask1 = create_mask(aligned_face1, landmarks1)
    mask2 = create_mask(aligned_face2, landmarks2)

    # Resize masks to match aligned faces dimensions
    mask2_resized = cv2.warpAffine(mask2, M2, (aligned_face1.shape[1], aligned_face1.shape[0]))

    center = (aligned_face1.shape[1] // 2, aligned_face1.shape[0] // 2)
    
    # Ensure aligned_face2 and aligned_face1 are of the same size
    aligned_face2_resized = cv2.warpAffine(aligned_face2, M2, (aligned_face1.shape[1], aligned_face1.shape[0]))

    swapped_face = cv2.seamlessClone(aligned_face2_resized, aligned_face1, mask2_resized, center, cv2.NORMAL_CLONE)

    return swapped_face

if __name__ == "__main__":
    image1 = cv2.imread('face1.jpeg')
    image2 = cv2.imread('face2.jpg')

    swapped_face = swap_faces(image1, image2)

    if swapped_face is not None:
        cv2.imshow('Swapped Face', swapped_face)
        cv2.waitKey(0)
        cv2.destroyAllWindows()
    else:
        print("Face landmarks not detected.")
