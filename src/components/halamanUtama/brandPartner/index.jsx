import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const listImage = [
  "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/03/Promethean_Logo_Primary_RGB_0621v1.png?size=Woocommerce_thumbnail",
  "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/03/pngwing.com_.png?size=Woocommerce_thumbnail",
  "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/03/pngwing.com-1.png?size=Woocommerce_thumbnail",
  "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/03/novastar-logo-vector.png?size=Woocommerce_thumbnail",
  "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/03/microsoft-logo-png-2396.png?size=Woocommerce_thumbnail",
  "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/03/logo-microvision-1.png?size=Woocommerce_thumbnail",
  "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/03/logo-asus-png-7165.png?size=Woocommerce_thumbnail",
  "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/03/kisspng-logo-brand-led-tv-123-cm-49-panasonic-tx-49fxw724-a-c-in-chinchilla-reids-chinchilla-refrigeratio-5b7b92e4472684.8625744815348251882914.png?size=Woocommerce_thumbnail",
  "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/03/kisspng-logo-acer-iconia-one-1-b3-a4-font-ivpro-sistemas-multimedia-5be977aef111c9.7007399315420271829874.png?size=Woocommerce_thumbnail",
  "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/03/kisspng-jakarta-laptop-axioo-mobile-phones-computer-ax-5ab6192b45a9a9.1471584015218834352853.png?size=Woocommerce_thumbnail",
  "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/03/kisspng-hewlett-packard-logo-lenovo-computer-software-lenovo-logo-5ac49fb086b243.2038317515228353765517.png?size=Woocommerce_thumbnail",
  "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/03/Hikvision-Logo.wine_.png?size=Woocommerce_thumbnail",
  "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/03/Hewlett_Packard_Enterprise-Logo.wine_-1.png?size=Woocommerce_thumbnail",
  "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/03/dji-logo.png?size=Woocommerce_thumbnail",
  "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/03/Dell_EMC-Logo.wine_-1.png?size=Woocommerce_thumbnail",
  "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/03/CDWTopgolf_newline.webp.png?size=Woocommerce_thumbnail",
  "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/03/624adb52cd30a2e30fc2a197_Logo_Philips_PDS_Small_HR-p-500.png?size=Woocommerce_thumbnail",
  "https://lentera.aissed-projects.my.id/wp-content/uploads/2023/03/600f26befcd2b500043083e5.png?size=Woocommerce_thumbnail",
];

export default function Index(props) {
  const renderSlides = () =>
    listImage.map((img, index) => (
      <div key={index}>
        <Image alt="product" src={img} width={100} height={70} />
      </div>
    ));

  return (
    <div className="whychooseus-contain my-20 flex flex-col gap-1.5 m-auto w-4/5">
      <div className="title flex justify-center">
        <h4 className="font-bold border-b border-dark-primary mb-14 text-dark-primary text-2xl">Brand Partner</h4>
      </div>

      <div className="list-brand">
        <Slider
          className=""
          dots={false}
          slidesToShow={props.sizeScreen === "laptop" || props.sizeScreen === "tablet" ? 10 : 5}
          autoplay
          autoplaySpeed={2000}
          infinite
          speed={1000}
          slidesToScroll={props.sizeScreen === "laptop" || props.sizeScreen === "tablet" ? 5 : 3}
        >
          {renderSlides()}
        </Slider>
      </div>
    </div>
  );
}
