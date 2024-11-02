import { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import { useAccount } from "wagmi";
import { useEthersSigner } from "../ContractMethods/providerChange";
import { getRequestsByAddress } from "../ContractMethods/userMethods";
import RequestedDocCard from "../components/requestedDocCard";

const Requests = () => {
    const [detail, setDetail] = useState<any>();
    const connectedAccount = useAccount();
    const signer = useEthersSigner({chainId: connectedAccount.chainId});
    useEffect(() =>{

        if(signer){
            getRequestsByAddress(signer, connectedAccount.address).then((res) => {
                if(res){
                    setDetail(res);
                }
            })
        }
    }, [signer])

    return (
        <div className="w-screen min-h-screen bg-[#212121]">
            <NavBar/>
            <div className="text-center text-white text-2xl font-semibold mt-10">Your Requested Documents: </div>
            <div className="flex flex-col justify-center items-center gap-x-10 mt-10 px-10 gap-5 w-full">
                {
                    detail ? (<RequestedDocCard res={detail}/>) : (<div className="text-white text-xl">No reqested documents</div>)
                }
            </div>
        </div>
    )
}

export default Requests;