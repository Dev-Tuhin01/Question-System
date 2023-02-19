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
const numberOfQuestions: number = answerSheet.length;

console.log(numberOfQuestions);


QuestionLoader(answerSheet, index);


const previousButton: HTMLButtonElement = document.querySelector("#previous") as HTMLButtonElement;
const checkButton: HTMLButtonElement = document.querySelector("#check") as HTMLButtonElement;
const nextButton: HTMLButtonElement = document.querySelector("#next") as HTMLButtonElement;

console.log(previousButton);
console.log(checkButton);
console.log(nextButton);

answerSheet.forEach(async (ans:AnswerSheetType,index:number) => {
  console.log(index,ans);
  
})

previousButton.addEventListener("click", () => {
  if (index > -1) {
    index--;
    console.log("previous element");
    QuestionLoader(answerSheet, index);
    
  } else {
    console.error("Limit reached");
    
  }
});

nextButton.addEventListener("click", () => {
  if (index < numberOfQuestions) {
    index++;
    QuestionLoader(answerSheet, index);
    console.log("next element");
    
  } else {
    console.error("Limit reached");
    
  }
});
