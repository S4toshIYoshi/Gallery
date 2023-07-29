import { useState } from "react"
import style from "./Filters.module.scss"

const InputSelect = ({name, data, ObjectName, actionChoice}) => {
    
    const [selected, setSelected] = useState(name)

    const [isOpen, setIsOpen] = useState(false)

    function choice(e, id) {
        setSelected(e.target.innerText)
        actionChoice(id)
    }

    return (
        <div className={style.select} onClick={() => setIsOpen(isOpen ? false : true)}>
            <span>{selected}</span>
            {isOpen && data.map((el) => {
                return (<div key={el.id} onClick={(e) => choice(e, el.id)}>
                    {el[`${ObjectName}`]}
                </div> )
            })}
        </div>
    )
    
}

export default InputSelect