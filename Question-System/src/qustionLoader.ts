export interface AnswerSheetType{
    Question: string;
    Answer: string;
}[];


const buttonLoader = (pb: HTMLButtonElement, nb: HTMLButtonElement, cb: HTMLButtonElement, ans: HTMLTextAreaElement, index: number, answerSheet: AnswerSheetType[]) => {
  console.log(pb, nb);
  
  pb.addEventListener("click", () => {
    
    if (index > 0) {
      index--;
      QuestionLoader(answerSheet, index);
      console.log("Prevoius element called");
    } else { 
      console.log("out of bound");
    }
  });

  nb.addEventListener("click", () => {
    if (index < answerSheet.length - 1) {
      index++;
      QuestionLoader(answerSheet, index);
      console.log("Next element is called");
    } else {
      console.log("Out of bound");
      
    }
  });

  cb.addEventListener("click", () => {
    console.log("checked");
    
    if (answerSheet[index].Answer.toLowerCase() == ans.value.toLowerCase()) {
      alert("Right answer");
    } else {
      alert("Wrong Answer");
    }
  })

}

export function QuestionLoader(AnswerSheet: AnswerSheetType[],Index:number) {
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id = "Sheet">
    <H1>${AnswerSheet[Index].Question} </h1>
    <input type="text" id="answerBox" placeholder="Answer"></input>
    <br>
    <button type = "button" id = "previous">Previous</button>
    <button type = "button" id = "check">Check</button>
    <button type = "button" id = "next">Next</button>
  </div>
`
  const previousButton:HTMLButtonElement = document.querySelector("#previous")!;
  const nextButton:HTMLButtonElement = document.querySelector("#next")!;
  const checkButton: HTMLButtonElement = document.querySelector("#check")!;
  const answer: HTMLTextAreaElement = document.querySelector("#answerBox")!;
  
  buttonLoader(previousButton, nextButton, checkButton, answer, Index, AnswerSheet);
  
  console.log(Index);
}

