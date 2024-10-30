import React, { useState } from "react";
interface userDetails {
    firstName : string,
    lastName : string,
    age : number,
    dob : string,
    fatherFirstName : string,
    fatherLastName : string
}
const Form = () => {
    const [details,setDetails] = useState<userDetails>({
        firstName : "",
        lastName : "",
        age : 0,
        dob : "",
        fatherFirstName : "",
        fatherLastName : ""
    })

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value }: { name: string, value: string } = e.target;
        setDetails((prev: userDetails) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="bg-gray-200 opacity-90 rounded-lg min-w-[60%] p-8 shadow-lg mx-auto text-gray-800">
    <div className="text-center text-2xl font-semibold text-gray-700 mb-6">Enter Your Details</div>       
    <form className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="font-semibold text-lg text-gray-600">First Name:</label>
                <input 
                    type="text" 
                    placeholder="First Name" 
                    name="firstName" 
                    value={details.firstName} 
                    id="firstName" 
                    className="w-full md:w-48 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => changeHandler(e)}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="font-semibold text-lg text-gray-600">Last Name:</label>
                <input 
                    type="text" 
                    placeholder="Last Name" 
                    name="lastName" 
                    value={details.lastName} 
                    id="lastName" 
                    className="w-full md:w-48 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => changeHandler(e)}
                />
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex flex-col gap-2">
                <label htmlFor="fatherFirstName" className="font-semibold text-lg text-gray-600">Father's First Name:</label>
                <input 
                    type="text" 
                    placeholder="Father's First Name" 
                    name="fatherFirstName" 
                    value={details.fatherFirstName} 
                    id="fatherFirstName" 
                    className="w-full md:w-48 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => changeHandler(e)}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="fatherLastName" className="font-semibold text-lg text-gray-600">Father's Last Name:</label>
                <input 
                    type="text" 
                    placeholder="Father's Last Name" 
                    name="fatherLastName" 
                    value={details.fatherLastName} 
                    id="fatherLastName" 
                    className="w-full md:w-48 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => changeHandler(e)}
                />
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex flex-col gap-2">
                <label htmlFor="dob" className="font-semibold text-lg text-gray-600">Date of Birth:</label>
                <input 
                    type="date" 
                    placeholder="Date of Birth" 
                    name="dob" 
                    value={details.dob} 
                    id="dob" 
                    className="w-full md:w-48 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => changeHandler(e)}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="age" className="font-semibold text-lg text-gray-600">Age:</label>
                <input 
                    type="number" 
                    placeholder="Age" 
                    min={0} 
                    name="age" 
                    value={details.age} 
                    id="age" 
                    className="w-full md:w-48 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => changeHandler(e)}
                />
            </div>
        </div>
    </form>
</div>

    )
}

export default Form;