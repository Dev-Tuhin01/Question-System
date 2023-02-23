import './style.css'
import { QuestionLoader } from "./qustionLoader";
import { AnswerSheetType } from "./qustionLoader";

let answerSheet: AnswerSheetType[] = [{
  Question : "Sample Question",
  Answer : "Hey"
  },
{
    Question: "Sample Question 2",
    Answer:"Bye"
  },
{
    Question: "Sample Question 3",
    Answer:"Tata"
  }
];

let index: number = 1;

QuestionLoader(answerSheet, index);

