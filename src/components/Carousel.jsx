import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/css/Carousel.css';

const Carousel = (props) => {
  const settings = {    
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (   
    <Slider {...settings}>
      {props.children}
    </Slider>
  );
};

export default Carousel;
