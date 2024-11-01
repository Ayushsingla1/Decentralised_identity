const RequestedDocCard = ({res}:any) => {
    const docImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCPHMlo2jwwbPDI-PalR-7lNgdBfeFQItlg&s"
    return ( 
    <div className="w-10/12 max-w-[1420px] h-[250px] rounded-lg bg-[#2A3D4B] flex justify-between items-center">
        <div className="flex relative w-full gap-x-2">
            <div className="max-w-[300px] flex justify-center items-center px-3 ">
                <img src={docImg} className="rounded-lg" alt="aadhar card"/>
            </div>
            <div className="flex justify-between flex-col">
                <span className="text-white font-sans text-2xl">Name: {res[0] + " " + res[1]}</span>
                <div className="flex flex-col gap-y-2">
                    <span className="text-white font-sans text-2xl">Age: {parseInt(res[4])}</span>
                    <span className="text-white font-sans text-2xl">Public Key: {res[5].slice(0,7) + "..." + res[5].slice(-3)}</span>
                </div>
            </div>
            <div className="bg-[#D9D9D9] absolute right-4 bottom-0  px-4 py-1 rounded-md mb-2">
                Requested
            </div>
        </div>
    </div> );
}
export default RequestedDocCard;