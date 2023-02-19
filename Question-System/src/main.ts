import './style.css'
import { QuestionLoader } from "./qustionLoader";
import { AnswerSheetType } from "./qustionLoader";

let answerSheet: AnswerSheetType[] = [{
  Question : "Sample Question",
  Answer : "Hey"
}];

QuestionLoader(answerSheet,0);


