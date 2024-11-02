import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const NavBar = () => {
    const connectedAccount = useAccount();
    const {pathname} = useLocation();
    const navigate = useNavigate()
    useEffect(() => {
        if(connectedAccount.address && connectedAccount.address === '0xF3b456F10C60983808BBDE8Ee6d7B6a1dff9e3Cb' && pathname === "/"){
            navigate("/admin")
        }
    }, [connectedAccount.address])

    if(connectedAccount.address === '0xF3b456F10C60983808BBDE8Ee6d7B6a1dff9e3Cb'){
        return <div className="bg-[#212121] w-screen text-[#ffffff] pt-6 px-10">
            <div className="flex justify-between rounded-3xl bg-[#2D2D2D] py-5 px-6 items-center">
                <div>
                <NavLink to={'/'} className="text-3xl">InviCrypt</NavLink>
                </div>
                <div className="flex gap-x-16">
                    <NavLink to={'/allApplications'}>Requested Applications</NavLink>
                    {/* <NavLink to={'/request'}>Request</NavLink>
                    <NavLink to={'/apply'}>Apply Docs</NavLink> */}
                </div>
                <div>    
                    <ConnectButton chainStatus="icon" showBalance={false} />        
                </div>
            </div>
        </div> 
    }
    return (
        <div className="bg-[#212121] w-screen text-[#ffffff] pt-6 px-10">
            <div className="flex justify-between rounded-3xl bg-[#2D2D2D] py-5 px-6 items-center">
                <div>
                <NavLink to={'/'} className="text-3xl">InviCrypt</NavLink>
                </div>
                <div className="flex gap-x-16">
                    <NavLink to={'/documents'} className="text-lg">Your Documents</NavLink>
                    <NavLink to={'/request'} className="text-lg">Request</NavLink>
                    <NavLink to={'/apply'} className="text-lg">Apply Docs</NavLink>
                </div>
                <div>    
                    <ConnectButton chainStatus="icon" showBalance={false} />        
                </div>
            </div>
        </div>
    )
}

export default NavBar;