"use client"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const CustomCarousel = ({ images }) => {
  return (
    <Carousel autoPlay showThumbs={false} showStatus={false} infiniteLoop className="w-96 h-96 shadow-xl mb-10 overflow-hidden ">
      {images.map((image, index) => (
        <div key={index} className="w-full relative h-[450px]">
          <Image
            className="object-cover"
            src={image}
            alt={`Slide ${index + 1}`}
            fill
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
