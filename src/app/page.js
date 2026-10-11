
import HeroPage from "@/hero-contain/HeroPage";
import ProductAll from "@/productpage/ProductAll";
import ProductDown from "@/productpage/ProductDown";
import ProductUp from "@/productpage/ProductUp";



export default function Home() {
  return (
    <div>

      
      <HeroPage></HeroPage>
      <ProductUp></ProductUp>
      <ProductDown></ProductDown>
      <ProductAll></ProductAll>
     

  
    </div>
  );
}
