
// represent a availability to be contact by the agency, it can be removed from the list by clicking on the X button
export default function AvailabilityItem({index, day, time, removeBack} : {index:number, day:string, time:string, removeBack:(availableIndex: number)=>void}) {

    const handleClick = () => {
        removeBack(index);
    }

    return (
        <div className="h-10 w-[40%] bg-gray-200 text-gray-400 rounded-3xl flex flex-row justify-between items-center px-2 mb-2">
            <div className="flex flex-row justify-start items-center">
                {day}
                <p className="text-black mx-1"> à </p>
                {time}
            </div>
            <button className="border-none font-bold rounded-full hover:text-red-500 px-1 cursor-pointer" onClick={handleClick}>X</button>
        </div>
    );
}