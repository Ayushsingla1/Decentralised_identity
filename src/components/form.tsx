import React, { useState } from "react";
import { useAccount } from "wagmi";
import { useEthersSigner } from "../ContractMethods/providerChange";
import { submitDetails } from "../ContractMethods/userMethods";
import { useNavigate } from "react-router-dom";
export interface userDetails {
    firstName : string,
    lastName : string,
    age : number,
    dob : string,
    fatherName : string,
}
const Form = ({address}:{ address: `0x${string}` | undefined }) => {
    const navigate = useNavigate()
    const connectedAcc = useAccount();
    const signer = useEthersSigner({chainId: connectedAcc.chainId});
    const [details,setDetails] = useState<userDetails>({
        firstName : "",
        lastName : "",
        age : 0,
        dob : "",
        fatherName : ""
    })

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value }: { name: string, value: string } = e.target;
        setDetails((prev: userDetails) => ({
            ...prev,
            [name]: value,
        }));
    };

    const submitHandeler = async () => {
        console.log(details)
        const isUploaded = await submitDetails(signer, details)
        if(isUploaded){
            alert('details are sent for approval')
        }else{
            alert('error occoured!')
        }
        navigate('/apply')
    }

    return (
        <div className="bg-gray-200 opacity-90 rounded-lg min-w-[700px] p-8 shadow-lg mx-auto text-gray-800">
    <div className="text-center text-2xl font-semibold text-gray-700 mb-6">Enter Your Details</div>       
    <div className="space-y-6 flex flex-col gap-y-2 items-center justify-center">
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
                <label htmlFor="fatherName" className="font-semibold text-lg text-gray-600">Father's Name:</label>
                <input 
                    type="text" 
                    placeholder="Father's Name" 
                    name="fatherName" 
                    value={details.fatherName} 
                    id="fatherName" 
                    className="w-full md:w-48 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => changeHandler(e)}
                />
            </div>
            <div className="flex flex-col cursor-pointer gap-2">
                <label htmlFor="publicKey" className="font-semibold text-lg text-gray-600">Public Key:</label>
                <div
                    className="w-full md:w-48 px-3 py-2 border border-gray-300 bg-white  rounded focus:outline-none focus:ring-2 focus:ring-blue-500"

                >
                    {address?.slice(0, 8) + "..." + address?.slice(-6)}
                </div>
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
        <button onClick={submitHandeler} className="w-4/12 py-2 px-4 place-self-center bg-violet-600 text-white font-semibold rounded-md shadow-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500">
            Submit
        </button>
    </div>
</div>

    )
}

export default Form;