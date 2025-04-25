import { Navbar } from "@components";
import { Hero } from "@sections";

const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="relative">
        <Hero />
        <div className="gradient-1 z-0"/>
      </div>
    </div>
  )
}

export default Home;