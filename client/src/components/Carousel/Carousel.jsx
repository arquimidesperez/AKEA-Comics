import { useState }from 'react'
import { CarouselData } from './CarouselData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"



export default function Carousel() {
  const [current, setCurrent] = useState(0)
  // const length = items.length


  return (
    
    <div className="carousel">
      <FaArrowAltCircleLeft className="left-arrow"/>
      <FaArrowAltCircleRight className="right-arrow" />
      
      {CarouselData.map((comic, index) => {
        return (
          <img src={comic.image} alt="image not available"/>
        )
      }
      )}
    </div>
  )
}
