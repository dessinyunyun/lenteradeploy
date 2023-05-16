import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Image from 'next/image';

const listImage = [
  'https://wp.lenterainovasi.co.id/wp-content/uploads/2023/03/Promethean_Logo_Primary_RGB_0621v1-e1683957136471.png?size=Woocommerce_thumbnail',
  'https://wp.lenterainovasi.co.id/wp-content/uploads/2023/03/pngwing.com_-e1683957162479.png?size=Woocommerce_thumbnail',
  'https://wp.lenterainovasi.co.id/wp-content/uploads/2023/03/CDWTopgolf_newline.webp-e1683957533130.png?size=Woocommerce_thumbnail',
  'https://wp.lenterainovasi.co.id/wp-content/uploads/2023/03/kisspng-jakarta-laptop-axioo-mobile-phones-computer-ax-5ab6192b45a9a9.1471584015218834352853-e1683957461373.png?size=Woocommerce_thumbnail',
  'https://wp.lenterainovasi.co.id/wp-content/uploads/2023/03/novastar-logo-vector-e1683957363723.png?size=Woocommerce_thumbnail',
  'https://wp.lenterainovasi.co.id/wp-content/uploads/2023/03/Dell_EMC-Logo.wine_-1-e1683957521862.png?size=Woocommerce_thumbnail',
  'https://wp.lenterainovasi.co.id/wp-content/uploads/2023/03/dji-logo-e1683957508895.png?size=Woocommerce_thumbnail',
  'https://wp.lenterainovasi.co.id/wp-content/uploads/2023/03/Hewlett_Packard_Enterprise-Logo.wine_-1-e1683957496268.png?size=Woocommerce_thumbnail',
  'https://wp.lenterainovasi.co.id/wp-content/uploads/2023/03/Hikvision-Logo.wine_-e1683957485742.png?size=Woocommerce_thumbnail',
  'https://wp.lenterainovasi.co.id/wp-content/uploads/2023/03/624adb52cd30a2e30fc2a197_Logo_Philips_PDS_Small_HR-p-500-e1683957552936.png?size=Woocommerce_thumbnail',
  'https://wp.lenterainovasi.co.id/wp-content/uploads/2023/03/microsoft-logo-png-2396-e1683957382198.png?size=Woocommerce_thumbnail',
  'https://wp.lenterainovasi.co.id/wp-content/uploads/2023/03/logo-microvision-1-e1683957401654.png?size=Woocommerce_thumbnail',
  'https://wp.lenterainovasi.co.id/wp-content/uploads/2023/03/logo-asus-png-7165-e1683957413995.png?size=Woocommerce_thumbnail',
  'https://wp.lenterainovasi.co.id/wp-content/uploads/2023/03/kisspng-logo-brand-led-tv-123-cm-49-panasonic-tx-49fxw724-a-c-in-chinchilla-reids-chinchilla-refrigeratio-5b7b92e4472684.8625744815348251882914-e1683957426179.png?size=Woocommerce_thumbnail',
  'https://wp.lenterainovasi.co.id/wp-content/uploads/2023/03/600f26befcd2b500043083e5-e1683957646849.png?size=Woocommerce_thumbnail',
  'https://wp.lenterainovasi.co.id/wp-content/uploads/2023/03/kisspng-hewlett-packard-logo-lenovo-computer-software-lenovo-logo-5ac49fb086b243.2038317515228353765517-e1683957473470.png?size=Woocommerce_thumbnail',
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
          slidesToShow={props.sizeScreen === 'laptop' || props.sizeScreen === 'tablet' ? 10 : 6}
          autoplay
          autoplaySpeed={2000}
          infinite
          speed={1000}
          slidesToScroll={props.sizeScreen === 'laptop' || props.sizeScreen === 'tablet' ? 5 : 3}
        >
          {renderSlides()}
        </Slider>
      </div>
    </div>
  );
}
