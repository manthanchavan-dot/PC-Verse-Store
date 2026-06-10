import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import Testimonials from "../components/Testimonials";

export function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <ProductCard />
      <Testimonials />
    </>
  );
}

export default Home;