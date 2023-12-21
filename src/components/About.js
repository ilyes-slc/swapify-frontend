import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import img1 from '../assets/images/img1.jpg';
import eco from '../assets/logos/eco-friendly.png';
import fun from '../assets/logos/fun.png';

function About() {
  return (
    <section id="about" className="block about-block">
    <Container fluid>
      <div className="title-holder">
        <h2>What is Swapify?</h2>
        <div className="subtitle">learn more about app</div>
      </div>
      <Row>
        <Col sm={6}>
          <Image src={img1} />
        </Col>
        <Col sm={6}>
          <p>SWAPIFY is an interactive online web application where users can exchange their personal items with others having almost the same value, creating not only an enjoyable swapping experience but also eco-friendly!</p>
          <p>All you have to do is to upload an item that you no longer use, and start your swiping journey! Click the Swap icon if you want you like thez other user's item and cross your fingers and hope he likes you back ;)
          It's a Match! select the other user's item and you just gave an new life to your old stuff!</p>

          <Row>
            <Col id="center">
                <img src={eco} width="120" />
                <h3>eco-friendly</h3>
            </Col>
            <Col id="center">
                <img src={fun} width="110" />
                <h3>fun</h3>
            </Col>
          </Row>






        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default About
