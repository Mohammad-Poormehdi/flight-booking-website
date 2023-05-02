import Button from "./Button";

const Filter = () => {
  return (
    <div className="w-full px-3 py-2 gap-3 flex items-center justify-between max-md:text-xs">
      <Button label="ارزان ترین" onClick={() => {}} className="border" />
      <Button label="گران ترین" onClick={() => {}} className="border" />
      <Button label="دیر ترین" onClick={() => {}} className="border" />
      <Button label="زود ترین" onClick={() => {}} className="border" />
      <p className="w-full">مرتب سازی</p>
    </div>
  );
};
export default Filter;
