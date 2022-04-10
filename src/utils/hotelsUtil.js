export const convertDate = (date) => {
  let Data = new Date(date);
  let Year = Data.getFullYear();
  let Month = Data.getMonth();
  let Day = Data.getDate();
  let fMonth = '';
  switch (Month) {
    case 0:
      fMonth = 'января';
      break;
    case 1:
      fMonth = 'февраля';
      break;
    case 2:
      fMonth = 'марта';
      break;
    case 3:
      fMonth = 'апреля';
      break;
    case 4:
      fMonth = 'мае';
      break;
    case 5:
      fMonth = 'июня';
      break;
    case 6:
      fMonth = 'июля';
      break;
    case 7:
      fMonth = 'августа';
      break;
    case 8:
      fMonth = 'сентября';
      break;
    case 9:
      fMonth = 'октября';
      break;
    case 10:
      fMonth = 'ноября';
      break;
    case 11:
      fMonth = 'декабря';
      break;
    default:
      break;
  }
  return Day + ' ' + fMonth + ' ' + Year;
};

export const declensionHotel = (number) => {
  let str = number.toString();
  str = str.charAt(str.length - 1);
  if (str === '1' && !number.toString().endsWith('11')) return 'отель';
  else if (
    (str === '2' && !number.toString().endsWith('12')) ||
    (str === '3' && !number.toString().endsWith('13')) ||
    (str === '4' && !number.toString().endsWith('14'))
  )
    return 'отеля';
  else return 'отелей';
};

export const declensionDay = (number) => {
  let str = number.toString();
  str = str.charAt(str.length - 1);
  if (str === '1' && !number.toString().endsWith('11')) return 'день';
  else if (
    (str === '2' && !number.toString().endsWith('12')) ||
    (str === '3' && !number.toString().endsWith('13')) ||
    (str === '4' && !number.toString().endsWith('14'))
  )
    return 'дня';
  else return 'дней';
};
