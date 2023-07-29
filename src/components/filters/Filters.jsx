import { useState } from "react"
import { BASE_URL, PAINTINGS } from "../../data/api"
import InputSelect from "./InputSelect"


const Filters = ({actionSetUrl, dependencies}) => {
    const [authors, location] = dependencies

    const [namePicture, setNamePicture] = useState()
    const [selectedAuthor, setSelectedAuthor] = useState()
    const [selectedLocation, setSelectedLocation] = useState()
    const [created, setCreated] = useState()
    
    actionSetUrl(`
    ${PAINTINGS}?
    ${namePicture ? `&q=${namePicture}` : ""}
    ${selectedAuthor ? `&authorId=${selectedAuthor}` : ""}
    ${selectedLocation ? `&locationId=${selectedLocation}` : ""}
    ${created ? `&createdId=${created}` : ""}
    `)

    


  return (
    <form>
        <input type="text" placeholder="Name"/>
        <br />
        <InputSelect name="Authors" data={authors} ObjectName="name" actionChoice={setSelectedAuthor}/>
        <br />
        <InputSelect name="locations" data={location} ObjectName="location" actionChoice={setSelectedLocation}/>
    </form>
  )
}

export default Filters