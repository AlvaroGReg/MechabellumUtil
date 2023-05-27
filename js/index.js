
function refValues(id, checkB){

	const checkValue = document.getElementById(checkB).checked

	minis[id-1].strong.forEach(element =>{

		let strongId 			= "strong" + element
		const outPutStrong 		= document.getElementById(strongId)
		let strongValue 		= parseInt(outPutStrong.innerHTML)
		outPutStrong.innerHTML  = checkValue ? strongValue + 1 : strongValue - 1
	})
	
	minis[id-1].weak.forEach(element =>{

		let weakId 			 = 'weak' + element
		const outPutWeak 	 = document.getElementById(weakId)
		let weakValue 		 = parseInt(outPutWeak.innerHTML)
		outPutWeak.innerHTML = checkValue ? weakValue + 1 : weakValue - 1
	})

	refVisible()
}

function reset(){

	minis.forEach(element => {

		const id = element.id
		document.getElementById("check" + id).checked = false
		document.getElementById("strong" + id).innerHTML = 0
		document.getElementById("weak" + id).innerHTML = 0
		document.getElementById("div" + id).classList.remove("divhidden")
	})
}

function refVisible(){


	minis.forEach(element => {

		let divID 		= 'div' + element.id
		let strongID 	= 'strong' + element.id
		let weakID 		= 'weak' + element.id
		let div 		= document.getElementById(divID)
		let strongNum 	= document.getElementById(strongID).innerHTML
		let weakNum 	= document.getElementById(weakID).innerHTML

		if (strongNum == 0 && weakNum == 0){
			div.classList.add("divhidden")
		} else{
			div.classList.remove("divhidden")
		}
	})
}