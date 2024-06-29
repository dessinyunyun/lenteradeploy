import Nav from "@/components/Nav/";
import "./globals.css";
import { Raleway } from "next/font/google";
import Footer from "@/components/Footer/";
import Main from "@/components/Main/Main";
import Image from "next/image";
import Link from "next/link";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-sofia" });

export const metadata = {
  title: "Lentera Inovasi",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${raleway.variable} relative`}>
        <Nav />
        <Main>{children}</Main>
        <div className="whatsapp fixed bottom-10 sm:h-18 sm:w-18 h-15 w-15 z-10 right-5 p-3 sm:p-4 rounded-full bg-green-500">
          <Link
            href="https://api.whatsapp.com/send?phone=6285710132737&text=Terima%20kasih%20sudah%20menghubungi%20Lentera%20Inovasi.%20Ada%20yang%20bisa%20saya%20bantu%3F
"
            target="_blank"
          >
            <Image src={"https://lentera.aissed-projects.my.id/wp-content/uploads/2023/05/whatsapp.png?size=Thumbnail"} width={40} height={40} alt="whatsapp logo" />
          </Link>
        </div>
        <Footer />
      </body>
    </html>
  );
}
