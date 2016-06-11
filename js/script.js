var clockNode = document.querySelector('#clock')
var hexNode = document.querySelector('#hexColor')

var sendTime = function() {
	var d = new Date()
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();
	if(seconds<10){seconds = "0" + seconds}

  	var strTime = hours + ':' + minutes + ':' + seconds;
 
    clockNode.textContent = strTime.toString();
    

    var number1 = Math.floor(Math.random()* 255)
    var number2 = Math.floor(Math.random()* 255)
    var number3 = Math.floor(Math.random()* 255)
	var color1 = number1.toString(16)
	var color2 = number2.toString(16)
	var color3 = number3.toString(16)

	var strColor = color1 + ':' + color2 + ':' + color3;
	hexNode.textContent = strColor.toString().toUpperCase();

	var strBackground = "radial-gradient(at 50%,#" + color1.toString() + color2.toString() + color3.toString() + ',#' + color1.toString() + color2.toString() + color3.toString()+ ',#333333)'
	document.querySelector("body").style.background = strBackground.toString()
	document.querySelector("#bar").style.width = 6 * seconds + 'px'


}


sendTime()

setInterval(sendTime,1000)
