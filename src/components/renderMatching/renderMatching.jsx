import { useEffect, useState } from "react";

const RenderMatching = ( { handleAttempt, column } ) => {

    const pairElement = [
        "India", "New Delhi", "Mexico", "Mexico City", "Italy", "Rome", "Malaysia", "Kuala Lumpur", "Male", "Maldives",
        "Iraq", "Baghdad", "Ireland", "Dublin", "Port Louis", "Mauritius", "Liechtenstein", "Vadus", "Maseru", "Lesotho", "Bishkek", "Kyrgystan", "Nouakchott", "Mauritania"        
    ]


    const [element, setElement] = useState([])
    const [selectedPair, setSelectedPair] = useState([])
    const [matchedPair, setMatchedPair] = useState([])
    const [secondColor, setSecondColor] = useState({})
    const [atempt, setAttempt] = useState(0)

    const shufflePairElement = () => {
        const shuffle = [... pairElement]

        for(let i = shuffle.length - 1; i > 0; i--){

            const j = Math.floor(Math.random() * (i + 1));

            [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]]    
            
        }       
        return shuffle
    }  

    const getElement = (item) => {
        console.log("clicked -->", item)
        if(selectedPair.length < 2){
            setSelectedPair(prev => [...prev, item])
        }
    }

    const gridStyle = {
        gridTemplateColumns: `repeat(${column}, 1fr)`,
    };        

    useEffect(() => {        
        setElement(shufflePairElement())
    }, [])

    useEffect(() => {
        if(selectedPair.length === 2){
            const [first, second] = selectedPair

            const isMatched = (first === "India" && second === "New Delhi") || 
            (first === "New Delhi" && second === "India") ||
            (first === "Mexico" && second === "Mexico City") ||
            (first === "Mexico City" && second === "Mexico") ||
            (first === "Italy" && second === "Rome") ||
            (first === "Rome" && second === "Italy") ||
            (first === "Malaysia" && second === "Kuala Lumpur") ||
            (first === "Kuala Lumpur" && second === "Malaysia") ||
            (first === "Male" && second === "Maldives") ||
            (first === "Maldives" && second === "Male") ||
            (first === "Iraq" && second === "Baghdad") ||
            (first === "Baghdad" && second === "Iraq") ||
            (first === "Ireland" && second === "Dublin") ||
            (first === "Dublin" && second === "Ireland") ||
            (first === "Port Louis" && second === "Mauritius") ||
            (first === "Mauritius" && second === "Port Louis") ||
            (first === "Liechtenstein" && second === "Vadus") ||
            (first === "Vadus" && second === "Liechtenstein") ||
            (first === "Maseru" && second === "Lesotho") ||
            (first === "Lesotho" && second === "Maseru") ||
            (first === "Bishkek" && second === "Kyrgystan") ||
            (first === "Kyrgystan" && second === "Bishkek") ||
            (first === "Nouakchott" && second === "Mauritania") ||
            (first === "Mauritania" && second === "Nouakchott")

            if(isMatched){
                setMatchedPair(selectedPair)
                setSecondColor({
                    [first] : "bg-green-300",
                    [second] : "bg-green-300"
                })
                setTimeout(() => {
                    setElement(prev => prev.filter((ele) => !selectedPair.includes(ele)))
                    setSecondColor({})
                },1000) 
                setSelectedPair([])
            }else{
                setSecondColor({
                    [first] : "bg-red-300",
                    [second] : "bg-red-300"
                })
                setTimeout(() => {
                    setSelectedPair([])
                    setSecondColor({})
                }, [1000])              
                
            }

            const newAttempts = atempt + 1
            setAttempt(newAttempts)

            handleAttempt(newAttempts)
             
        }
    }, [selectedPair])

    const renderElement = () => {
        return element.map(item => 
            <div onClick={() => {getElement(item)}} key={item} className={`border border-black cursor-pointer flex align-middle items-center justify-center ${secondColor[item] || ''} ${selectedPair[0] === item ? "bg-green-300" : ""}`}>{item}</div> 
        )
    }    

  return (
    <div className="grid grid-cols-4 gap-4" style={gridStyle}>{renderElement()}</div>
  )
}

export default RenderMatching
