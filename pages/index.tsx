import Contact from "@/components/Contact";
import Filter from "@/components/Filter";
import FlightCard from "@/components/FlightCard";
import Logo from "@/components/Logo";
import Search from "@/components/Search";
import Tabs from "@/components/Tab";
import { useState, useCallback } from "react";
import { Flight, domestic, international } from "@/data";

const Home = () => {
  const [showFlights, setShowFlights] = useState<string | undefined>();
  const [originSearch, setOriginSearch] = useState("");
  const [destSearch, setDestSearch] = useState("");
  const [filteredDomesticFlights, setFilteredDomesticFlights] =
    useState(domestic);
  const [filteredInternationalFlights, setFilteredInternationalFlights] =
    useState(international);
  useState(domestic);
  const handleSearch = () => {
    setFilteredDomesticFlights(
      domestic.filter((flight) => {
        console.log(originSearch);
        return (
          flight.origin.includes(originSearch) &&
          flight.dest.includes(destSearch)
        );
      })
    );
    setFilteredInternationalFlights(
      international.filter(
        (flight) =>
          flight.origin.includes(originSearch) &&
          flight.dest.includes(destSearch)
      )
    );
  };
  const sortExpensive = () => {
    const sortedFlightsDomestic = filteredDomesticFlights.sort(
      (a, b) => b.price - a.price
    );
    const sortedFlightsInternational = filteredInternationalFlights.sort(
      (a, b) => b.price - a.price
    );

    setFilteredDomesticFlights([...sortedFlightsDomestic]);
    setFilteredInternationalFlights([...sortedFlightsInternational]);
  };
  const sortCheap = () => {
    const sortedFlightsDomestic = filteredDomesticFlights.sort(
      (a, b) => a.price - b.price
    );
    const sortedFlightsInternational = filteredInternationalFlights.sort(
      (a, b) => a.price - b.price
    );

    setFilteredDomesticFlights([...sortedFlightsDomestic]);
    setFilteredInternationalFlights([...sortedFlightsInternational]);
  };
  const sortEarly = () => {
    const sortedEarlyDomestic = filteredDomesticFlights.sort((a, b) => {
      return (
        Number(a.take_off.split(":")[0]) - Number(b.take_off.split(":")[0])
      );
    });
    const sortedEarlyInternational = filteredInternationalFlights.sort(
      (a, b) => {
        return (
          Number(a.take_off.split(":")[0]) - Number(b.take_off.split(":")[0])
        );
      }
    );
    setFilteredDomesticFlights([...sortedEarlyDomestic]);
    setFilteredInternationalFlights([...sortedEarlyInternational]);
  };
  const sortLate = () => {
    const sortedLateDomestic = filteredDomesticFlights.sort((a, b) => {
      return (
        Number(b.take_off.split(":")[0]) - Number(a.take_off.split(":")[0])
      );
    });
    const sortedLateInternational = filteredInternationalFlights.sort(
      (a, b) => {
        return (
          Number(b.take_off.split(":")[0]) - Number(a.take_off.split(":")[0])
        );
      }
    );
    setFilteredDomesticFlights([...sortedLateDomestic]);
    setFilteredInternationalFlights([...sortedLateInternational]);
  };
  const handleShowFlights = useCallback((label: string) => {
    setShowFlights(label);
  }, []);
  return (
    <div className=" bg-no-repeat bg-cover bg-center h-full">
      <div
        className={`flex justify-center items-center ${
          showFlights ? "h-auto" : "h-1/2"
        } `}
      >
        <div className="background bg-right h-[560px] bg-cover absolute w-full top-0 -z-10"></div>
        <div className="space-y-10 p-5 w-[850px] max-md:w-full text-center">
          <div className="px-5 py-4 rounded-full shadow-lg bg-white">
            <Logo />
          </div>
          <div className="bg-white rounded-xl p-5 space-y-3 shadow-xl">
            <h2 className="text-xl">پرواز خود را جستجو کنید</h2>
            <Tabs handleShowFlights={handleShowFlights} />
            <hr />
            <Search
              onSearch={handleSearch}
              setDestSearch={setDestSearch}
              setOriginSearch={setOriginSearch}
            />
            <hr />
            <Filter
              sortEarly={sortEarly}
              sortLate={sortLate}
              sortCheap={sortCheap}
              sortExpensive={sortExpensive}
            />
          </div>

          <div className={`space-y-3 `}>
            {showFlights === "داخلی" &&
              filteredDomesticFlights.map((flight: Flight) => (
                <FlightCard
                  key={flight.id}
                  airline={flight.airline}
                  take_off={flight.take_off}
                  land={flight.land}
                  price={flight.price}
                  seats={flight.seats}
                  origin={flight.origin}
                  dest={flight.dest}
                />
              ))}
            {showFlights === "خارجی" &&
              filteredInternationalFlights.map((flight: Flight) => (
                <FlightCard
                  key={flight.id}
                  airline={flight.airline}
                  take_off={flight.take_off}
                  land={flight.land}
                  price={flight.price}
                  seats={flight.seats}
                  origin={flight.origin}
                  dest={flight.dest}
                />
              ))}
          </div>
        </div>
      </div>
      <Contact className={showFlights ? 'h-auto' : 'h-1/2'} />
    </div>
  );
};
export default Home;
