import NavBar from "../components/navbar";
// import { userDocuments } from "../data/docs";
import ViewDocsCard from "../components/viewDocsCard";
import { useAccount } from "wagmi";
import { useEthersSigner } from "../ContractMethods/providerChange";
import { useEffect, useState } from "react";
import { getCidByAddress } from "../ContractMethods/userMethods";

const UserDocs = () => {

    const connectedAccount = useAccount();
    const signer = useEthersSigner({chainId: connectedAccount.chainId});
    const [userDocument, setUserDocument] = useState<string | undefined | unknown>(undefined);

    const getCid = async () => {
        
        const hash = await getCidByAddress(signer, connectedAccount.address)
        setUserDocument(hash);
    }

    useEffect(() => {

        if(signer){
            getCid().then(() => {
                console.log(typeof Array.from([userDocument]))
            })
        }
    }, [connectedAccount.address, signer])

        return (
            <div className="w-screen min-h-screen bg-[#212121] pb-10">
                <NavBar/>
                <div className="text-center text-white text-2xl font-semibold mt-10">Your Documents</div>
                <div className="flex flex-wrap justify-center items-center gap-x-10 mt-10 px-10 gap-y-10">
                {
                    userDocument? (<ViewDocsCard hash = {userDocument}/>) :
                    (<div className="text-white font-sans text-2xl">
                        Wait for the authority to approve...
                    </div>)
                }
                </div>
            </div>
        )
}

export default UserDocs;