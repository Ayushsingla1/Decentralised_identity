import ApplyDocsCard from "../components/applyDocsCard"
import NavBar from "../components/navbar"
import { userDocuments } from "../data/docs"

const ApplyDocs = () => {
    return (
        <div className="w-screen min-h-screen bg-[#212121]">
            <NavBar/>
            <div className="flex flex-wrap gap-x-10 mt-10 px-10 gap-y-10">
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