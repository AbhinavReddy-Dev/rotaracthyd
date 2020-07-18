import React from "react"
import { Link } from "gatsby"
import { Div, OurWorkWrapper, ImagesCarousel, Image } from "../design/Styles"
import { ourwork } from "../design/content.json"

const sampleImages = ourwork.samplecollection
const sampleImagesContent = ourwork.samplecollectioncontent
const responsive = [
  { breakPoint: 1280, cardsToShow: 3 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
  { breakPoint: 760, cardsToShow: 2 },
  { breakPoint: 420, cardsToShow: 1 },
]
export const OurWork = () => {
  return (
    <OurWorkWrapper id="ourwork" bgcolor="#1b6ca8">
      <h1>Our Work</h1>
      <p>Our events gallery</p>
      <ImagesCarousel
        responsive={responsive}
        infinite={true}
        pauseOnMouseOver={true}
        showArrows={false}
        autoSlide={true}
      >
        {sampleImages.map((image, index) => (
          <Div display="flex" alignContent="center" justifyContent="center">
            <Image
              key={index}
              alt={String(image)}
              filename={image}
              content={sampleImagesContent}
            />
          </Div>
        ))}
      </ImagesCarousel>
      <Link to="/fullwork">See full gallery</Link>
    </OurWorkWrapper>
  )
}
