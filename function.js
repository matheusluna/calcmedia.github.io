function ultimaChance(media){
	var notaFinal = (50-6*media)/4;
	return (notaFinal);
}

function calculaMedia(av1, av2, av3){
	var media = (av1 + av2 + av3)/3;
	alert("Sua média foi: "+media);
	if (media < 4){
		alert("Você está reprovado por média.");
	}
	else if (media >= 7){
		alert("Você está aprovado por média.");
	}
	else{
		 var notaFinal = ultimaChance(media);
		 alert("Na final você irá precisar tirar no mínimo "+notaFinal+" para ser aprovado.");
	}
}		

buttonMedia.onclick = function(){
	var av1 = Number(nota1.value);
	var av2 = Number(nota2.value);
	var av3 = Number(nota3.value);
	calculaMedia(av1, av2, av3);
}
