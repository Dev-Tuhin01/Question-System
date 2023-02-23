import './style.css'
import { QuestionLoader } from "./qustionLoader";
import { AnswerSheetType } from "./qustionLoader";

let answerSheet: AnswerSheetType[] = [{
  Question : "2+2",
  Answer : "4"
  },
{
    Question: "10-3",
    Answer:"7"
  },
{
    Question: "20 * 3",
    Answer:"60"
  }
];

let index: number = 0;

QuestionLoader(answerSheet, index);

