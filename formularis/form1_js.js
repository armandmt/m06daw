
var namePattern = "^[a-z A-Z]{4,30}$";
var emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$";

function checkInput(idInput, patt) {
	return patt.test(document.querySelector(idInput).value) ? true : false;
}
function checkTextarea(idText) {
	return document.querySelector(idText).value.length > 12 ? true : false;	
}
function checkRadioBox(nameRadioBox) {
  return document.querySelector(nameRadioBox).checked ? true : false;
}
function checkSelect(idSelect) {
	return document.querySelector(idSelect).value ? true : false;
}
function enableSubmit (idForm) {
	document.querySelector("button").removeAttribute("disabled");
}
function disableSubmit (idForm) {
	// idForm no cal....
	document.querySelector("button").setAttribute("disabled", "disabled");
}
function checkForm (idForm) {
	// idForm no cal....
	var pattName = new RegExp(namePattern);
	var pattEmail = new RegExp(emailPattern);
	
	disableSubmit("#contacte")
	document.querySelector(idForm).addEventListener("submit",(event) => {
		event.preventDefault();  // Evitar que el submit continui després d'aquesta funció
		console.log("He enviat el submit")
	});
	document.querySelector(idForm).addEventListener("change",(event) => {

		event.preventDefault();  // Evitar que el submit continui després d'aquesta funció
		console.log("He enviat el submit")
		// console.log(checkSelect("#edat"))
		// console.log(checkTextarea("#comentari"))
		// console.log(checkRadioBox("#legal"))
		if (checkInput("#nom", pattName) &&
		     checkInput("#cognoms", pattName)&&
		     checkInput("#email", pattEmail) &&
		 	 checkSelect("#edat") &&
		     checkTextarea("#comentari") &&
			 checkRadioBox("#legal") 	&&
			 checkRadioBox("[name=butlleti]")  )
			 {  // Comportament no desitjat
				enableSubmit("#contacte")
			 }		
			 else{
				 disableSubmit("#contacte")
			 }
	})

}

checkForm("#contacte")