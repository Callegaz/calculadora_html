
var memoria = 0;
var memoriacalc;
var c = false;
var flag = false;
var tela = function(p) {
	if(p == '.' && flag == true){
		return;
	}
	if(c == true){
		$('#tela').val('');
		c = false;
	}
	var r = $('#tela').val() + p;
	if(p == '.'){
		flag = true;
	} else {
		r = r * 1;
	}
	$('#tela').val(r);
}
var calculate = function(p) {
	if(memoria){
		result();	
	}
	flag = false;
	c = true; 
	memoria = $('#tela').val();
	memoriacalc = p;
}
$('#apagar').click(function (){
	memoria = 0;
	$('#tela').val("0");
});
var result = function(){
	if(memoria == 0)
	return;
	c = true;
	var r;
	switch(memoriacalc){
		case '+':
			r = memoria + $('#tela').val();
		break;
		case '-':
			r = memoria - $('#tela').val();
		break;
		case '*':
			r = memoria * $('#tela').val();
		break;
		case '/':
			r = memoria / $('#tela').val();
		break;
	}
	tela(r);
	c = true;
	flag = false;
	memoria = 0;
};
$('.digito').click(function(e) {
	tela(e.target.value);
});
$('#div, #multi, #menos, #soma').click(function(e) {
	calculate(e.target.value);
});
$('#igual').click(function() {
	result();
});