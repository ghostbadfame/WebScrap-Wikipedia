const statesElement = document.querySelector("#states");
const infoElement = document.querySelector("#information");
// const buttonElement = document.querySelector("#mybutton");

function setIndianStates(states) {
//   console.log(states);
  states.forEach((state) => { 
    const optionElement = document.createElement("option");
    optionElement.setAttribute("value", state.Name);
    optionElement.textContent = state.Name;     
    statesElement.append(optionElement);
    // console.log(optionElement);
    // optionElement.addEventListener("click", () => {
    //     // Code to execute when the button is clicked
    //     console.log("Button clicked!");
    //     infoElement.innerHTML = `<pre>${JSON.stringify(state,null,2)}</pre>`;  
    //   });
    optionElement.addEventListener("click", () => {
      console.log("Button clicked!");
      // infoElement.innerHTML = `<pre>${JSON.stringify(state,null,2)}</pre>`;
    })
      
    // optionElement.addEventListener("click",()=>{
    //     console.log("hello");
    //     // infoElement.innerHTML = `<pre>$JSON.stringify(state,null,2)</pre>`;
    // })
  });
}

async function getIndianStates() {
  const response = await fetch("/api/states");
  const states = await response.json();
  setIndianStates(states);
}

getIndianStates();
