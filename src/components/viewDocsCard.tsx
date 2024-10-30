import { useNavigate } from "react-router-dom";

const ViewDocsCard = ({item} : {item : any}) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center py-2 bg-[#2A3D4B] rounded-md gap-y-6 px-1 shadow-inner w-72 hover:scale-105 transition-all duration-200 ease-linear">
            <div><img src={item.docImg} className="rounded-md"></img></div>
            <div className="text-[#EAE0D5] font-bold text-lg">{item.docName}</div>
            <div className="text-[#EAE0D5]">{item.docDescription}</div>
            <button className="bg-[#D9D9D9] px-4 py-1 rounded-md mb-2" onClick={() => navigate('/view-docs')}>View</button>
        </div>
    )
}

export default ViewDocsCard;