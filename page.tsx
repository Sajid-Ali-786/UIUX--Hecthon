
import BlueHeader from "./components/Header";
import Carausel from "./components/main";
import Editors from "./components/card1.tsx";
// import Footer from "./components/footer";
import GreenDiv from "./components/div1";
import Navbar from "./components/navbar";
import ProductCard from "./components/products-card";
import Whitediv from "./components/div2";

export default function Home(){
  return(
    <div>
      <BlueHeader/>
      <Navbar/>
      <Carausel/>
      <Editors/>
      <ProductCard/>
      <GreenDiv/>
      <Whitediv/>
      {/* <Footer/> */}
           
    </div>
  )
}
