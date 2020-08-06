import React from "react"
import { Div, OurWorkWrapper, ImagesCarousel, Image } from "../design/Styles"
import { ourwork } from "../design/content.json"
import SEO from "../components/seo"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

const installationImages = ourwork.installation
const clubmeetImages = ourwork.clubmeetings
const homevisitImages = ourwork.homevisits
const communityImages = ourwork.community
const rotaryImages = ourwork.rotary
const clubeventImages = ourwork.clubevents
const collabImages = ourwork.collaborations
const responsive = [
  { breakPoint: 1280, cardsToShow: 4 },
  { breakPoint: 760, cardsToShow: 2 },
  { breakPoint: 420, cardsToShow: 1 },
]
const fullwork = () => {
  return (
    <div>
      <Header />
      <SEO title="Rotaract club of hyderabad" />
      <OurWorkWrapper id="ourwork" bgcolor="#1b6ca8">
        <br></br>
        <h1>Our Team</h1>
        <p>Our full gallery</p>
        <br></br>
        <h3>Installations of our club</h3>
        <ImagesCarousel
          responsive={responsive}
          infinite={true}
          pauseOnMouseOver={true}
          showArrows={window.matchMedia("(max-width: 850px)").matches}
          autoSlide={true}
        >
          {installationImages.map((image, index) => (
            <Div display="flex" alignContent="center" justifyContent="center">
              <Image
                key={index}
                alt={String(image)}
                filename={image}
                content=""
              />
            </Div>
          ))}
        </ImagesCarousel>
        <hr></hr>
        <h3>Club meetings</h3>

        <ImagesCarousel
          responsive={responsive}
          infinite={true}
          pauseOnMouseOver={true}
          showArrows={false}
          autoSlide={true}
        >
          {clubmeetImages.map((image, index) => (
            <Div display="flex" alignContent="center" justifyContent="center">
              <Image
                key={index}
                alt={String(image)}
                filename={image}
                content=""
              />
            </Div>
          ))}
        </ImagesCarousel>
        <hr></hr>
        <h3>Orphanage home visits</h3>
        <ImagesCarousel
          responsive={responsive}
          infinite={true}
          pauseOnMouseOver={true}
          showArrows={false}
          autoSlide={true}
        >
          {homevisitImages.map((image, index) => (
            <Div display="flex" alignContent="center" justifyContent="center">
              <Image
                key={index}
                alt={String(image)}
                filename={image}
                content=""
              />
            </Div>
          ))}
        </ImagesCarousel>
        <hr></hr>
        <h3>Community service</h3>
        <ImagesCarousel
          responsive={responsive}
          infinite={true}
          pauseOnMouseOver={true}
          showArrows={false}
          autoSlide={true}
        >
          {communityImages.map((image, index) => (
            <Div display="flex" alignContent="center" justifyContent="center">
              <Image
                key={index}
                alt={String(image)}
                filename={image}
                content=""
              />
            </Div>
          ))}
        </ImagesCarousel>
        <hr></hr>
        <h3>Rotary meetings</h3>
        <ImagesCarousel
          responsive={responsive}
          infinite={true}
          pauseOnMouseOver={true}
          showArrows={false}
          autoSlide={true}
        >
          {rotaryImages.map((image, index) => (
            <Div display="flex" alignContent="center" justifyContent="center">
              <Image
                key={index}
                alt={String(image)}
                filename={image}
                content=""
              />
            </Div>
          ))}
        </ImagesCarousel>
        <hr></hr>
        <h3>Club events</h3>
        <ImagesCarousel
          responsive={responsive}
          infinite={true}
          pauseOnMouseOver={true}
          showArrows={false}
          autoSlide={true}
        >
          {clubeventImages.map((image, index) => (
            <Div display="flex" alignContent="center" justifyContent="center">
              <Image
                key={index}
                alt={String(image)}
                filename={image}
                content=""
              />
            </Div>
          ))}
        </ImagesCarousel>
        <hr></hr>
        <h3>Collaborations</h3>
        <ImagesCarousel
          responsive={responsive}
          infinite={true}
          pauseOnMouseOver={true}
          showArrows={false}
          autoSlide={true}
        >
          {collabImages.map((image, index) => (
            <Div display="flex" alignContent="center" justifyContent="center">
              <Image
                key={index}
                alt={String(image)}
                filename={image}
                content=""
              />
            </Div>
          ))}
        </ImagesCarousel>
        {/* <ImagesCarousel
          responsive={responsive}
          infinite={true}
          pauseOnMouseOver={true}
          showArrows={false}
          autoSlide={true}
        >
          {rotaryImages.map((image, index) => (
            <Div display="flex" alignContent="center" justifyContent="center">
              <Image
                key={index}
                alt={String(image)}
                filename={image}
                content=""
              />
            </Div>
          ))}
        </ImagesCarousel> */}
      </OurWorkWrapper>
      <Footer />
    </div>
  )
}
export default fullwork
