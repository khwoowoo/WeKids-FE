import "./globals.css";
import "../ui/Components/atoms/Upload";
import Upload from "../ui/Components/atoms/Upload";
import MainHome from "./[home]/page";
import Header from "../ui/Components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <MainHome className="flex justify-center items-center" />
    </div>
  );
}
