
interface Progresspros{
    className?: string,
    width?: number | undefined,
}

const Progress:React.FC <Progresspros>=({
    width,
    className ,
})=>{
return (
     <div className={` h-[15px] bg-[#FFFFCA] relative ${className}`}>
               <div className={`w-[${width}px]  h-[15px] bg-[#FFFF00] absolute`}></div>
            </div>
)
}
export {Progress};