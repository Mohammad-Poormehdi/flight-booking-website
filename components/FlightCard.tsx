import { useRouter } from "next/router";
import Button from "./Button";
import Tag from "./Tag";
import Image from "next/image";

const FlightCard = () => {
  const router = useRouter()
  return (
    <div className="w-full shadow-md bg-white p-5 rounded-xl grid gap-6 grid-cols-4  ">
      {/* price and seats */}
      <div className="space-y-4 text-center border-r px-2 max-md:text-sm max-md:col-span-4 max-md:order-3">
        <div className="flex justify-center items-center gap-2">
          <p>ریال</p>
          <p className="text-2xl font-bold text-blue-600 max-md:text-sm">9289000</p>
        </div>
        <Button label="خرید بلیط" active onClick={() => {router.push('/success')}} />
        <div className="flex gap-2 text-sm items-center justify-center">
          <p>صندلی باقی مانده</p>
          <p>3</p>
        </div>
      </div>
      {/* flight info */}
      <div className="space-y-4 col-span-2 max-md:col-span-3 max-md:order-1 ">
        <div className="flex gap-5 justify-end items-center">
          <Tag label="اکونومی" />
          <Tag label="سیستمی" />
        </div>
        <div className="flex gap-3 justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <p className="text-xl font-bold">8:00</p>
            <p>مشهد</p>
          </div>

          <div className="w-full h-1 bg-gray-500 rounded-full"></div>
          <div className="flex gap-2 justify-center items-center">
            <p className="text-xl font-bold">9:30</p>
            <p>تهران</p>
          </div>
        </div>
      </div>
      {/* logo and airline */}
      <div className="flex justify-center items-center max-md:order-2 ">
        <div className="space-y-3">
          <Image src={'/images/qeshm.png'} alt="qeshm air log" width={50} height={50} className="rounded-full border" />
          <p>قشم ایر</p>
        </div>
      </div>
    </div>
  );
};
export default FlightCard;
