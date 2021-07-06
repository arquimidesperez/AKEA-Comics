import { useState } from "react";
import { CarouselData } from "./CarouselData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./Carousel.css";

export default function Carousel({ covers }) {
  const [current, setCurrent] = useState(0);
  const length = covers.length;

  const nextCover = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevCover = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  // console.log(current);

  if (!Array.isArray(covers) || covers.length <= 0) {
    return null;
  }

  return (
    <div className="carousel">
      
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevCover} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextCover} />
      {CarouselData.map((covers, index) => {
        return (
          <div className={index === current ? "cover-active" : "cover"}>
            {index === current && (
              <img
                className="carousel-image"
                key={index}
                src={covers.image}
                alt="not available"
              />
            )}
        
            <h2 className="carousel-name">Heros of the Month!<br/>{covers.name}</h2>
            
          </div>
        );
      })}
    </div>
  );
}
