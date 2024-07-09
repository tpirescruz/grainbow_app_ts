import React, { FC, ReactNode } from "react"
import './button.css'

type ButtonProps = {
    icon?: ReactNode
    text?: string
    onclick: () => void
    type?: "button" | "submit"
    outlined?: boolean
    disabled?: boolean
}

const Button: FC<ButtonProps> = ({ onclick, text, icon, type, outlined, disabled }) => {
    return (
        <button disabled={disabled} type={type ?? "button"} className={`button ${outlined && "btn-outlined"}`} onClick={() => onclick()}>
            {text}
            {icon}
        </button>
    )
}

export default Button