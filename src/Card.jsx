import "./Youtubee.css"
import Button from "./Button"


export default function Card(values) {
    return (
        <>
            <div className="box">
                <img src={values.img} alt="" />
                <h3>{values.title}</h3>
                <p>{values.name}</p>
                <Button views={values.views} />
            </div>
        </>
    )
}