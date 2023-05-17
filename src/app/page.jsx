"use client"; // This is a client component 👈🏽
import React, { useState, useEffect, lazy, Suspense, useCallback } from "react";

import { Product, AboutUs } from "../components/halamanUtama/index";
import Main from "@/components/Main/Main";

const LazyWhyChooseUs = lazy(() => import("../components/halamanUtama/whychoseus/"));
const LazyBrandPartner = lazy(() => import("../components/halamanUtama/brandPartner"));

export default function Home() {
  const [sizeScreen, setSizeScreen] = useState("hp");

  const handleResize = useCallback(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1023) {
      setSizeScreen("laptop");
    } else if (screenWidth > 639) {
      setSizeScreen("tablet");
    } else {
      setSizeScreen("hp");
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    if (screenWidth > 1023) {
      setSizeScreen("laptop");
    } else if (screenWidth > 639) {
      setSizeScreen("tablet");
    } else {
      setSizeScreen("hp");
    }
  }, []);

  console.log(sizeScreen);

  return (
    <Main>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center"
        style={{
          backgroundImage: "url('https://wp.lenterainovasi.co.id/wp-content/uploads/2023/05/bg.jpg?size=Thumbnail')",
          height: sizeScreen == "hp" ? "700px" : "800px",
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
          <div className="h-full flex items-center justify-center">
            <div className="text-white flex items-center justify-center flex-col">
              <h2 className="mb-4 text-2xl font-black">ONE STOP IT SOLUTION</h2>
              <h3 className="mb-6 text-sm lg:w-2/4  w-3/4 text-center font-bold">
                Lentera Inovasi provides custom IT solutions designed to optimize processes, increase efficiency, and enhance competitiveness. Our experienced team delivers innovative and sustainable solutions that are tailored to your
                specific needs, future-proofing your IT infrastructure for years to come.
              </h3>
            </div>
          </div>
        </div>
      </div>

      {sizeScreen.length > 0 && <Product sizeScreen={sizeScreen} />}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyWhyChooseUs sizeScreen={sizeScreen} />
      </Suspense>
      <AboutUs sizeScreen={sizeScreen} />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyBrandPartner sizeScreen={sizeScreen} />
      </Suspense>
    </Main>
  );
}
