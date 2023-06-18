const statesElement = document.querySelector("#states");
const infoElement = document.querySelector("#information");
let selectedStateData = {};
let stateListData =[];

function setIndianStates(states) {
  states.forEach((state) => { 
    const optionElement = document.createElement("option");
    optionElement.setAttribute("value", state.Name);
    optionElement.textContent = state.Name;     
    statesElement.append(optionElement);
  });
}

async function getIndianStates() {
  const response = await fetch("/api/states");
  const states = await response.json();
  stateListData = states

  setIndianStates(states);
}

getIndianStates();

 
function onChangeState(e){
  // console.log(stateListData);
  let data = stateListData.filter((state)=> state.Name === e.target.value)
  selectedStateData = data[0];
  console.log(selectedStateData);
  infoElement.innerHTML = `<pre>${JSON.stringify(selectedStateData,null,2)}</pre>`
}

 