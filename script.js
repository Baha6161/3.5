
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
    console.log("Четверг: День заботов ответ");
    break;
  case 5:
    console.log("Пятница: Пьяница");
    break;
  case 6:
    console.log("Суббота: Не работа");
    break;
  case 7:
    console.log("Воскресенье: День веселья");
    break;
  default:
    console.log("Ошибка: Ты не знаешь сколько в неделе дней??? Их 7!");
}
