import { useEffect, useRef, useState } from "react";
import Button from "../../components/button";

export default function OTPLogin() {

    const NO_OF_DIGITS: number = 5;
    const [inputArr, setInputArr] = useState(new Array(NO_OF_DIGITS).fill(""));
    const refArr = useRef([]);

    function handleOnChange(value, index: number) {
        //Change the element in the array in this way, otherwise it won't work
        if(isNaN(value)) return;
        const newValue = value.trim();
        const newArr = [...inputArr]; // creating a new array
        newArr[index] = newValue.slice(-1);
        setInputArr(newArr);

        newValue && refArr.current[index+1]?.focus()
    }

    function handleKeyDown(e, index) {
        if(!e.target.value && e.key === "Backspace"){
            refArr.current[index-1]?.focus();
        }
    }

    useEffect(() => {
        refArr.current[0]?.focus();
    }, [])

    return (
        <div className="min-h-screen flex justify-center items-center bg-black">
            <div className="flex flex-col gap-6 border-2 p-6 border-white rounded-md">
            <div className="p-6 rounded-md flex gap-4 bg-slate-700">
                {inputArr.map((input, index) => {
                    return <input
                    ref={(input) => (refArr.current[index] = input)}
                    className="border-2 h-12 w-12 text-center border-white text-2xl text-white rounded-sm" 
                    type="text" key={index}
                    value={inputArr[index]}
                    onChange={(e) => handleOnChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    />
                })}
            </div>
            <Button>Submit</Button>
            </div>
        </div>
    )
}