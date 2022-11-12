import React, { useRef, useState } from "react";
import Keyboard, { KeyboardReactInterface } from 'react-simple-keyboard'
import "react-simple-keyboard/build/css/index.css";
import "./app.css"
import Word from "./Word";
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentWord, setUserInput } from "./store/userInput";
import { increaseFails } from "./store/fails";
import { useEffect } from "react";

function App() {
    const [input, setInput] = useState("");
    const [layout, setLayout] = useState("default");
    const keyboard = useRef();
    const dispatch = useDispatch()
    const fails = useSelector(state => state.fails.fails)
    const userInputs = useSelector(state => state.userInput.userInputs)
    const targetWord = useSelector(state => state.targetWord.word)
    const currentWord = useSelector(state => state.userInput.currentWord)

    const onChange = input => {
        setInput(input);
        dispatch(setCurrentWord(input))
    };


    //keyboard component doesn't register backspace, dunno why
    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            switch (e.keyCode) {
                case 8:
                    keyboard.current?.setInput(keyboard.current.getInput().slice(0, -1))
                    setInput(keyboard.current?.getInput())
                    dispatch(setCurrentWord(keyboard.current?.getInput()))
                    return
                case 13 :
                    
            }

        })
    }, [])


    const onKeyPress = button => {
        if (button == "{enter}") {
            if (input.length === 5) {
                dispatch(increaseFails())
                dispatch(setUserInput(input))
                dispatch(setCurrentWord(""))
                keyboard.current?.clearInput();
            }
        }

    };

    return (

        <>
            <div className="wrapper" >
                <div className="message">
                    {userInputs.includes(targetWord) && <h1>Congratulations</h1>}
                    {fails === 5 && <h1>Word was: {targetWord}</h1>}
                </div>
                <div className="words">
                    {new Array(5).fill("").map((e, i) => {
                        const isActive = i === fails
                        return <Word index={i} isActive={isActive} key={i} />
                    })}
                </div>

                <div className="keyboard"   >
                    <Keyboard
                        maxLength={5}
                        theme={"hg-theme-default myTheme1"}
                        physicalKeyboardHighlight={true}
                        physicalKeyboardHighlightPress={true}
                        physicalKeyboardHighlightBgColor={"black"}
                        keyboardRef={r => (keyboard.current = r)}
                        layoutName={layout}
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                    />
                </div>
            </div>
        </>
    )
}

export default App;
