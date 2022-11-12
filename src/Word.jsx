import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Letter from './Letter'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export default function Word({isActive, index}) {
    const letters = Array(5).fill("")
    const currentWord = useSelector(state => state.userInput.currentWord)
    const userInputs = useSelector(state => state.userInput.userInputs)

    const [hasPassed, setHasPassed] = useState(false)
    useEffect(() => {
        index < userInputs.length && setHasPassed(true)
    }, [userInputs])
    
  return (
    <>
        <div className='word'>

        {letters.map((e,i) => {
            return <Letter hasPassed={hasPassed} 
            word={isActive ? currentWord : userInputs[index]} index={i} key={i}/>
        })}
        </div>
    </>
  )
}
