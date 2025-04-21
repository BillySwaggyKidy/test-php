// this component represent a modal kind type of notification that take the entire screen with a semi-transparent background 
// and display a custom message to the user
// it can be instantly closed by clicking anywhere
export default function QuickMsgBox({title, subTitle, textColor, close}: {title:string, subTitle?:string, textColor:string, close:()=>void}) {
    return (
        <div className="fixed animate-fade-in-scale inset-0 bg-gray-500/70 bg-opacity-60 overflow-y-auto h-full w-full z-50" onClick={close}>
            <div className="relative h-full flex flex-col justify-center items-center">
                <p className={`text-center text-3xl font-bold ${textColor}`}>{title}</p>
                <p className={`text-center text-2xl font-bold ${textColor}`}>{subTitle}</p>
            </div>
        </div>
    );
}