import React from "react"


const Button = ({label}) =>{
    return(
        <button className="bg-slate-800 py-3 px-10 rounded-md text-xl text-white" type="button">{label}</button>
    )
}

export default Button