import Button from "./Button"
import Input from "./Input"

const Search = ()=>{
    return <div className="w-full flex justify-center items-center gap-3 bg-white px-3 py-2 rounded-xl">
        <Button label='جستجو' active onClick={()=>{}} />
        <Input placeholder="مقصد" />
        <Input placeholder="مبدا" />
    </div>
}
export default Search