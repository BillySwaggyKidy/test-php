import { ChangeEvent, useState } from "react";

export default function TextField({id, type = "text", label, value = "", callback} : {id:string, type?:string, label:string, value?:string, callback: (id:string, value: string) => void}) {
    const [text, setText] = useState<string>(value);

    const handleText = (event : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newText = event.currentTarget.value;
        setText(newText);
        callback(id, newText);
    }

    return (
        <input className="h-full w-full bg-white rounded-3xl placeholder:text-gray-400 indent-8 text-sm sm:text-xl"
         id={id} placeholder={label} value={text} type={type} onChange={handleText}
        />
    );
}