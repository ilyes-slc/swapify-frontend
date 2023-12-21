import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

var heroData = [
    {
      id: 1,
      image: require('../assets/images/img-hero1.jpg'),
      title: 'Start Swapifying!',
      description: 'Discover the joy of swapping at Swapify! 🔄 Ready to trade treasures and connect with a community of enthusiasts? Join us now! Click below to start swapping. Let the exchange begin! ✨',
      link: '/signin'
    },
    {
      id: 2,
      image: require('../assets/images/img-hero1.jpg'),
      title: 'Check your matched items',
      description: "🪄 Dive into your collection and see if your items have found their perfect match. It's time to unveil the mysteries of swapping and connect with fellow enthusiasts. Click through to explore the enchanting world of potential swaps – who knows what hidden treasures await your collection! Join the excitement now and witness the magic unfold.🔮",
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      image: require('../assets/images/img-hero1.jpg'),
      title: 'Upload an Item!',
      description: "Ready to embark on your swapping adventure? 🌟 It all begins with a single item upload! 📸 Add your treasure to Swapify's collection and unlock a world of possibilities. Join the community, share your unique finds, and start swapping today. 🔄 Let the journey begin! 🚀",
      link: 'https://www.twitter.com'
    }
  ]

function Hero() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    <a className="btn btn-primary" href={hero.link}>Sign Up <i className="fas fa-chevron-right"></i></a>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  )
}

export default Hero;
