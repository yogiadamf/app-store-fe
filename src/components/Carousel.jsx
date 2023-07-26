import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/css/Carousel.css';

const Carousel = (props) => {
  const settings = {      
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };
  return (   
    <Slider {...settings}>
      {props.children}
    </Slider>
  );
};

export default Carousel;
