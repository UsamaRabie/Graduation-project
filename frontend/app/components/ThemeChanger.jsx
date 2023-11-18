import { useTheme } from 'next-themes'
import { useState , useEffect } from 'react'
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
function ThemeChanger() {
  const { theme, setTheme } = useTheme()
  const [mounted , setMounted]=useState(false)

  useEffect(()=>{
      setMounted(true)
  },[])

  if(!mounted){
    return null
  }
  return (
    <div className='text-white'>
    {
      theme==="dark"? 
      <button  onClick={() => setTheme('light')}>  
          <FaMoon className='text-xl'/> 
      </button> 
      : 
      <button  onClick={() => setTheme('dark')}>

       <IoIosSunny className='text-2xl' />
      </button>
    }
    </div>
  )
}

export default ThemeChanger