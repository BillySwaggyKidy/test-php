
// represent a button that can be customize by the title, the background color and if is it disable (this prop is optional)
export default function Button({id, bgColor, title, disabled = false, onClick} : {id:string, bgColor:string, title:string, disabled?:boolean, onClick:()=>void}) {
    return (
        <button id={id} className={`h-full w-full text-center rounded-3xl text-white text-sm sm:text-xl ${bgColor} ${!disabled && 'cursor-pointer active:border-gray-500'} border-2 border-transparent leading-none`} disabled={disabled} onClick={onClick}>{title}</button>
    );
}