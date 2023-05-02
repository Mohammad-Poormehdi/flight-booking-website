import Contact from "@/components/Contact";
import Filter from "@/components/Filter";
import FlightCard from "@/components/FlightCard";
import Logo from "@/components/Logo";
import Search from "@/components/Search";
import Tabs from "@/components/Tab";

const Home = () => {
  return (
    <div className=" bg-no-repeat bg-cover bg-center ">
      <div className="flex justify-center items-center">
        <div className="background bg-right bg-pink-400 absolute w-full h-[400px] top-0 -z-10"></div>
        <div className="space-y-10 p-5 w-[850px] max-md:w-full text-center">
          <div className="px-5 py-4 rounded-full shadow-lg bg-white">
            <Logo />
          </div>
          <div className="bg-white rounded-xl space-y-3 shadow-xl">
            <Tabs />
            <hr />
            <Search />
            <hr />
            <Filter />
          </div>

          <div className="space-y-3 ">
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
            <FlightCard />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};
export default Home;
