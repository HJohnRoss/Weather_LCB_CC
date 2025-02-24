const setName = () => {
	let CC_NAME = document.querySelector('.location')
	if(CC_NAME && CC_NAME.innerHTML != "Carson City") {
		CC_NAME.innerHTML = "Carson City"
		console.log("updating")	
	}
	
}
setTimeout(setName, 1500)
