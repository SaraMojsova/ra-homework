import styles from './Login.module.css'

const InputField =({type,placeholder,onChange})=>{
    return(
        <input className={styles['input-field']}
        type={type}
        placeholder={placeholder}
        name={type}
        onChange={onChange}
        />
    )
}
export default InputField