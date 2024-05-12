window.onload = function() {
	document.getElementsByTagName("head")[0].innerHTML = '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"><title> Цветной японский кроссворд </title><link rel="stylesheet" href="../css/main.css" type="text/css"/><style>h5 { padding-left: 1vw; } table {border-collapse: collapse;}td {border-spacing: none;height: 25px;width: 21px;font-size: 16px;text-align: center;vertical-align: middle;}td.field, td.checked {border: 2px solid gray;background: white;}td.cross {background-image: url(../imgs/cross.png);background-size: contain;background-repeat-y: no-repeat;}.crsw-button {background: green;color: white;border: none;padding: 1.5vw;border-radius: 5px;outline: none;}.color-choice {border: 1px dashed gray;border-radius: 5px;float: left;height: 30px;width: 30px;margin: 2px 2px 0 2px;}#color-choice {margin-top: 5px;border-radius: 5px;border: none;outline: none;padding: 0.5vw;}#primary-color {box-shadow: 0 0 3px 2px cornflowerblue;}#alerts, #alerts-view {position: fixed;margin-left: auto;margin-right: auto;position: fixed;font-size: 17px;color: white;z-index: 3;text-align: center;width: 100%;transition: 0.5s;}#alerts {top: -20%; opacity: 0;}#alerts-view {top: 0; opacity: 1;}#alerts > p, #alerts-view > p {background: white;width: auto;display: inline-block;padding: 15px; color: black;font-size: 19px;margin-top: calc(35px + 3vw);border-radius: 35px;border: 1.5px dashed red;transition: 0.5s;}</style>';
	
	document.getElementsByTagName("body")[0].innerHTML = '<div id="left-panel" class="panel-vanished"><div id="logo">       </div><a href="../index.htm"> Главная </a><hr><a href="../create-crsw.htm"> Составить свой кроссворд </a></div><div id="container"><div id="pagename"> Японские кроссворды </div><center><div id="alerts"></div></center><button id="left-panel-button" class="panel-button-vanished"> ☰ </button><br><br><br><br><h1>Безымянный японский кроссворд</h1><h4> Анонимный автор </h4><h5 style="color: gray">Для правильной работы кроссворда Ваш экран должен находиться в <u>горизонтальном</u> положении.</h5><center><button id="check-crsw" class="crsw-button"> Проверить кроссворд </button> <button id="clear-field" class="crsw-button"> Очистить поле </button><br><button id="color-choice"> Выберите цвет: <br><div class="color-choice" id="primary-color" style="background: red;"> </div><div class="color-choice" style="background: orange;"> </div><div class="color-choice" style="background: yellow;"> </div><div class="color-choice" style="background: springgreen;"> </div><div class="color-choice" style="background: deepskyblue;"> </div><div class="color-choice" style="background: royalblue;"> </div><div class="color-choice" style="background: darkviolet;"> </div><div class="color-choice" style="background: black;"> </div></button><br><br>' + document.getElementsByTagName("body")[0].innerHTML;
	document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML + "<br>";	
document.getElementsByTagName("h1")[0].innerHTML = "Японский кроссворд " + document.getElementById("crossword-name").innerHTML + " | Размер: " + document.getElementById("crossword-size").innerHTML;

document.getElementsByTagName("h4")[0].innerHTML = "Автор - " + document.getElementById("crossword-author").innerHTML;

document.getElementById("crossword-name").style = "display: none;";
document.getElementById("crossword-size").style = "display: none;";
document.getElementById("crossword-author").style = "display: none;";

	document.getElementById("left-panel-button").onclick = function(){
	    document.getElementById("left-panel").classList.toggle("panel-vanished");
	    document.getElementById("left-panel-button").classList.toggle("panel-button-vanished");
	  }
	  
	  var cells = document.getElementsByClassName("field");
	  for(i = 0; i < cells.length; i++) {
	     cells[i].onclick = function() {
		  if(this.classList.contains("cross")) {
		    this.classList.toggle("cross");
		  } else if(this.classList.contains("filled")) {
		    this.style.backgroundColor = "";
		    this.classList.toggle("filled");
			this.classList.toggle("cross");
		  } else {
		    this.classList.toggle("filled");
			this.style.backgroundColor = document.getElementById("primary-color").style.backgroundColor;
		  }
		}
	  }
	  
	  var cells = document.getElementsByClassName("number");
	  for(i = 0; i < cells.length; i++) {
	     cells[i].onclick = function() {
		  this.classList.toggle("cross");
		}
	  }
	  
	  var cells = document.getElementsByClassName("checked");
	  for(i = 0; i < cells.length; i++) {
	     cells[i].onclick = function() {
		  if(this.classList.contains("cross")) {
		    this.classList.toggle("cross");
		  } else if(this.classList.contains("filled")) {
		    this.style.backgroundColor = "";
		    this.classList.toggle("filled");
			this.classList.toggle("cross");
		  } else {
		    this.classList.toggle("filled");
			this.style.backgroundColor = document.getElementById("primary-color").style.backgroundColor;
		  }
		}
	  }
	  
	  document.getElementById('check-crsw').onclick = function(){
	    var errs = 0;
	    for(i = 0; i < document.getElementsByClassName("checked").length; i++) {
		  if(!document.getElementsByClassName("checked")[i].classList.contains("filled")) {errs++;}
		} 
		for(i = 0; i < document.getElementsByClassName("field").length; i++) {
		  if(document.getElementsByClassName("field")[i].classList.contains("filled")) {errs++;};
		}
		try {
	  	  if(errs > 0) {
		    document.getElementById("alerts").innerHTML = "<p>Вы неверно решили кроссворд :(</p>";
			document.getElementById("alerts").id="alerts-view";
			setTimeout( function() {
			  document.getElementById("alerts-view").id = "alerts";
			}, 3000);
		  } else {
		    document.getElementById("alerts").innerHTML = "<p>Молодец! Кроссворд решён верно!</p>";
			document.getElementById("alerts").children[0].style.border = "1px dashed green";
			document.getElementById("alerts").id="alerts-view";
			setTimeout( function() {
			  document.getElementById("alerts-view").id = "alerts";
			}, 3000);
		  }
		} catch (e) {}
      }
	  
	  document.getElementById("clear-field").onclick = function() {
	    for(i = 0; i < document.getElementsByClassName("checked").length; i++) {
		  var el = document.getElementsByClassName("checked")[i];
		  el.style.backgroundColor = "";
		  el.classList.remove("filled");
		  el.classList.remove("cross");
		} 
		for(i = 0; i < document.getElementsByClassName("field").length; i++) {
		  var el = document.getElementsByClassName("field")[i];
		  el.style.backgroundColor = "";
		  el.classList.remove("filled");
		  el.classList.remove("cross");
		}
	  }
	  for(i = 0; i < document.getElementsByClassName("color-choice").length; i++) {
	    document.getElementsByClassName("color-choice")[i].onclick = function() {
		  document.getElementById("primary-color").id = "";
		  this.id = "primary-color";
		}
	  }
}