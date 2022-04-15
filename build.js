'use strict';
//Создаём счётчик для полей доски (id поля)
var count = 1;

//Функция начального размещения фигур на доске, в зависимости от номера поля
function put_figure(count) {
    if ((count == 1) || (count == 8)) {
        document.getElementById(count).style.backgroundImage = 'url(img/rook_b.png)';
    }
    if ((count == 2) || (count == 7)) {
        document.getElementById(count).style.backgroundImage = 'url(img/knight_b.png)';
    }
    if ((count == 3) || (count == 6)) {
        document.getElementById(count).style.backgroundImage = 'url(img/bishop_b.png)';
    }
    if (count == 4) {
        document.getElementById(count).style.backgroundImage = 'url(img/queen_b.png)';
    }
    if (count == 5) {
        document.getElementById(count).style.backgroundImage = 'url(img/king_b.png)';
    }
    if ((count >= 9) && (count <= 16)) {
        document.getElementById(count).style.backgroundImage = 'url(img/pawn_b.png)';
    }
    if ((count == 57) || (count == 64)) {
        document.getElementById(count).style.backgroundImage = 'url(img/rook_w.png)';
    }
    if ((count == 58) || (count == 63)) {
        document.getElementById(count).style.backgroundImage = 'url(img/knight_w.png)';
    }
    if ((count == 59) || (count == 62)) {
        document.getElementById(count).style.backgroundImage = 'url(img/bishop_w.png)';
    }
    if (count == 60) {
        document.getElementById(count).style.backgroundImage = 'url(img/queen_w.png)';
    }
    if (count == 61) {
        document.getElementById(count).style.backgroundImage = 'url(img/king_w.png)';
    }
    if ((count >= 49) && (count <= 56)) {
        document.getElementById(count).style.backgroundImage = 'url(img/pawn_w.png)';
    }
    count += 1;
    return count;
}

//Создаём блок-контейнер для клеток
document.write('<div id="id_cells">');
document.getElementById("id_cells").className = "cells";
//Внешний цикл создаёт 4 пары строк 
for (var j = 1; j < 5; j++) {
//    Первый внутренний создаёт нечётные строки, начинающиеся со светлого поля и заканчивающиеся тёмным, по 4 пары
    for (var i = 1; i < 5; i++) {
        document.write('<div id="', count, '">');
        count = put_figure (count);
        document.write('</div>');
        document.getElementById(count - 1).className = "cell";
        
        document.write('<div id="', count, '">');
        count = put_figure (count);
        document.write('</div>');
        document.getElementById(count - 1).className = "cell dark";
    }
//    Второй создаёт чётные строки, начинающиеся с тёмного поля и заканчивающиеся светлым
    for (var i = 1; i < 5; i++) {
        document.write('<div id="', count, '">');
        count = put_figure (count);
        document.write('</div>');
        document.getElementById(count - 1).className = "cell dark";
        
        document.write('<div id="', count, '">');
        count = put_figure (count);
        document.write('</div>');
        document.getElementById(count - 1).className = "cell";
    }
}
document.write('</div>');

