interface InputProps{
    placeholder:string,
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
    value?:string
}
const Input:React.FC<InputProps> = ({placeholder, onChange})=>{
    return <input dir="rtl" type="search" onChange={onChange} className="w-full px-3 py-2 outline-none bg-white border rounded-xl " placeholder={placeholder} />
}
export default Input