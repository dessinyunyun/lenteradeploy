import React, { useRef, useEffect, useState, lazy, Suspense, startTransition } from "react";

import Image from "next/image";

const LazyProductCarousel = lazy(() => import("./ProductCarousel"));

export default function Product(props) {
  const audioVisual = useRef(null);
  const networkingAndComputer = useRef(null);
  const [audioVisualHeight, setAudioVisualHeight] = useState(0);
  const [networkingAndComputerHeight, setNetworkingAndComputerHeight] = useState(0);
  const [networkingAndComputerHeightMobile, setNetworkingAndComputerHeightMobile] = useState(0);
  const [networkingAndComputerWidth, setNetworkingAndComputerWidth] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (audioVisual.current || networkingAndComputer.current) {
      const widthAudio = audioVisual.current.offsetWidth;
      const newHeightAudio = (widthAudio * 60.5) / 100;

      const widthNetComp = networkingAndComputer.current.offsetWidth;
      const heightNetComp = networkingAndComputer.current.offsetHeight;

      const newHeighNetComp = (widthNetComp * 60.25) / 100;
      startTransition(() => {
        setAudioVisualHeight(newHeightAudio);
        setNetworkingAndComputerHeightMobile(heightNetComp);
        setNetworkingAndComputerWidth(widthNetComp);
        // Kode yang memperbarui state BrandPartner
        // Misalnya, panggil fungsi setState atau lakukan operasi lainnya
        setNetworkingAndComputerHeight(newHeighNetComp);
      });
    }
  }, [props.sizeScreen]);

  useEffect(() => {
    const handleScroll = () => {
      const divElement = document.getElementById("networking");
      const rect = divElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      setShowOverlay(rect.top < windowHeight && rect.bottom >= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [show, setShow] = useState(false);
  useEffect(() => {
    if ((props.sizeScreen, length > 0)) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [props]);
  console.log(props);

  return (
    <div className="product-contain mt-14 flex flex-col  m-auto w-4/5" style={{ rowGap: `${5.5}px` }} id="product">
      <div className="grid md:grid-cols-3 sm:gap-x-1.5 gap-y-1.5 h-1/2 w-full" style={{ paddingRight: `${2.5}px`, paddingLeft: `${3}px` }}>
        <div
          className="Audio Visual sm:col-span-2 bg-slate-400  box-border relative "
          ref={audioVisual}
          style={{
            height: props.sizeScreen === "hp" ? `208px` : `${audioVisualHeight + 1}px`,
          }}
        >
          <Image src="https://wp.lenterainovasi.co.id/wp-content/uploads/2023/05/Conference_Room_Systems.png?size=Thumbnail" className="w-full h-full object-cover" alt="audio visual" layout="fill" />
          <div className={`${showOverlay && "gradient-overlay"} absolute inset-0`}>
            <div className="text text-white absolute bottom-3 left-3 text-start text-base lg:text-xl">
              <h4>Audio Visual</h4>
              <p className="font-semibold m-0">Bring your ideas to life with our audio visual services that combine creativity and technology.</p>
            </div>
          </div>
        </div>
        <div className="networkong-computer w-full box-border flex flex-col justify-center gap-y-1.5">
          <div
            id="networking"
            className="networking w-full h-full relative "
            ref={networkingAndComputer}
            style={{
              height: props.sizeScreen === "laptop" || props.sizeScreen === "tablet" ? `${networkingAndComputerHeight}px` : `208px`,
            }}
          >
            <Image src="https://wp.lenterainovasi.co.id/wp-content/uploads/2023/05/6372f7e07746ccd481b5082d_nasa-min.jpg?size=Thumbnail" className="w-full h-full object-cover" layout="fill" alt="audio visual" />
            <div className={`${showOverlay && "gradient-overlay"} absolute inset-0`}>
              <div className="text text-white absolute bottom-3 left-3 text-start text-base sm:text-xs lg:text-base">
                <h4>Networking</h4>
                <p className="font-semibold m-0">Experience seamless and reliable connectivity with our advanced networking solution.</p>
              </div>
            </div>
          </div>
          <div
            className="computer-printer w-full h-full  relative"
            ref={networkingAndComputer}
            style={{
              height: props.sizeScreen === "laptop" || props.sizeScreen === "tablet" ? `${networkingAndComputerHeight}px` : `208px`,
            }}
          >
            <Image src="https://wp.lenterainovasi.co.id/wp-content/uploads/2023/05/printer-computer-office-table_93675-3798.jpg?size=Thumbnail" className="w-full h-full object-cover" layout="fill" alt="audio visual" />
            <div className={`${showOverlay && "gradient-overlay"} absolute inset-0`}>
              <div className="text text-white absolute bottom-3 left-3 text-start text-base sm:text-xs lg:text-base">
                <h4>Computer and Printer</h4>
                <p className="font-semibold m-0">Our experienced team can provide you with computer and printer services that are customized to your specific business needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <LazyProductCarousel networkingAndComputerHeight={networkingAndComputerHeight} networkingAndComputerWidth={networkingAndComputerWidth} sizeScreen={props.sizeScreen} />
      </Suspense>
    </div>
  );
}
