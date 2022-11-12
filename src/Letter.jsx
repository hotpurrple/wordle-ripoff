import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'


export default function Letter({ index, word, hasPassed }) {
    const [color, setColor] = useState("")
    const targetWord = useSelector(state => state.targetWord.word)

    useEffect(() => {
        if (hasPassed) {

                setTimeout(() => {
                    if (targetWord[index] === word[index]) {
                        setColor("correct render")
                    } else if (targetWord.includes(word[index])) {
                        setColor("close render")
                    } else {
                        setColor("wrong render")
                    }
                }, index*500)
        }
    }, [hasPassed])

    return (
        <>
            <div className={`letter ${hasPassed && color}`}>
                {word && word[index]}
            </div>
        </>
    )
}
