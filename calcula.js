function ControleDeSelecao () {

		var dropdown = document.getElementById ("operadores"). options [document.getElementById ("operadores"). selectedIndex] .value;					var placeText;

		var visibilidade;

		document.getElementById ("txtValor2"). style.visibility = visibilidade;

		document.getElementById ("txtValor1"). placeholder = placeText;

	}		

	função Limpar (id1, id2) {

		document.getElementById (id1) .value = "";

		document.getElementById (id2) .value = "";

	}	

	função Calcular (id1, id2) {

		var operador = document.getElementById ("operadores"). options [document.getElementById ("operadores"). selectedIndex] .value;

		

		var num1 = document.getElementById (id1) .value;

		var num2 = document.getElementById (id2) .value;

		var resultado = novo número ();

		switch (operador)

		{

			case "+":

			caso "-":

			  if (isNaN (num1 || num2) === falso) {

			    var StrExpressao = num1 + operador + num2;

			  	resultado = eval (StrExpressao); pausa;	

        }

        outro{

          alert ('Erro: HTTP 400 Bad Request');

        }

			predefinição:

				pausa;				

			

		}	

		

		document.getElementById ("saida"). innerHTML = "Resultado:" + resultado;

	}
