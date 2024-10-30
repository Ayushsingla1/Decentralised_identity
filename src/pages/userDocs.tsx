import NavBar from "../components/navbar";
import { userDocuments } from "../data/docs";
import ViewDocsCard from "../components/viewDocsCard";

const UserDocs = () => {
        return (
            <div className="w-screen min-h-screen bg-[#212121] pb-10">
                <NavBar/>
                <div className="text-center text-white text-2xl font-semibold mt-10">Your Documents</div>
                <div className="flex flex-wrap gap-x-10 mt-10 px-10 gap-y-10">
                    {
                        userDocuments.map((doc,index) => (
                           <ViewDocsCard item = {doc} key = {index}/>
                        ))
                    }
                </div>
            </div>
        )
}

export default UserDocs;