!function(d,s,id) {
	var js,fjs=d.getElementsByTagName(s)[0];
	if(!d.getElementById(id)) {
		js=d.createElement(s);

		////////////////////////////

		////////////////////////////

		js.id=id;
		js.src='https://weatherwidget.io/js/widget.min.js';
		fjs.parentNode.insertBefore(js,fjs);
	}
}(document,'script','weatherwidget-io-js');

const iframeStyling = () => {
	const cssLink = document.createElement("link")
	cssLink.href  = "style.css";  
	cssLink.rel   = "stylesheet";  
	cssLink.type  = "text/css";

	console.log(document.getElementById("weatherwidget-io-0"))
	frames["weatherwidget-io-0"].contentWindow.document.body.appendChild(cssLink)
}

setTimeout(iframeStyling, 5000);
