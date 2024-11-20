import { useState } from "react"
import Header from "../components/header/header"
import RenderMatching from "../components/renderMatching/renderMatching"

const HomePage = () => {

    const [attempt, setAttempt] = useState(0)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [column, setColumn] = useState(4)    
    
    const handleAttempt = (newAttempts) => {
        setAttempt(newAttempts)
    }

    const reset = () => {
        window.location.reload()      
    }   
      
    const toggleDropdown = () => {
        console.log('clicked');
        
        setDropdownOpen(!dropdownOpen);
    }

    const adjustColumns = (amount) => {
        setColumn(prevColumns => {
            const newColumns = prevColumns + amount
            if (newColumns < 2) return 2;
            if (newColumns > 8) return 8;

            return newColumns
        })
    }
   
    return(
        <div className=" flex flex-col justify-center align-middle items-center gap-4">
            <Header />
            <h1  className=" text-lg font-semibold">Connect group of 2 words by clicking on related words</h1>
            <div className=" relative right-[-380px] top-[-50px] flex flex-col  gap-4 bg-black">
                <div onClick={toggleDropdown} className=" w-56 bg-black text-white relative cursor-pointer px-2 py-2 shadow-lg rounded-md">Config</div>
                {dropdownOpen && (
                    <div className="border border-black absolute top-[40px] w-56 bg-[rgb(47,47,47)] text-white flex gap-6 flex-col p-2">                        
                        <div className="flex gap-4">
                            <span>columns</span>
                            <span onClick={() => adjustColumns(-1)} className=" cursor-pointer">-</span>
                            <span>{column}</span>
                            <span onClick={() => adjustColumns(1)}  className="cursor-pointer">+</span>
                        </div>
                    </div>
                )}
            </div>
            
            <RenderMatching handleAttempt={handleAttempt} column={column}/>
            <h1>Attempts : {attempt}</h1>
            <button onClick={reset} className=" bg-blue-600 px-4 py-2 text-white">Reset</button>
        </div>
    )
}

export default HomePage
