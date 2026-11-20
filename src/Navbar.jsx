import "./Youtubee.css"


export default function Navbar(props){
    return(
        <>
        <div className="navMain">
            <img src={props.link} alt="Logo" />
            <input placeholder="   Search" type="text" />
            <div className="navButton">
            </div>
        </div>
        </>
    )
}

