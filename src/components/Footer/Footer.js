"use client";
import Image from "next/image";
import { useEffect } from "react";

// This is a client component 👈🏽
export default function Footer() {
  useEffect(() => {}, []);
  return (
    <footer className="bg-nav-fot py-3 sm:px-10 px-2 w-full overflow-hidden flex flex-col items-center" id="contact">
      <div className="primary flex flex-col sm:flex-row items-center sm:items-start sm:justify-around mt-5 w-full border-b border-slate-700 pb-6 pt-1">
        <div className="proud-partner flex flex-col items-center w-full sm:w-1/3 content-center text-sm sm:text-lg text-slate-300">
          <h5 className="font-semibold sm:text-center text-center w-full sm:mb-3">Partner of:</h5>
          <div class="image-contain flex gap-1">
            <Image className="sm:h-14 sm:w-36" src="https://wp.lenterainovasi.co.id/wp-content/uploads/2023/05/ekatalog1-removebg-preview.png?size=Woocommerce_gallery_thumbnail" alt="logo ekatalog" width={100} height={35} />
            <Image className="sm:h-14 sm:w-36" src="https://wp.lenterainovasi.co.id/wp-content/uploads/2023/05/bela-pengadaan.png?size=Woocommerce_gallery_thumbnail" alt="logo ekatalog" width={100} height={35} />
            <Image className="sm:h-14 sm:w-36" src="https://wp.lenterainovasi.co.id/wp-content/uploads/2023/05/siplah.png?size=Woocommerce_gallery_thumbnail" alt="logo ekatalog" width={100} height={35} />
          </div>
        </div>
        <div className="Contact-us sm:text-center text-center text-sm sm:text-lg sm:w-1/3 text-slate-300">
          <h5 className="font-semibold  md:mt-0 mt-3">Contact Info:</h5>
          <div className="contact text-slate-400  md:mt-3 ">
            <p className="m-0">support@lenterainovasi.co.id</p>
            <p className="m-0 ">+62 857-1013-2737</p>
          </div>
        </div>
        <div className="address md:text-center text-center sm:text-lg text-sm sm:w-1/3 text-slate-300">
          <h5 className="font-semibold md:mt-0 mt-3">Address:</h5>
          <div className="address text-slate-400 md:my-3 ">
            <p className="m-0">Jl. Talang Bengkok IV, Kota Semarang</p>
          </div>
        </div>
      </div>
      <div className="copy-right w-full flex sm:text-lg text-sm justify-center">
        <p className="text-slate-400 m-0 mt-3 ">&copy; {new Date().getFullYear()} Lentera Inovasi</p>
      </div>
    </footer>
  );
}
