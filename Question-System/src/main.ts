import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id = "Sheet">
    <H1>Random Question </h1>
    <input type="text" placeholder="Answer"></input>
    <br>
    <button>Previous</button>
    <button>Check</button>
    <button>Next</button>
  </div>
`


