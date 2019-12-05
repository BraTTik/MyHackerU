import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Slide from "./components/slide";
import { SHOP } from "../../../../../router/url";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Image2 from "../../../../../assets/images/1920х570-2.jpg";
import Image1 from "../../../../../assets/images/1920х570-1.jpg";
import Image3 from "../../../../../assets/images/1920х570-3.jpg";
import SlideButton from "./components/slide_button";
import SlideContent from "./components/slide_content";
import SlideHeader from "./components/slide_header";

//rotateInUp, rollIn, lightSpeedIn, slideInUp, rotateInDownLeft, rotateInUpRight rotateIn

const SlickSlider = props => {
    const [activeSlide, setActiveSlide] = useState(0);
        const slides = [
          <Slide image={Image1} index={0} isActive={activeSlide}>
            <SlideContent animation="fadeInDown">Collection 2019</SlideContent>
        
            <SlideHeader animation="fadeInUp">New Arrivals</SlideHeader>
        
            <SlideButton to={SHOP} title="SHOP NOW" animation="fadeIn" />
          </Slide>,
          <Slide image={Image2} index={1} isActive={activeSlide}>
            <SlideContent animation="rotateInDownLeft">Collection 2019</SlideContent>
        
            <SlideHeader animation="lightSpeedIn">New Arrivals</SlideHeader>
        
            <SlideButton to={SHOP} title="SHOP NOW" animation="rotateInUpRight" />
          </Slide>,
          <Slide image={Image3} index={2} isActive={activeSlide}>
            <SlideContent animation="rotateInDownRight">Collection 2019</SlideContent>
        
            <SlideHeader animation="slideInUp">New Arrivals</SlideHeader>
        
            <SlideButton to={SHOP} title="SHOP NOW" animation="rotateIn"/>
          </Slide>
        ];
  useEffect(() => {
      let timer = setTimeout(()=>{
          setActiveSlide(activeSlide+1<slides.length ? activeSlide+1 : 0);
      }, 5000)
      return () => {
          clearInterval(timer);
      };
  }, [activeSlide])
  const settings = {
    infinite: true,
    fade: true,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  function renderSlide(index) {
      return slides[index];
  }
  return (
    <section className="slide1">
        <Slider {...settings}>
            { renderSlide(activeSlide) }
        </Slider>
    </section>
  );
};

export default SlickSlider;
