import { Navbar } from "@components";
import { Hero, VRGame } from "@sections";

const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="relative">
        <Hero />
        <div className="gradient-1 z-0"/>
        <VRGame />
      </div>
    </div>
  )
}

export default Home;