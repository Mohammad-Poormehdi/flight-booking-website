import FlightCard from "@/components/FlightCard";
import Logo from "@/components/Logo";
import Tabs from "@/components/Tab";

const Home = () => {
  return (
    <div className="background bg-no-repeat bg-cover bg-center flex justify-center items-center bg-gray-200">
      <div className="space-y-10 p-5 w-[850px] max-md:w-full text-center">
        <Logo />
        <Tabs />
        <div className="space-y-3">
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
  );
};
export default Home;
