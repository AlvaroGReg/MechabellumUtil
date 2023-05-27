
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
}

function reset(){

	minis.forEach(element => {

		const id = element.id
		document.getElementById("check" + id).checked = false
		document.getElementById("strong" + id).innerHTML = 0
		document.getElementById("weak" + id).innerHTML = 0
	})
}