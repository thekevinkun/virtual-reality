import { Navbar } from "@/components";
import { Hero, VRGame, VRVideo, VRHeadsets, 
  Clients, CompanyValues, ExploreProducts, Footer } from "@/sections";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="relative">
        <Hero />
        <div className="gradient-1 z-0"/>
        <VRGame />
      </div>
      <VRVideo />
      <VRHeadsets />
      <Clients />
      <CompanyValues />
      <ExploreProducts />
      <Footer />
    </div>
  );
}
