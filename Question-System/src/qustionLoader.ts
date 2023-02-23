export interface AnswerSheetType{
    Question: string;
    Answer: string;
}[];


export const buttonLoader = (pb:HTMLButtonElement, nb:HTMLButtonElement,index: number, answerSheet:AnswerSheetType[] ) => {
  
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
  const pb:HTMLButtonElement = document.querySelector("#previous")!;
  const nb:HTMLButtonElement = document.querySelector("#next")!;
  
  buttonLoader(pb, nb, Index, AnswerSheet);
  
  console.log(Index);
}

