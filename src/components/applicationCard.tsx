import { fetchAllReturnType } from "../pages/allApplications";

const ApplicationCard = ({item}: any) => {
    const docImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCPHMlo2jwwbPDI-PalR-7lNgdBfeFQItlg&s"
    
    const approveBtn = () => {
        console.log('logic here')
    }

    return ( <div className="bg-[#2A3D4B] flex gap-y-2 flex-col pt-2 rounded-lg max-w-[500px] w-7/12 h-[600px]">
        {/* {parseInt(item[4])} */}
        <div><img src={docImg} className="rounded-md font-sans mx-auto w-11/12"></img></div>
        <div className="flex text-white flex-col text-xl gap-x-3 justify-center items-center w-full">
            <span>Applicant :</span>
            <span className="text-sm">{item[5]}</span>
        </div>
        <div className="flex text-white text-xl gap-x-3 justify-center items-center w-full">
            <span>Applicant's Name :</span>
            <span>{item[0]+ " " + item[1]}</span>
        </div>
        <div className="flex text-white text-xl gap-x-3 justify-center items-center w-full">
            <span>Applicant's DOB :</span>
            <span>{item[2]}</span>
        </div>
        <div className="flex text-white text-xl gap-x-3 justify-center items-center w-full">
            <span>Applicant's Age :</span>
            <span>{parseInt(item[4])}</span>
        </div>
        <div className="flex text-white text-xl gap-x-3 justify-center items-center w-full">
            <span>Applicant's Father's name :</span>
            <span>{item[3]}</span>
        </div>
        <button onClick={approveBtn} className="w-4/12 place-self-center mt-5 py-2 px-4 bg-violet-600 text-white font-semibold rounded-md shadow-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500">
            Approve
        </button>
    </div> );
}
 
export default ApplicationCard;