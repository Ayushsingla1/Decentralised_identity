import toast from "react-hot-toast";
import { uploadIpfsToBlockChain, uploadToIPFS } from "../ContractMethods/authorityMethods";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import { useEthersSigner } from "../ContractMethods/providerChange";

const ApplicationCard =  ({item}: any) => {
    const docImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCPHMlo2jwwbPDI-PalR-7lNgdBfeFQItlg&s"
    const navigate = useNavigate();
    const connectedAccount = useAccount()
    const signer = useEthersSigner({chainId: connectedAccount.chainId})

    const generatePdf = async (details:any) => {
        const doc = new jsPDF();
        doc.setFontSize(16)
        doc.text("User Details", 20, 20);
        // Adding details to the PDF
        doc.setFontSize(12);
        doc.text(`First Name: ${details.firstName}`, 20, 40);
        doc.text(`Last Name: ${details.lastName}`, 20, 50);
        doc.text(`Father's Name: ${details.fatherName}`, 20, 60);
        doc.text(`Date of Birth: ${details.DOB}`, 20, 80);
        doc.text(`Age: ${details.age}`, 20, 90);
        doc.text(`Address: ${details.publicAddress}`, 20, 100);
        const pdfBlob = doc.output("blob");
        const data = await uploadToIPFS(pdfBlob)
        if(data){
            console.log("pdf created successfully")
            toast.success("Successfully applied")
            const isUploadedToBlockchian = await uploadIpfsToBlockChain(signer, data.pin['cid'], details.publicAddress, connectedAccount)
            if(isUploadedToBlockchian){
                toast.success("successfully uploaded to blockchain!");
                navigate('/allApplications');
            }else{
                console.log('error while uploading to blockchian')
                toast.error('error while uploading to blockchian');
                navigate('/')
                return;
            }
        }else{
            console.log('error while pdf creation')
            toast.error('error while pdf creation');
            navigate('/')
            return;
        }
    }



    const approveBtn = () => {
        console.log('logic here')
        const details = {
            firstName : item[0],
            lastName: item[1],
            DOB : item[2],
            fatherName : item[3],
            age: parseInt(item[4]),
            publicAddress: item[5]
          }
        generatePdf(details)
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