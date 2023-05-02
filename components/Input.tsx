interface InputProps{
    placeholder:string,
}
const Input:React.FC<InputProps> = ({placeholder})=>{
    return <input dir="rtl" type="search" className="w-full px-3 py-2 outline-none bg-white border rounded-xl " placeholder={placeholder} />
}
export default Input