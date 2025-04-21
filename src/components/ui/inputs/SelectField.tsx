import { selectDataType } from "@/types/inputs";
import { ChangeEvent, useState } from "react";


export default function SelectField({id, label, selectContent, value, callback} : {id:string, label:string, selectContent:selectDataType[], value:string, callback: (id:string, value:string) => void}) {
    const [selectValue, setSelectValue] = useState<string>(value);

    const handleSelectChange = (event : ChangeEvent<HTMLSelectElement>) => {
        const newSelect = event.currentTarget.value;
        setSelectValue(newSelect);
        callback(id, newSelect);
    }

    return (
        <select className="h-full w-full bg-white rounded-3xl text-gray-400 pl-4 text-sm sm:text-xl"
            id={id} name={id} value={selectValue} onChange={handleSelectChange}
        >
            <option value="">{label}</option>
            {
                selectContent.map((option)=>
                    <option key={option.label} value={option.value}>{option.label}</option>
                )
            }
        </select>
    );
}