import { useState } from "react";
import { CarouselData } from "./CarouselData";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
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
      <BiLeftArrow className="left-arrow" onClick={prevCover} />
      <BiRightArrow className="right-arrow" onClick={nextCover} />
      {CarouselData.map((covers, index) => {
        return (
          <div className={index === current ? "cover-active" : "cover"}>
            {index === current && (
              <div>
                <img
                  className="carousel-image"
                  key={index}
                  src={covers.image}
                  alt="not available"
                />
                <div className="carousel-message">
                  <p className="carousel-month">Heros of the Month!</p>
                  <p className="carousel-name">{covers.name}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
