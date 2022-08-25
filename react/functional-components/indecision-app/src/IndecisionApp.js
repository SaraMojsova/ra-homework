import { useState } from "react";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Options from "./components/Options/Options";
import AddOptions from "./components/AddOption/AddOption";
import DarkModeBtn from "./components/DarkModeBtn/DarkModeBtn"

const IndecisionApp = () => {
  const title = 'Indecision App';
  const subtitle = 'Indecision App subtitle'
  const buttonText = 'What should I do?'
  const removeText = 'Remove All'

  // const options = ['Option 1', 'Option 2', 'Option 3']
  const [options, setOptions] = useState([])
  // const [list,updateList]=useState(options)

  const handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value in this input'
    } else if (options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    setOptions(options.concat(option))
  }

  const handlePick = () => {
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum]
    alert(option)
  }

  const handleDeleteOptions = () => {
    setOptions([]);
  }

  // const handleDeleteOption=(optionToRemove)=>{
  //   // setOptions(options.filter(option=> optionToRemove!==option))
  //   console.log('is working')
  // }

  // const [list,updateList]=useState(options)
  // const handleDeleteOption=(event,optionToRemove)=>{
  //   event.target.style.display='none'
  //       console.log('is working')

  //   updateList(list.filter(option=> option !==optionToRemove))
  // }
  
  // React stylings homework
  const darkTheme={
    background:'black',
    color:'white'
  }
  const lightTheme={
    background:'white',
    color:'black'
  }
  const themes={
    light:lightTheme,
    dark:darkTheme
  }
  const [mode,setMode]=useState('light')
  const toggleMode=()=>{
      mode==='light'? setMode('dark') : setMode('light')
  }
  const style=themes[mode]
  // React stylings -------
  return (
    <>
    <div className='container'
    style={style} mode={mode} onClick={toggleMode}
    >
      <DarkModeBtn mode={mode} className={mode}/>

      <Header
        title={title}
        subtitle={subtitle}
      />
      <Button
        buttonText={buttonText}
        handlePick={handlePick}
        hasOptions={options.length > 0}
      />
      <Options
        removeText={removeText}
        options={options}
        handleDeleteOptions={handleDeleteOptions}
        // handleDeleteOption={handleDeleteOption}
      />
      <AddOptions handleAddOption={handleAddOption} />
    </div>
    </>
  )
}

export default IndecisionApp;
