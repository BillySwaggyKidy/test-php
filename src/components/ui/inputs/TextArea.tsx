import { ChangeEvent, useState } from "react";

export default function TextArea({id, label, value = "", callback} : {id:string, label:string, value?:string, callback: (id:string, value: string) => void}) {
    const [textarea, setTextarea] = useState<string>(value);

    const handleTextArea = (event : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newTextarea = event.currentTarget.value;
        setTextarea(newTextarea);
        callback(id, newTextarea);
    }

    return (
        <textarea className="h-full w-full pt-4 pl-8 bg-white rounded-3xl placeholder:text-gray-400 text-sm sm:text-lg" id={id} placeholder={label} value={textarea} onChange={handleTextArea}/>
    );
}