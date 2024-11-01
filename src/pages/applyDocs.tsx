import ApplyDocsCard from "../components/applyDocsCard"
import NavBar from "../components/navbar"
import { userDocuments } from "../data/docs"

const ApplyDocs = () => {
    return (
        <div className="w-screen min-h-screen bg-[#212121] pb-10">
            <NavBar/>
            <div className="text-center text-white text-2xl font-semibold mt-10">CHOOSE DOCUMENTS YOU NEED</div>
            <div className="flex flex-wrap justify-center items-center gap-x-10 mt-10 px-10 gap-y-10">
                {
                    userDocuments.map((doc,index) => (
                       <ApplyDocsCard item = {doc} key = {index}/>
                ))
                }
            </div>
        </div>
    )
}

export default ApplyDocs;