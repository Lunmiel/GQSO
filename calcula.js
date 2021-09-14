function ControleDeSelecao(){
  var placeText;
  var visibilidade;
  document.getElementById("txtValor2").style.visibility = visibilidade;
  document.getElementById("txtValor1").placeholder = placeText;
}		
function Limpar(id1, id2){
  document.getElementById(id1).value="";
  document.getElementById(id2).value="";
}	
function Calcular(id1, id2){
  var operador = document.getElementById("operadores").options[document.getElementById("operadores").selectedIndex].value;
  var num1 = document.getElementById(id1).value;
  var num2 = document.getElementById(id2).value;
  var resultado = new Number();
  switch(operador){
    case "+":
    case "-":
      if (isNaN(num1 || num2) === false){
        var StrExpressao = num1+operador+num2;
        resultado = eval(StrExpressao);
        break;	
      }
      else{
        alert('Erro: HTTP 400 Bad Request');
      }
      default:
      break;				
  }	
  document.getElementById("saida").innerHTML ="Resultado:"+resultado;
}
