var xx=[]; //Строковый массив, сохраняет считываемые из файла ходы
var ident=0; //Счётчик ходов
var kmass=['s1','s2']; //Массив, хранящий ход в виде пары названий полей

//Подгрузка из файла, взята на просторах Интернета
window.onload = function() {
    var p=0;
		var fileInput = document.getElementById('fileInput');
		var fileDisplayArea = document.getElementById('fileDisplayArea');

		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var textType = /text.*/;
			if (file.type.match(textType)) {
				var reader = new FileReader();
                reader.readAsText(file);
				reader.onload = function(e) {
					xx=reader.result.split("\n") //Разбиение файла и занесение строк в массив xx
				}
			}
		});
}

//Функция выполнения хода: создаёт копии задействованных в ходе полей
//Для конечного устанавливается значение фона, соответствующее перемещаемой фигуре
//Значение фона начального поля устанавливается как пустое
//Поля замещаются их обновлёнными копиями, в результате визуально фигура перемещается на целевую клетку
function reset(s1,s2) {
    var divId1 = obrab_half_hod (s1);
    var divId2 = obrab_half_hod (s2);
    var divOld1 = document.getElementById(divId1);
    var divOld2 = document.getElementById(divId2);

    var divClone1 = divOld1.cloneNode(true);
    var divClone2 = divOld2.cloneNode(true);
    divClone1.style.backgroundImage = '';
    divClone2.style.backgroundImage = divOld1.style.backgroundImage;
    divOld1.replaceWith(divClone1);
    divOld2.replaceWith(divClone2);
}

//Разбиение считанного хода на подстроки из названий полей
function read_hod(s,kmass){
  kmass.s1='',kmass.s2='',kmass.s3='';
  var s4='';
  var k = 0;
    k = s.length;
    var i=0;
  for (i=1;((s[i-1]!=' ')&(k>i));i++){
    kmass.s1+=s[i-1];
  }
    for (i=i+1;((s[i-1]!=' ')&(k>i));i++){
    kmass.s2+=s[i-1];
  }
}

//Сопоставление названия поля с его id
function obrab_half_hod(s){
  var k=0,g=0;
  switch (s[0]){
    case 'a':
    k=1;
    break;
    case 'b':
    k=2;
    break;
    case 'c':
    k=3;
    break;
    case 'd':
    k=4;
    break;
    case 'e':
    k=5;
    break;
    case 'f':
    k=6;
    break;
    case 'g':
    k=7;
    break;
    case 'h':
    k=8;
    break;
  }
  g=parseInt(s[1], 10);
  k=k+g*8-8;
  return k; //Возвращает id
}

//Основная функция хода: считывает ход, обрабатывает его и выполняет
function forward() {
    var k; 
    var s; 
    k=xx.length;   
    s=xx[ident];
    if (s == '') { end() }
    console.log(xx[ident]);
            read_hod(s,kmass); 
            var k1=obrab_half_hod(kmass.s1); 
            var k2=obrab_half_hod(kmass.s2);
            reset(kmass.s1,kmass.s2);
            ident++;
}

//При достижении конца файла, заканчивает партию, отключая кнопку и выводя в неё уведомление о конце игры
function end() {
    document.getElementById("b2").removeEventListener("click", forward);
    document.getElementById("b2").textContent = "Конец игры";
}

document.getElementById("b2").addEventListener("click", forward);