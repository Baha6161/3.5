
var dayNumber = prompt("Введите порядковый номер дня недели (1 - понедельник, 2 - вторник и т.д.):");
dayNumber = parseInt(dayNumber);


switch(dayNumber) {
  case 1:
    console.log("Понедельник: прийти на работу");
    break;
  case 2:
    console.log("Вторник: сесть за работу");
    break;
  case 3:
    console.log("Среда: начать работать");
    break;
  case 4:
    console.log("Четверг: закончить работать");
    break;
  case 5:
    console.log("Пятница: приехать домой");
    break;
  case 6:
    console.log("Суббота: отдых");
    break;
  case 7:
    console.log("Воскресенье: отдых с усталостью");
    break;
  default:
    console.log("Ошибка: Введите правильный порядковый номер дня недели (от 1 до 7)");
}