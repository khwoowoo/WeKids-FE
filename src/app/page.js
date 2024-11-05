import Image from "next/image";
import "./globals.css";
import "../ui/Components/Upload";
import Upload from "../ui/Components/Upload";
import MainHome from "./[home]/transactions/page";

export default function Home() {
  return (
    <div>
      <h1 className="wooridaumL">Hello World적용됨????</h1>
      <p className="wooridaumB">여기에만 적용하고 싶어요</p>
      <Upload />
      <MainHome />

      <nav>네비게이션 바</nav>
    </div>
  );
}
