// getElements
const submitButton = document.getElementById("submit-button");
const addPersonName = document.getElementById("add-person-name");
const removePersonName = document.getElementById("remove-person-name");
const result = document.getElementById("result");

//Szenen
const szene1Ppl = ["nora", "thomas"]
const szene2Ppl = ["nora", "thomas", "kiki", "maike"]
const szene3Ppl = ["nora", "thomas", "kiki", "maike", "clemens"]
const szene4Ppl = ["nora", "kiki"]
const szene5Ppl = ["nora", "jakob"]
const szene6Ppl = ["nora", "thomas", "kiki", "maike", "clemens"] 
const szene7Ppl = ["nora"]
const szene8Ppl = ["nora", "kiki", "clemens"]
const szene9Ppl = ["nora", "thomas", "kiki", "maike", "clemens"]
const szene10Ppl = ["nora", "thomas", "kiki", "maike", "clemens"]
const szene11Ppl = ["nora", "thomas"]
const szene12Ppl = ["nora", "kiki"]
const szene13Ppl = ["nora", "thomas", "kiki", "maike", "clemens", "jakob"]
const szene14Ppl = ["nora", "maike", "jakob"]
const szene15Ppl = ["nora", "thomas", "kiki", "maike", "clemens", "jakob"]
const szene16Ppl = ["nora", "thomas", "kiki", "maike", "clemens", "jakob"]
const szene17Ppl = ["nora", "thomas", "maike", "clemens"]

const alleSzenen = [szene1Ppl,
  szene2Ppl,szene3Ppl,szene4Ppl,szene5Ppl,
  szene6Ppl,szene7Ppl,szene8Ppl,szene9Ppl,
  szene10Ppl,szene11Ppl,szene12Ppl,szene13Ppl,
  szene14Ppl,szene15Ppl,szene16Ppl,szene17Ppl];
let szenenCheck = alleSzenen[0]

let anwesendeLeute = 1

//+ Button
function addAnotherPerson() {
  const nameInputs = document.getElementById("name-inputs");
  const personNumber = nameInputs.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `<input id="person-name" type="text" placeholder="Person ${personNumber}" required>`;
  nameInputs.insertAdjacentHTML('beforeend', HTMLString);
  anwesendeLeute += 1;
}

//- Button
function removeAnotherPerson() {
  const nameInputs = document.getElementById("name-inputs");
  nameInputs.removeChild(nameInputs.lastChild);
  anwesendeLeute -= 1;
}

//Welche Szenen?
function pushValuesIntoArray() {
  
  const personNames = document.querySelectorAll('input[type="text"]');
  const namenDerLeute = [];
  const moeglicheSzenen = [];
  
  personNames.forEach((input) => namenDerLeute.push(input.value.toLowerCase()));
  
  for (let i = 0; i < alleSzenen.length; i++) {
    let szenenCheck = alleSzenen[i];
    if (passtDieSzene(namenDerLeute, szenenCheck)) {
      moeglicheSzenen.push(` Szene ${i+1}`)
    }
  }
  result.innerHTML = moeglicheSzenen;
}

function passtDieSzene(arr1, arr2) {
  return arr2.every((el) => {
    return arr1.includes(el)
  })
}

//Button Clicks
submitButton.addEventListener("click", pushValuesIntoArray)
addPersonName.addEventListener("click", addAnotherPerson)
removePersonName.addEventListener("click", removeAnotherPerson)
