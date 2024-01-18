
var dayNumber = prompt("Введите порядковый номер дня недели (1 - понедельник, 2 - вторник и т.д.):");
dayNumber = parseInt(dayNumber);


switch(dayNumber) {
  case 1:
    console.log("Понедельник: День бездельник");
    break;
  case 2:
    console.log("Вторник: Повторник");
    break;
  case 3:
    console.log("Среда: Томада");
    break;
  case 4:
    console.log("Четверг: День заботы ответ");
    break;
  case 5:
    console.log("Пятница: Пьяница");
    break;
  case 6:
    console.log("Суббота: Просто отдых");
    break;
  case 7:
    console.log("Воскресенье: День бездельник");
    break;
  default:
    console.log("Ошибка: ты не знаешь сколько в неделе дней? Их 7!!");
}
