const setName = () => {
	let CC_NAME = document.querySelector('.location')
	if(CC_NAME == null) {
		return;
	}
	if(CC_NAME.innerHTML != "Carson City") {
		CC_NAME.innerHTML = "Carson City"
	}
	
}
setInterval(setName, 3000)
