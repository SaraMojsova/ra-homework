// import styles from '../Button.module.css'
// import {useState} from "react"
import styled from 'styled-components'

const Button =(props)=>{
// const [mode,setMode]=useState('light')
// const toggleMode=()=>{
//     mode==='light'? setMode('dark') : setMode('light')
// }

const Btn= styled.button`
    background-color: ${props.mode==='light'?'white':'black'};
    color:${props.mode==='light'?'black':'white'};
`;
// className mode does nothing just switches the className
    return(
        <Btn mode={props.mode} style={props.style} className={props.mode}  onClick={props.toggleMode}>{props.mode==='light'? 'Light Mode':'Dark Mode'}</Btn>
    )
    

}
export default Button;
