import lightWhite from "../images/lightWhite.svg"
import lightBlack from "../images/lightBlack.svg"

const LightIcon = ({darkTheme = false}) => {
    if(darkTheme)
        return <img src={lightWhite} alt="logo" />
    else
        return <img src={lightBlack} alt="logo" />
}

export default LightIcon