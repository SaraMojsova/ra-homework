// import styles from '../Button.module.css'
import {useState} from "react"
import styled, { css } from 'styled-components'

const Button =(props)=>{
const [mode,setMode]=useState('light')
const toggleMode=()=>{
    mode==='light'? setMode('dark') : setMode('light')
}

const Btn= styled.button`
    ${(props)=>{
        switch(mode){
            case "dark":
                return css`
                background-color:black;
                color:white;
                `;
            default:
                return css`
                background-color:white;
                color:black;
                `;
        }
        
    }}
`;
// className mode does nothing just switches the className
    return(
        <Btn mode={mode} className={mode}  onClick={toggleMode}>{mode==='light'? 'Light Mode':'Dark Mode'}</Btn>
    )
    

}
export default Button;
