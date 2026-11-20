import "./Youtubee.css"
import { useState } from "react"

export default function Views(values){
    const [views, setViews] = useState(Number(values.views))
    return(
        <>
        <p>Views: {views}</p>
        <button className = "viewButton" onClick={
                    () => setViews(views + 1)}>View</button>
        </>
    )
}