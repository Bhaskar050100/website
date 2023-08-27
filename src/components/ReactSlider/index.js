import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const ReactSlider = () => {
  const settings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
      <div className="carousel-item active">
            <img
                src="https://res.cloudinary.com/drlhpyjlf/image/upload/v1693060738/Untitled_design_cmeshs.png"
                className="d-block w-100"
                alt="Slide 1"
            />
            </div>
            <div className="carousel-item">
            <img
                src="https://res.cloudinary.com/drlhpyjlf/image/upload/v1693060558/Untitled_design_hhoamr.jpg"
                className="d-block w-100"
                alt="Slide 2"
            />
            </div>
            <div className="carousel-item">
            <img
                src="https://res.cloudinary.com/drlhpyjlf/image/upload/v1693060145/Untitled_design_rya19t.png"
                className="d-block w-100"
                alt="Slide 3"
            />
            </div>
      </Slider>
    </div>
  )
}

export default ReactSlider