import Button from "./Button";
import Input from "./Input";
interface SearchProps {
  setDestSearch: (e:any) => void;
  setOriginSearch: (e:any) => void;
  onSearch:()=>void;

}
const Search: React.FC<SearchProps> = ({ setOriginSearch, setDestSearch, onSearch }) => {
  return (
    <div className="w-full flex justify-center items-center gap-3 bg-white px-3 py-2 rounded-xl">
      <Button label="جستجو" active onClick={onSearch} />
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDestSearch(e.target.value)
        }
        placeholder="مقصد"
      />
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setOriginSearch(e.currentTarget.value)
        }
        placeholder="مبدا"
      />
    </div>
  );
};
export default Search;
