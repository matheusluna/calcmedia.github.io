function ultimaChance(media){
	var notaFinal = (50-6*media)/4;
	return (notaFinal);
}

function calculaMedia(nota1, nota2, nota3){
	var media = (nota1 + nota2 + nota3)/3;
	alert("Sua média foi: "+media);
	if (media < 4){
		alert("Você está reprovado por média.");
	}
	else if (media >= 7){
		alert("Você está aprovado por média.");
	}
	else{
		 var notaFinal = ultimaChance(media);
		 alert("Na final você irá precisar tirar no mínimo "+media+" para ser aprovado.");
	}
}		

var nota1 = nota1.value;
var nota2 = nota2.value;
var nota3 = nota3.value;

buttonMedia.onclick = calculaMedia(nota1, nota2, nota3);
