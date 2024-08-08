import React, { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Home.css'

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

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = result;
    link.download = 'face_swap_result.jpg';
    link.click();
  };

  return (
    <div className="Home">
      <form onSubmit={handleSubmit}>
        <Container>
          <Row style={{ rowGap: '200px' }}>
            <Col>
              <div>
              {image1Preview && <img src={image1Preview} alt="Original Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />}
                <input type="file" onChange={handleImage1Change} /><br/>
                <label>Upload Original Image</label>
              </div>
            </Col>
            
            <Col>
              <div>
              {image2Preview && <img src={image2Preview} alt="Target Face Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />}
              <input type="file" onChange={handleImage2Change} /><br/>
              <label>Upload Target face</label>
              </div>
            </Col>
          </Row>
        <div className='button'>
        <Button  variant="outline-primary" type="submit" >Swap Faces</Button>
        </div>
        </Container>
      </form>
      {result && (
        <Container className='result'>
          <Row>
            <Col>
              <div>
                <img src={result} alt="Face Swap Result" style={{ maxWidth: '100%' }} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className='result-button' variant="outline-success" onClick={handleDownload}>Download</Button>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}
