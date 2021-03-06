# JavaScript Chess

Пошаговая визуализация шахматной партии по загруженной из файла нотации.
Программа принимает на вход текстовый документ с простой нотацией шахматной партии (построчная запись ходов в формате "начало хода - конец хода", например "e2-e4") и последовательно отображает ходы фигур при нажатии на кнопку "Вперёд".

Скрипт <i>build.js</i> запускается при открытии проекта в браузере, предназначен для сборки шахматной доски из клеток-блоков, каждая из которых имеет собственный id, и первоначального расставления фигур на доске. 

Скрипт <i>act.js</i> отвечает за загрузку и обработку файла нотации, а также за выполнение очередного хода. Для этого при каждом нажатии кнопки "Вперёд" определяется id двух задействованных в ходе полей, после чего в конечное поле переносится изображение передвигаемой фигуры, а изображение в начальном поле удаляется.

<img src="https://github.com/denis-bush/JS-chess/blob/main/1.jpg" height="650"/> 
