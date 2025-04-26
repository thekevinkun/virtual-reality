import { Navbar } from "@components";
import { Hero, VRGame, VRVideo, 
      VRHeadsets, Clients, CompanyValues } from "@sections";

const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="relative">
        <Hero />
        <div className="gradient-1 z-0"/>
        <VRGame />
      </div>
      <VRVideo />
      <div className="relative">
        <VRHeadsets />
        <div className="gradient-2 z-0"/>
        <Clients />
      </div>
      <CompanyValues />
    </div>
  )
}

export default Home;