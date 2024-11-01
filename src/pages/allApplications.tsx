import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useEthersSigner } from "../ContractMethods/providerChange";
import { fetchAllReq } from "../ContractMethods/authorityMethods";
import ApplicationCard from "../components/applicationCard";
import NavBar from "../components/navbar";

export type fetchAllReturnType = {
    0: string,
    1: string,
    2: string,
    3: string,
    4: string,
    5: string
}

const AllAppications = () => {
    const connectedAccount = useAccount();
    const [loading, setLoading] = useState<boolean>(true);
    const [allApplications, setAllApplications] = useState<fetchAllReturnType[] | undefined>([])
    const signer = useEthersSigner({chainId: connectedAccount.chainId});
    useEffect(() => {
        fetchAllReq(signer).then(data => {
            data?.map((item:any) => console.log(item[4]))
            setAllApplications(data);
        }).finally(() => setLoading(false));
    }, [connectedAccount, signer])

    return ( 
        <div className="flex flex-col min-h-screen gap-y-8 items-center bg-[#212121]">
            <NavBar/>
            <div className="flex w-full justify-center items-center">
            {
                loading ? 
                (<div>Loading...</div>) :
                (
                    <div className="flex flex-wrap gap-x-5 gap-y-5 w-full px-10 items-center">
                        {
                            allApplications?.map((item:fetchAllReturnType | undefined, index:number) => {
                                return(
                                    <ApplicationCard key={index} item={item}/>
                                )
                            })
                        }
                    </div>
                )
            }
            </div>
        </div>
     );
}
 
export default AllAppications;