    window.onload = function(){
	  document.getElementById("left-panel-button").onclick = function(){
	    document.getElementById("left-panel").classList.toggle("panel-vanished");
	    document.getElementById("left-panel-button").classList.toggle("panel-button-vanished");
	  }
	  
	  var cells = document.getElementsByClassName("field");
	  for(i = 0; i < cells.length; i++) {
	     cells[i].onclick = function() {
		  if(this.classList.contains("filled")) {
		    this.style.backgroundColor = "";
		    this.classList.remove("filled");
		  } else {
		    this.classList.add("filled");
			this.style.backgroundColor = document.getElementById("primary-color").style.backgroundColor;
		  }
		}
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
	  document.getElementById("apply").onclick = function() {
		document.getElementById("result-box").innerHTML = "";
        table = document.getElementsByTagName("table")[0];
		table.innerHTML = "<tbody></tbody>";
		toinput = "";
        for(i1 = 0; i1 < document.getElementById("height").value; i1++) {
		  toinput = toinput + "<tr>";
		  for(i2 = 0; i2 < document.getElementById("width").value; i2++) {
			toinput = toinput + '<td class="field"></td>'
		  }
		  toinput = toinput + "</tr>";
	    }
		table.innerHTML = toinput;
		
		var cells = document.getElementsByClassName("field");
	    for(i = 0; i < cells.length; i++) {
	       cells[i].onclick = function() {
		    if(this.classList.contains("filled")) {
		      this.style.backgroundColor = "";
		      this.classList.remove("filled");
		    } else {
		      this.classList.add("filled");
			  this.style.backgroundColor = document.getElementById("primary-color").style.backgroundColor;
		    }
		  }
	    }
	  } 
	  
	  document.getElementById("create").onclick = function() {
		  
		document.getElementById("result-box").innerHTML = 'Вот так кроссворд будет выглядеть на сайте: <div id="result"></div><br>Код для вставки в файл crsw[номер].htm: <br><br><div id="result-code"></div><br>';
		
		if(document.getElementById("is-it-color").checked == false) {
		var array_strings = new Array();
		var array_columns = new Array();
		
		var numbersofstrings = new Array();
		for(i = 0; i < document.getElementsByTagName("tbody")[0].children.length; i++) {
	      numbersofstrings[i] = new Array();
		  for(i1 = 0; i1 < document.getElementsByTagName("tr")[i].children.length; i1++) {
			if(document.getElementsByTagName("tr")[i].children[i1].classList.contains("filled")) {
			  numbersofstrings[i][i1] = "1"; 
			} else {
			  numbersofstrings[i][i1] = "0";
			}
		  }
		  numbersofstrings[i][numbersofstrings[i].length] = "0";
		}
		
		//Кодом выше мы получаем все строки кроссорда, клетки которых зашифрованы в 1 и 0
		
	    for(i2 = 0; i2 < numbersofstrings.length; i2++) {
		  data = new Array();
		  temp = 0;
		  for(i1 = 0; i1 < numbersofstrings[i2].length; i1++) {
			if(numbersofstrings[i2][i1] == "1") {
			  temp++;
			} else if(numbersofstrings[i2][i1] == "0" && temp != 0) {
			  data.push(temp);
			  temp = 0;
			}
		  } 
          array_strings[i2] = data;
	    }
				
		//Кодом выше мы преобразовываем 1 и 0 в числа, стоящие слева кроссворда
		
		max = 0;
		for(i = 0; i < array_strings.length; i++) {
		  if(array_strings[i].length > max) {
			max = array_strings[i].length;
		  }
	    }
		
		//Узнаём количество чисел в самом большом ряду чисел.
		result = ''
		for(i = 0; i < document.getElementsByTagName("tbody")[0].children.length; i++) {
		  result = result + "<tr>";
		  err = 0;
		  for(i1 = 0; i1 < max; i1++) {
			if(max - i1 > array_strings[i].length) {
			  result = result + "<td></td>";
			  err++;
			} else {
			  result = result + '<td class="number">' + array_strings[i][i1 - err] + '</td>';
			}
		  }
		  for(i4 = 0; i4 < numbersofstrings[i].length - 1; i4++) {
			  if(numbersofstrings[i][i4] == 0) {
				  result =result + "<td class='field'></td>";
			  } else {
				  result = result + "<td class='checked'></td>";
			  }
		  }
		  result = result
		  for(i2 = 0; i2 < max; i2++) {
			  result = result + "<td></td>"
		  }
		  for(i3 = 0; i3 < document.getElementsByTagName("tbody")[0].children[0].children.length; i3++) {
		  result = result.replace("red", "none");
		  result = result.replace("orange", "none");
		  result = result.replace("yellow", "none");
		  result = result.replace("springgreen", "none");
		  result = result.replace("deepskyblue", "none");
		  result = result.replace("royalblue", "none");
		  result = result.replace("darkviolet", "none");
		  result = result.replace("black", "none");  
		  }
		  result = result + "</tr>";
		}
		result = result + "</table>";
		      
	    var numbersofcolumns = new Array();
		strings = document.getElementsByTagName("tbody")[0].children.length;
		for(i = document.getElementsByTagName("tr")[0].children.length - 1; i >= 0; i--) {
	      numbersofcolumns[i] = new Array();
		  for(i1 = 0; i1 < document.getElementsByTagName("tbody")[0].children.length; i1++) {
			if(document.getElementsByTagName("tr")[i1].children[i].classList.contains("filled")) {
			  numbersofcolumns[i][strings - i1] = "1"; 
			} else {
			  numbersofcolumns[i][strings - i1] = "0";
			}
		  }
		  numbersofcolumns[i][numbersofcolumns[i].length] = "0";
		}		
		
		
		//Кодом выше мы получаем все строки кроссорда, клетки которых зашифрованы в 1 и 0
		
	    for(i2 = 0; i2 < numbersofcolumns.length; i2++) {
		  data = new Array();
		  temp = 0;
		  for(i1 = 0; i1 < numbersofcolumns[i2].length; i1++) {
			if(numbersofcolumns[i2][i1] == "1") {
			  temp++;
			} else if(numbersofcolumns[i2][i1] == "0" && temp != 0) {
			  data.push(temp);
			  temp = 0;
			}
		  } 
          array_columns[i2] = data;
	    }
		//Кодом выше мы преобразовываем 1 и 0 в числа, стоящие сверху кроссворда
		
		max_col = 0;
		for(i = 0; i < array_columns.length; i++) {
			if(max_col < array_columns[i].length) {
				max_col = array_columns[i].length;
			}
		}
		for(i = 0; i < max_col; i++) {
		  result = "</tr>" + result;
		  for(i1 = document.getElementsByTagName("tbody")[0].children[0].children.length - 1; i1 >= 0; i1--) {
			  if(i < array_columns[i1].length) {
				result = '<td class="number">' + array_columns[i1][i] + '</td>' + result;
			  } else {
				result = "<td></td>" + result;
			}
		  }
		  for(i1 = 0; i1 < max; i1++) {
			  result = "<td></td>" + result;
		  }
		  result = "<tr>" + result;
	    }
		result = '<script src="../js/constructor-wb-crsw.js"></script><meta charset="utf-8"><table>' + result;
		document.getElementById("result").innerHTML = result;
		
		result_code = document.getElementById("result").innerHTML;
		result_code = '<div id="crossword-name">' + document.getElementById("crsw-name").value + '</div><div id="crossword-author">' + document.getElementById("crsw-author").value + '</div><div id="crossword-size">' + document.getElementsByTagName("tbody")[0].children[0].children.length + 'x' + document.getElementsByTagName("tbody")[0].children.length + '</div>' + result_code;
		for(i = 0; i < result_code.length; i++) {
			result_code = result_code.replace("<", "&#060;").replace(">", "&#062;");
		}
		document.getElementById("result-code").innerHTML = result_code;
		
		/////////////////////
		/////////////////////
		/////////////////////
		} else {
		/////////////////////
		/////////////////////
		/////////////////////
		var array_strings = new Array();
		var array_columns = new Array();
		var array_colors_strings = new Array();
		var array_colors_columns = new Array();
		
		var numbersofstrings = new Array();
		var numbersofcolorsstrings = new Array();
		for(i = 0; i < document.getElementsByTagName("tbody")[0].children.length; i++) {
	      numbersofstrings[i] = new Array();
		  numbersofcolorsstrings[i] = new Array();
		  for(i1 = 0; i1 < document.getElementsByTagName("tr")[i].children.length; i1++) {
			if(document.getElementsByTagName("tr")[i].children[i1].classList.contains("filled")) {  
			  numbersofcolorsstrings[i][i1] = document.getElementsByTagName("tr")[i].children[i1].style.backgroundColor;
			numbersofstrings[i][i1] = "1";
			} else {
			  numbersofstrings[i][i1] = "0";
			  numbersofcolorsstrings[i][i1] = "none";
			}
		  }
		  numbersofstrings[i][numbersofstrings[i].length] = "0";
		  numbersofcolorsstrings[i][numbersofcolorsstrings[i].length] = "none";
		}
		
		//Кодом выше мы получаем все строки кроссорда, клетки которых зашифрованы в 1 и 0
		
	    for(i2 = 0; i2 < numbersofstrings.length; i2++) {
		  data = new Array();
		  data_color = new Array();
		  temp = 0;
		  temp_color = '';
		  for(i1 = 0; i1 < numbersofstrings[i2].length; i1++) {
			if(numbersofstrings[i2][i1] == "1") {
			  if(temp_color == '' || temp_color == numbersofcolorsstrings[i2][i1]) {
				temp++;
				temp_color = numbersofcolorsstrings[i2][i1];
			  } else {
				data.push(temp);
				data_color.push(temp_color);
				temp = 0;
				temp++;
				temp_color = numbersofcolorsstrings[i2][i1];
			  }
			} else if(numbersofstrings[i2][i1] == "0" && temp != 0){
				data.push(temp);
				data_color.push(temp_color);
				temp = 0;
				temp_color = '';
			}
		  } 
          array_strings[i2] = data;
		  array_colors_strings[i2] = data_color;
	    }
				
		//Кодом выше мы преобразовываем 1 и 0 в числа, стоящие слева кроссворда
		
		max = 0;
		for(i = 0; i < array_strings.length; i++) {
		  if(array_strings[i].length > max) {
			max = array_strings[i].length;
		  }
	    }
		
		//Узнаём количество чисел в самом большом ряду чисел.
		result = ''
		for(i = 0; i < document.getElementsByTagName("tbody")[0].children.length; i++) {
		  result = result + "<tr>";
		  err = 0;
		  for(i1 = 0; i1 < max; i1++) {
			if(max - i1 > array_strings[i].length) {
			  result = result + "<td></td>";
			  err++;
			} else {
			  number_color = "black";
			  if(array_colors_strings[i][i1 - err] == "black" ||array_colors_strings[i][i1 - err] == "darkviolet" || array_colors_strings[i][i1 - err] == "royalblue") {
				  number_color = "white";
			  }
			  result = result + '<td class="number" style="background-color: ' +array_colors_strings[i][i1 - err] + '; color:' + number_color + ';">' + array_strings[i][i1 - err] + '</td>';
			}
		  }
		  for(i4 = 0; i4 < numbersofstrings[i].length - 1; i4++) {
			  if(numbersofstrings[i][i4] == 0) {
				  result =result + "<td class='field'></td>";
			  } else {
				  result = result + "<td class='checked check-" + numbersofcolorsstrings[i][i4] + "'></td>";
			  }
		  }
		  result = result
		  for(i2 = 0; i2 < max; i2++) {
			  result = result + "<td></td>"
		  }
		  /*for(i3 = 0; i3 < document.getElementsByTagName("tbody")[0].children[0].children.length; i3++) {
		  result = result.replace("red", "none");
		  result = result.replace("orange", "none");
		  result = result.replace("yellow", "none");
		  result = result.replace("springgreen", "none");
		  result = result.replace("deepskyblue", "none");
		  result = result.replace("royalblue", "none");
		  result = result.replace("darkviolet", "none");
		  result = result.replace("black", "none");  
		  }*/
		  result = result + "</tr>";
		} 
		result = result + "</table>";
		      
	    var numbersofcolumns = new Array();
	    var numbersofcolorscolumns = new Array();
		strings = document.getElementsByTagName("tbody")[0].children.length;
		for(i = document.getElementsByTagName("tr")[0].children.length - 1; i >= 0; i--) {
	      numbersofcolumns[i] = new Array();
	      numbersofcolorscolumns[i] = new Array();
		  for(i1 = 0; i1 < document.getElementsByTagName("tbody")[0].children.length; i1++) {
			if(document.getElementsByTagName("tr")[i1].children[i].classList.contains("filled")) {
			  numbersofcolumns[i][strings - i1] = "1";
			  numbersofcolorscolumns[i][strings - i1] = document.getElementsByTagName("tr")[i1].children[i].style.backgroundColor; 
			} else {
			  numbersofcolumns[i][strings - i1] = "0";
			  numbersofcolorscolumns[i][strings - i1] = "none"; 
			}
		  }
		  numbersofcolumns[i][numbersofcolumns[i].length] = "0";
		  numbersofcolorscolumns[i][numbersofcolorscolumns[i].length] = "none";
		}		
		
		//Кодом выше мы получаем все строки кроссорда, клетки которых зашифрованы в 1 и 0
		
	    for(i2 = 0; i2 < numbersofcolumns.length; i2++) {
		  data = new Array();
		  temp = 0;
		  data_color = new Array();
		  temp_color = '';
		  for(i1 = 0; i1 < numbersofcolumns[i2].length; i1++) {
			if(numbersofcolumns[i2][i1] == "1") {
			  if(temp_color == '' || temp_color == numbersofcolorscolumns[i2][i1]) {
				temp++;
				temp_color = numbersofcolorscolumns[i2][i1];
			  } else {
				data.push(temp);
				data_color.push(temp_color);
				temp = 0;
				temp++;
				temp_color = numbersofcolorscolumns[i2][i1];
			  }
			} else if(numbersofcolumns[i2][i1] == "0" && temp != 0){
				data.push(temp);
				data_color.push(temp_color);
				temp = 0;
				temp_color = '';
			}
		  } 
          array_columns[i2] = data;
		  array_colors_columns[i2] = data_color;
	    }
		//Кодом выше мы преобразовываем 1 и 0 в числа, стоящие сверху кроссворда
		
		max_col = 0;
		for(i = 0; i < array_columns.length; i++) {
			if(max_col < array_columns[i].length) {
				max_col = array_columns[i].length;
			}
		}
		for(i = 0; i < max_col; i++) {
		  result = "</tr>" + result;
		  for(i1 = document.getElementsByTagName("tbody")[0].children[0].children.length - 1; i1 >= 0; i1--) {
			  if(i < array_columns[i1].length) {
				number_color = "black";
				if(array_colors_columns[i1][i] == "black" || array_colors_columns[i1][i] == "darkviolet" ||array_colors_columns[i1][i] == "royalblue") {
					number_color = "white";
				}
				result = '<td class="number" style="background-color: ' + array_colors_columns[i1][i] + '; color: ' + number_color + '">' + array_columns[i1][i] + '</td>' + result;
			  } else {
				result = "<td></td>" + result;
			}
		  }
		  for(i1 = 0; i1 < max; i1++) {
			  result = "<td></td>" + result;
		  }
		  result = "<tr>" + result;
	    }
		
		result = '<script src="../js/constructor-color-crsw.js"></script><meta charset="utf-8"><table>' + result;
		document.getElementById("result").innerHTML = result;
		
		result_code = document.getElementById("result").innerHTML;
		result_code = '<div id="crossword-name">' + document.getElementById("crsw-name").value + '</div><div id="crossword-author">' + document.getElementById("crsw-author").value + '</div><div id="crossword-size">' + document.getElementsByTagName("tbody")[0].children[0].children.length + 'x' + document.getElementsByTagName("tbody")[0].children.length + '</div>' + result_code;
		for(i = 0; i < result_code.length; i++) {
			result_code = result_code.replace("<", "&#060;").replace(">", "&#062;");
		}
		document.getElementById("result-code").innerHTML = result_code;
			
		}
	  }
	  
    }