import React, { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Home() {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image1Preview, setImage1Preview] = useState(null);
  const [image2Preview, setImage2Preview] = useState(null);
  const [result, setResult] = useState(null);

  const handleImage1Change = (e) => {
    const file = e.target.files[0];
    setImage1(file);
    setImage1Preview(URL.createObjectURL(file));
  };

  const handleImage2Change = (e) => {
    const file = e.target.files[0];
    setImage2(file);
    setImage2Preview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image1', image1);
    formData.append('image2', image2);

    try {
      const response = await axios.post('http://localhost:5000/swap', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        responseType: 'arraybuffer',
      });

      const imageUrl = URL.createObjectURL(new Blob([response.data], { type: 'image/jpeg' }));
      setResult(imageUrl);
    } catch (error) {
      console.error('Error swapping faces', error);
    }
  };

  return (
    <div className="Home">
    
      <form onSubmit={handleSubmit}>
        <Container>
          <Row style={{ rowGap: '200px' }}>
            <Col>
              <div>
              {image1Preview && <img src={image1Preview} alt="Original Image Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />}
                <label>Upload Original Image: </label>
                <input type="file" onChange={handleImage1Change} />
              </div>
            </Col>
            <Col>
              <div>
              {image2Preview && <img src={image2Preview} alt="Target Face Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />}
                <label>Upload Target face: </label>
                <input type="file" onChange={handleImage2Change} />
                
              </div>
            </Col>
          </Row>
        <Row >
        <button type="submit">Swap Faces</button>
        </Row>
        </Container>
      </form>
      {result && (
        <Container>
          <Row>
            <Col>
        <div>
          <img src={result} alt="Face Swap Result" style={{ maxWidth: '100%' }} />
        </div>
        </Col>
        </Row>
        </Container>
      )}
    </div>
  );
}
