import imagesGrey from "../images/logoGrey.svg"
import imagesBlack from "../images/logoBlack.svg"


const Logo = ({darkTheme = false}) => {
  
    if(darkTheme)
        return <img src={imagesGrey} alt="logo" />
    else
        return <img src={imagesBlack} alt="logo" />
  
}

export default Logo