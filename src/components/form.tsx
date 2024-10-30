import React, { useState } from "react";
interface userDetails {
    firstName : string,
    lastName : string,
    age : number
}
const Form = () => {
    const [details,setDetails] = useState<userDetails>({
        firstName : "",
        lastName : "",
        age : 0
    })

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value }: { name: string, value: string } = e.target;
        setDetails((prev: userDetails) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="bg-[#434548] opacity-70 rounded-t-lg min-w-[60%] text-black py-6 px-10">
            <div className="text-center text-black text-2xl font-semibold">Enter Your Details</div>       
            <form className="mt-10 flex flex-col gap-y-5">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="firstName" className="font-semibold text-lg">FirstName :</label>
                        <input type="text" placeholder="firstName" name="firstName" value = {details.firstName} id="firstName" className="w-40 px-2 border-2 py-1 rounded-md" onChange={(e) => changeHandler(e)}></input>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="lastName" className="font-semibold text-lg">LastName :</label>
                        <input type="text" placeholder="lastName" name="lastName" value = {details.lastName} id = "lastName" className="w-40 px-2 border-2 py-1 rounded-md" onChange={(e) => changeHandler(e)}></input>
                    </div>
                </div>
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="age" className="font-semibold text-lg">Age</label>
                    <input type="number" placeholder="age" min={0} name="age" className="w-40 px-2 border-2 py-1 rounded-md" id = "age" value={details.age} onChange={(e) => changeHandler(e)}></input>
                </div>
            </form>
        </div>
    )
}

export default Form;