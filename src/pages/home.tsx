import NavBar from "../components/navbar";


const Home  = () => {
    return (
        <div className="bg-[#212121] w-screen min-h-screen">
            <NavBar/>
            <div className="bg-[#212121] text-white">
                This is homePage
            </div>
        </div>
    )
}

export default Home;