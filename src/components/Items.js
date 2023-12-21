import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const ItemsData = [
  {
    id: 1,
    image: require('../assets/images/team1.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Ilyes Khayati',
    designation: 'CEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 2,
    image: require('../assets/images/team2.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'David Antony',
    designation: 'Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  }
]

function Items() {
  return (
    <section id="items" className="block item-block">
    <Container fluid>
      <div className="title-holder">
        <h2>Your items</h2>
        <div className="subtitle">check if you Matched!</div>
      </div>
      <Row>
        {
          ItemsData.map(item => {
            return (
              <Col sm={3} key={item.id}>
                <div className='image'>
                  <Image src={item.image} />
                  <div className='overlay'>
                    <div className='socials'>
                      <ul>
                        <li><a href={item.fbLink}><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href={item.twitterLink}><i className="fab fa-twitter"></i></a></li>
                        <li><a href={item.linkedinLink}><i className="fab fa-linkedin-in"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='content'>
                  <h3>{item.name}</h3>
                  <span className='designation'>{item.designation}</span>
                  <p>{item.description}</p>
                </div>
              </Col>
            );
          })
        }
      </Row>
    </Container>
  </section>

  )
}

export default Items;

