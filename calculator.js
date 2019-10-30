
document.getElementById("Calculator").addEventListener("change", function(){
    let num1Value = document.getElementById("Num1").value;
    let num2Value = document.getElementById("Num2").value;
	let operation_radio_pointers = document.getElementsByName("operation");
    let which_operation = null;
    for(var i=0; i<operation_radio_pointers.length; i++){
        if(operation_radio_pointers[i].checked){
            which_operation = operation_radio_pointers[i].value;
            break;            
        }    
    }
	if (which_operation==null){
		if (num1Value=="" && num2Value!=""){
			document.getElementById("result").textContent = num2Value;
		}
		else if (num1Value!="" && num2Value==""){
			document.getElementById("result").textContent = num1Value;
		}
		else{
			document.getElementById("result").textContent = "Not enough information provided.";
		}
	}
	else{
		if (num1Value=="" || num2Value==""){
			document.getElementById("result").textContent = "Not enough information provided.";
		}
		else{
			if (which_operation=="minus"){
				document.getElementById("result").textContent = Number(num1Value)-Number(num2Value);
			}
			if (which_operation=="plus"){
				document.getElementById("result").textContent = Number(num1Value)+Number(num2Value);
			}
			if (which_operation=="times"){
				document.getElementById("result").textContent = Number(num1Value)*Number(num2Value);
			}
			if (which_operation=="by"){
				if (num2Value=="0"){
					document.getElementById("result").textContent = "Cannot divide by 0";
				}
				else{
					document.getElementById("result").textContent = Number(num1Value)/Number(num2Value);
				}
			}
		}
	}
}, false);