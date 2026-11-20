import Card from "./Card"
import "./Youtubee.css"
import "./Sidebar"

export default function Main(){
    return(
        <>
        <div className="main">
        <Card img = "https://i.ytimg.com/vi/BsDoLVMnmZs/hqdefault.jpg" title = "HTML Course" views = {128000} name = "Code with Harry"></Card>
        <Card img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUq85JGX-1yA78gyM7iXRT0cbfV3BoRv_XG-SRtZEejA&s" title = "Tum by Murtaza Qizilbash" views = {146000} name = "Murtaza Qizilbash"></Card>
        <Card img = "https://i.ytimg.com/vi/hlGoQC332VM/maxresdefault.jpg" title = "SQL Course in 3 Hours" views = {378000} name = "Apna College"></Card>
        </div>
        <div className="main">
            <Card img = "https://i.ytimg.com/vi/6kZhZJpYdCs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBGH9yp0efUYp_ZXLu282YyMkumRw" title = "Muree Live Streaming" views = {216000} name = "Pakistan Stream"></Card>
        <Card img = "https://i.ytimg.com/vi/RGKi6LSPDLU/maxresdefault.jpg" title = "Eact Tutorial in Hindi" views = {129000} name = "Code with Harry"></Card>
        <Card img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5VjKQmlIRVKPe_-m0aSlE1cSSwGopnf8E1p5hBtXscDTDOtq1nH87_EM&s=10" title = "GHL Tutorial for beginners" views = {118000} name = "Krause Tutorials"></Card>
        </div>
        </>
    )
}