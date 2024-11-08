import { useAccount } from "wagmi";
import Form from "../components/form";
import NavBar from "../components/navbar"


const ApplyForm = () => {
    const connectedAccount = useAccount()
    return (
        <div className="bg-[#212121] w-screen min-h-screen">
            <NavBar/>
            <div className="flex justify-center mt-10">
                <Form address={connectedAccount.address}/>
            </div>
        </div>
    )
}

export default ApplyForm;