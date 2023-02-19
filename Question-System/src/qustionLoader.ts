export interface AnswerSheetType{
    Question: string;
    Answer: string;
}[]
export function QuestionLoader(AnswerSheet: AnswerSheetType[],Index:number) {
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id = "Sheet">
    <H1>${AnswerSheet[Index].Question} </h1>
    <input type="text" placeholder="Answer"></input>
    <br>
    <button id = "previous">Previous</button>
    <button id = "check">Check</button>
    <button id = "next">Next</button>
  </div>
`
}
