"use client";
import { useEffect } from "react";

// This is a client component 👈🏽
export default function Footer() {
  useEffect(() => {}, []);
  return (
    <footer className="bg-nav-fot py-3 px-10 flex flex-col items-center" id="contact">
      <div className="primary flex flex-col sm:flex-row items-center sm:justify-around mt-5 w-full border-b border-slate-700 pb-5 pt-1">
        <div className="proud-partner flex flex-col items-center w-1/3 content-center  text-slate-300">
          <h5 className="font-semibold text-sm sm:text-center text-center w-full sm:mb-1">Partner of:</h5>
          <img src="https://wp.lenterainovasi.co.id/wp-content/uploads/2023/05/ekatalog1-removebg-preview.png" alt="logo ekatalog" width={150} />
        </div>
        <div class="Contact-us sm:text-center text-center w-1/3 text-slate-300">
          <h5 className="font-semibold text-md md:mt-0 mt-3">Contact Info:</h5>
          <div className="contact  md:mt-3  text-md">
            <p className="m-0">support@lenterainovasi.co.id</p>
            <p className="m-0 text-md">+62 857-1013-2737</p>
          </div>
        </div>
        <div className="address md:text-center text-center w-1/3 text-slate-300">
          <h5 className="font-semibold text-md md:mt-0 mt-3">Address:</h5>
          <div className="contact md:my-3 text-md">
            <p className="m-0">Jl. Talang Bengkok IV Kota Semarang</p>
          </div>
        </div>
      </div>
      <div class="copy-right w-full flex justify-center">
        <p className="text-slate-400 m-0 mt-3 ">&copy; {new Date().getFullYear()} Lentera Inovasi</p>
      </div>
    </footer>
  );
}
