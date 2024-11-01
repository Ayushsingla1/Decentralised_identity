const ViewDocsCard = ({hash} : {hash : string | unknown}) => {
    const docImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCPHMlo2jwwbPDI-PalR-7lNgdBfeFQItlg&s"

    const viewHandeler = () => {
        window.open(`https://quicknode.quicknode-ipfs.com/ipfs/${hash}`, "_blank");
        }
    return (
        <div className="flex flex-col items-center py-2 bg-[#2A3D4B] rounded-md gap-y-6 px-1 shadow-inner w-72 hover:scale-105 transition-all duration-200 ease-linear">
            <div><img src={docImg} className="rounded-md"></img></div>
            <div className="text-[#EAE0D5] font-bold text-lg">{"aadhar"}</div>
            <div className="text-[#EAE0D5]">Life got fcked so card is also fcked</div>
            <button className="bg-[#D9D9D9] px-4 py-1 rounded-md mb-2" onClick={viewHandeler}>View</button>
        </div>
    )
}

export default ViewDocsCard;