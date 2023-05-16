import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import Slider from "react-slick";

export default function Carousel(props) {
  const listImg = [
    {
      img: "https://wp.lenterainovasi.co.id/wp-content/uploads/2023/04/server-scaled-e1683957973547.jpg?size=Original",
      name: "Server",
    },
    {
      img: "https://wp.lenterainovasi.co.id/wp-content/uploads/2023/04/office-furniture-scaled-e1683957986375.jpg?size=Original",
      name: "Office Furniture",
    },
    {
      img: "https://wp.lenterainovasi.co.id/wp-content/uploads/2023/04/kamera-scaled-e1683958004681.jpg?size=Original",
      name: "Camera",
    },
    {
      img: "https://wp.lenterainovasi.co.id/wp-content/uploads/2023/04/cctv-scaled-e1683958012242.jpg?size=Original",
      name: "CCTV",
    },
    {
      img: "https://wp.lenterainovasi.co.id/wp-content/uploads/2023/05/videowall-scaled-e1683957938528.jpg?size=Original",
      name: "Videowall",
    },
    {
      img: "https://wp.lenterainovasi.co.id/wp-content/uploads/2023/05/computer-and-printer-scaled-e1683957925943.jpg?size=Original",
      name: "Computer & Printer",
    },
    {
      img: "https://wp.lenterainovasi.co.id/wp-content/uploads/2023/05/ac-scaled-e1683957901332.jpg?size=Original",
      name: "Air Conditioner",
    },
    {
      img: "https://wp.lenterainovasi.co.id/wp-content/uploads/2023/05/networking-scaled-e1683957876788.jpg?size=Original",
      name: "Networking",
    },
  ];
  const renderSlides = () =>
    listImg.map((item, index) => (
      <div className="relative w-full h-52" key={index}>
        <div className="image-container">
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
