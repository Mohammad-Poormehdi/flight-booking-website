import Button from "./Button";
interface FilterProps {
  sortExpensive: () => void;
  sortCheap: () => void;
  sortEarly: () => void;
  sortLate: () => void;
}
const Filter: React.FC<FilterProps> = ({
  sortExpensive,
  sortCheap,
  sortLate,
  sortEarly,
}) => {
  return (
    <div className="w-full px-3 py-2 gap-3 flex items-center justify-between max-md:text-xs">
      <Button label="ارزان ترین" onClick={sortCheap} className="border" />
      <Button label="گران ترین" onClick={sortExpensive} className="border" />
      <Button label="دیر ترین" onClick={sortLate} className="border" />
      <Button label="زود ترین" onClick={sortEarly} className="border" />
      <p className="w-full">مرتب سازی</p>
    </div>
  );
};
export default Filter;
