import React, { useState } from "react";
import jsPDF from "jspdf";
import { uploadToIPFS } from "../web3/uploadDetails";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
interface userDetails {
    firstName : string,
    lastName : string,
    age : number,
    dob : string,
    fatherFirstName : string,
    fatherLastName : string,
    address : string,
    city : string,
    state : string,
    pincode : string
}
const Form = () => {
    const [details,setDetails] = useState<userDetails>({
        firstName : "",
        lastName : "",
        age : 0,
        dob : "",
        fatherFirstName : "",
        fatherLastName : "",
        address : "",
        city  : "",
        state : "",
        pincode : ""
    })

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value }: { name: string, value: string } = e.target;
        setDetails((prev: userDetails) => ({
            ...prev,
            [name]: value,
        }));
    };
    const navigate = useNavigate();
    const generatePdf = () => {
        const doc = new jsPDF();
        doc.setFontSize(16)
        doc.text("User Details", 20, 20);

        // Adding details to the PDF
        doc.setFontSize(12);
        doc.text(`First Name: ${details.firstName}`, 20, 40);
        doc.text(`Last Name: ${details.lastName}`, 20, 50);
        doc.text(`Father's First Name: ${details.fatherFirstName}`, 20, 60);
        doc.text(`Father's Last Name: ${details.fatherLastName}`, 20, 70);
        doc.text(`Date of Birth: ${details.dob}`, 20, 80);
        doc.text(`Age: ${details.age}`, 20, 90);
        doc.text(`Address: ${details.address}`, 20, 100);
        doc.text(`City: ${details.city}`, 20, 110);
        doc.text(`State: ${details.state}`, 20, 120);
        doc.text(`Postal Code: ${details.pincode}`, 20, 130);
        const pdfBlob = doc.output("blob");
        uploadToIPFS(pdfBlob)
        console.log("pdf created successfully")
        toast.success("Successfully applied")
        navigate('/request')
    }


    const submitHandler = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        generatePdf();
        console.log(details)
    }

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
        <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex flex-col gap-2">
                <label htmlFor="state" className="font-semibold text-lg text-gray-600">State:</label>
                <input 
                    type="text" 
                    placeholder="state" 
                    name="state" 
                    value={details.state} 
                    id="state" 
                    className="w-full md:w-48 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => changeHandler(e)}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="city" className="font-semibold text-lg text-gray-600">City:</label>
                <input 
                    type="text" 
                    placeholder="city" 
                    min={0} 
                    name="city" 
                    value={details.city} 
                    id="city" 
                    className="w-full md:w-48 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => changeHandler(e)}
                />
            </div>
        </div>
        <div className="flex flex-col gap-2">
                <label htmlFor="pincode" className="font-semibold text-lg text-gray-600">Postal Code:</label>
                <input 
                    type="text"
                    placeholder="pincode" 
                    name="pincode" 
                    value={details.pincode} 
                    id="pincode" 
                    className="w-full md:w-48 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => changeHandler(e)}
                />
        </div>
        <div className="flex flex-col gap-2">
                <label htmlFor="address" className="font-semibold text-lg text-gray-600">Address:</label>
                <input 
                    type="text"
                    placeholder="address" 
                    name="address" 
                    value={details.address} 
                    id="address" 
                    className="w-full md:w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => changeHandler(e)}
                />
        </div>
        <div className="flex items-center justify-center"><button onClick={(e) => {submitHandler(e)}} className="px-2 py-2 w-28 self-center bg-gray-300 rounded-md hover:scale-110">Submit</button></div>
    </form>
</div>

    )
}

export default Form;