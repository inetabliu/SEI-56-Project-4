import React from 'react'
import { Carousel } from 'react-bootstrap'



const Home = () => {

  const heroStyle = {
    background: '#FAD0C9',
    color: '#006B38',
    textShadow: '1px 1px #FAD0C9',
    marginBottom: '0',
  }

  const title = {
    fontWeight: 'extra-bold', 
    fontFamily: 'Staatliches, cursive',
  }

  const carrouselStyle = {
    color: '#FAD0C9',
    textShadow: '1px 1px #006B38',
    textTransform: 'uppercase',
  }
  return (
    <>
      <div style={heroStyle}className="jumbotron">
        <div className="container">
          <h1 style={title} className="display-5">The Plant Dispatch</h1>
          <hr className="my-4"></hr>
          <p className="lead">Only application you will need to track your plant collection</p>
        </div>
      </div>

      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/inetab/image/upload/c_scale,w_1200/v1627030331/SEI_Project_4/sblkzvbotq3ndadygtsy.jpg"
            alt="First slide"
          />
          <Carousel.Caption style={carrouselStyle}>
            <h3>Made by plant lovers</h3>
            <p>For the love of plants</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://images.ctfassets.net/i3tkg7dt3kro/2bgsHWfZKFDWcG3P3OhZmY/1e119f6d728517c1c8d78bd2f092dca7/heartleaf-philodendron.jpg"
            alt="Second slide"
          />
          <Carousel.Caption style={carrouselStyle}>
            <h3>Plants! Plants! Plants!</h3>
            <p>Create a rainforest in your house</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.vecteezy.com/system/resources/previews/001/928/227/non_2x/monstera-leaf-in-jungle-free-photo.jpg"
            alt="Third slide"
          />
          <Carousel.Caption style={carrouselStyle}>
            <h3>Track your plant care</h3>
            <p>Watch your plants thrive</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Home