import { Navbar } from "@/components";
import { Hero, VRGame, VRVideo, VRHeadsets, 
  Clients, CompanyValues, ExploreProducts, Footer } from "@/sections";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <VRGame />
      <VRVideo />
      <VRHeadsets />
      <Clients />
      <CompanyValues />
      <ExploreProducts />
      <Footer />
    </div>
  );
}
