import { Banner1 } from "@/components/index/banner1";
import { Hero } from "@/components/index/Hero";
import { Products } from "@/components/index/Products";
import { ProductsSections } from "@/components/index/ProductsSections";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Banner1/>
      <ProductsSections />
    </>
  );
}
