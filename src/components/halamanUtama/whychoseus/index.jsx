import React from "react";
import Image from "next/image";
import ElipsComponent from "./elipsComponent";

const whyChooseUsData = [
  {
    icon: "https://wp.lenterainovasi.co.id/wp-content/uploads/2023/05/puzzle-piece.png?size=Woocommerce_gallery_thumbnail",
    title: "Customized Solutions",
    description: "We provide tailored IT solutions that meet the unique needs of your business, maximizing efficiency and productivity.",
  },
  {
    icon: "https://wp.lenterainovasi.co.id/wp-content/uploads/2023/05/diploma.png?size=Woocommerce_gallery_thumbnail",
    title: "Expertise",
    description: "Our team has years of experience in handling complex projects and delivering high-quality results.",
  },
  {
    icon: "https://wp.lenterainovasi.co.id/wp-content/uploads/2023/05/social-network.png?size=Woocommerce_gallery_thumbnail",
    title: "Customer Satisfaction",
    description: "We prioritize customer satisfaction and work tirelessly to ensure that our solutions meet your expectations.",
  },
  {
    icon: "https://wp.lenterainovasi.co.id/wp-content/uploads/2023/05/calendar-clock.png?size=Woocommerce_gallery_thumbnail",
    title: "Timely Delivery",
    description: "Our team is dedicated to meeting deadlines and delivering results that exceed your expectations.",
  },
  {
    icon: "https://wp.lenterainovasi.co.id/wp-content/uploads/2023/05/rocket-1.png?size=Woocommerce_gallery_thumbnail",
    title: "Innovation",
    description: "We stay up-to-date with the latest advancements in technology and strive to incorporate innovative solutions into our services.",
  },
  {
    icon: "https://wp.lenterainovasi.co.id/wp-content/uploads/2023/05/wallet.png?size=Woocommerce_gallery_thumbnail",
    title: "Competitive Pricing",
    description: "We offer competitive pricing for our services, ensuring that you receive high-quality IT solutions at an affordable cost.",
  },
];

export default function Index() {
  return (
    <div className="whychooseus-contain mt-20 flex flex-col gap-1.5 m-auto w-4/5" id="about">
      <div className="title flex justify-center">
        <h4 className="font-bold border-b border-dark-primary mb-14 text-dark-primary text-2xl">Why Choose Us</h4>
      </div>

      <div className="list grid md:grid-cols-3 grid-cols-1 gap-10">
        {whyChooseUsData.map((item, index) => (
          <div key={index} className="customized-solution w-full flex flex-col items-center justify-start">
            <div className="icon relative w-fit">
              <ElipsComponent />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 ml-0.5 -translate-y-1/2">
                <Image src={item.icon} alt="Gambar" width={33} height={33} />
              </div>
            </div>

            <div className="text mt-3 text-center">
              <h5 className="font-bold text-lg">{item.title}</h5>
              <p className="m-0 text-md">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
