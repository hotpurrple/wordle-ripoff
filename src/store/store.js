import { configureStore } from "@reduxjs/toolkit";
import targetWord from "./targetWord";
import userInput from "./userInput";
import fails from "./fails";
import wordToAnalyze from "./wordToAnalyze";

export const store = configureStore({
  reducer: {
    targetWord,
    userInput,
    fails,
    wordToAnalyze
  },
});
