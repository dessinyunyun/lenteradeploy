import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import Slider from "react-slick";

export default function Carousel(props) {
  const listImg = [
    {
      img: "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/04/server-scaled.jpg?size=Thumbnail",
      name: "Server",
    },
    {
      img: "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/04/office-furniture-scaled.jpg?size=Thumbnail",
      name: "Office Furniture",
    },
    {
      img: "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/04/kamera-scaled.jpg?size=Thumbnail",
      name: "Camera",
    },
    {
      img: "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/04/cctv-scaled.jpg?size=Thumbnail",
      name: "CCTV",
    },
    {
      img: "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/05/videowall-scaled.jpg?size=Thumbnail",
      name: "Videowall",
    },
    {
      img: "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/05/computer-and-printer-scaled.jpg?size=Thumbnail",
      name: "Computer & Printer",
    },
    {
      img: "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/05/ac-scaled.jpg?size=Thumbnail",
      name: "Air Conditioner",
    },
    {
      img: "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/05/networking-scaled.jpg?size=Thumbnail",
      name: "Networking",
    },
  ];
  const renderSlides = () =>
    listImg.map((item, index) => (
      <div className={`relative w-full ${props.sizeScreen == "hp" && "h-52"}`} key={index}>
        <div className="image-container" style={{ height: props.sizeScreen !== "hp" && `${props.networkingAndComputerHeight}px` }}>
          <Image alt="product" src={item.img} layout="fill" className="w-full h-full object-cover" />
        </div>
        <div className={`gradient-overlay-carousel absolute inset-0`}>
          <div className="text text-white absolute bottom-3 left-3 text-start text-base sm:text-sm lg:text-base">
            <p className="font-semibold m-0">{item.name}</p>
          </div>
        </div>
      </div>
    ));

  return (
    <div
      className={` app product-list h-fit`}
      // style={{ height: `${props.networkingAndComputerHeight}px` }}
    >
      <Slider
        // className=""
        dots={true}
        slidesToShow={props.sizeScreen == "hp" ? 1 : 3}
        // slidesToShow={3}
        autoplay={true}
        autoplaySpeed={2000}
        infinite={true}
        speed={1000}
        slidesToScroll={1}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
}
