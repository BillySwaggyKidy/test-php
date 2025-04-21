import React, { ChangeEvent, useEffect, useState } from "react";

export default function CheckBox({id, label, value, checked = false, blocked = false, callback} : {id:string, label:string, value:string, checked?:boolean, blocked?:boolean, callback: (id:string, value:string) => void}) {
    const [checkValue, setCheckValue] = useState<boolean>(checked);

    const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
        const newCheckValue = event.currentTarget.checked;
        // if the checkedbox is not checked then we don't return the value
        const newValue = newCheckValue ? value : "";
        // blocked is an optional prop that make the checkbox enable to be unselected after be clicked
        // however it still can be unchecked by the parent when we change the checked prop
        // it is used here for a group of checkbox when only one checkbox can be selected
        if (!blocked || newCheckValue == true) {
            setCheckValue(newCheckValue);
            callback(id, newValue);
        }
    };

    useEffect(()=>{
        setCheckValue(checked);
    }, [checked])

    return (
        <>
            <input className="w-[10px] h-[10px] sm:w-[20px] sm:h-[20px] bg-white checked:bg-gray-600 align-middle appearance-none cursor-pointer rounded-[50%] border-2 border-solid border-[#ddd]" 
                id={`id-${id}`} name={`id-${id}`} checked={checkValue} type="checkbox" onChange={handleCheck}
            />
            <label className="text-white text-sm sm:text-xl ml-2" htmlFor={`id-${id}`}>{label}</label>
        </>
    );
}