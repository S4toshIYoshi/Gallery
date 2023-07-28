import lightWhite from "../images/lightWhite"
import lightBlack from "../images/lightBlack"

const LightIcon = ({color = "black"}) => {
    if(color === "white")
        return <img src={lightWhite} alt="logo" />
    else
        return <img src={lightBlack} alt="logo" />
}

export default LightIcon