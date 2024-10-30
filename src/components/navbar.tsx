import { ConnectButton } from "@rainbow-me/rainbowkit";
import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="bg-[#212121] w-screen text-[#ffffff] pt-6 px-10">
            <div className="flex justify-between rounded-3xl bg-[#2D2D2D] py-5 px-6 items-center">
                <div>
                <NavLink to={'/'}>DECENTRALISED U</NavLink>
                </div>
                <div className="flex gap-x-16">
                    <NavLink to={'/documents'}>Your Documents</NavLink>
                    <NavLink to={'/request'}>Request</NavLink>
                    <NavLink to={'/apply'}>Apply Docs</NavLink>
                </div>
                <div>    
                    <ConnectButton chainStatus="icon" showBalance={false} />        
                </div>
            </div>
        </div>
    )
}

export default NavBar;