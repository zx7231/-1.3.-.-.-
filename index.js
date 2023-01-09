
// first task

let product = 'Печенье «Юбилейное», 1 кг.';
let inBasket = true;
let quantity = 5;
if (product && inBasket == true) {
  console.log(quantity + ' x ' + product); 
}



// second task 

let username = 'vasya';
let accountStatus = 'vip';
let presentAccountStatus;
let cashbackPercentage;
switch (accountStatus) {
  case 'extended':
  cashbackPercentage = 15;
  presentAccountStatus = 'улучшенный';
    break;
  case 'premium':
    cashbackPercentage = 20;
    presentAccountStatus = 'премиум';
    break;
  case 'vip':
  cashbackPercentage = 30;
  presentAccountStatus = 'ВИП';
  break;

  default:
  cashbackPercentage = 10;
  presentAccountStatus = 'обычный'; 
}

console.log (username + ' у вас ' + presentAccountStatus + ' aккаунт ');
console.log ('Вы получаете ' + cashbackPercentage + '%' + ' на бонусный счет');

// third task

let user = 'killer2001';
if (user === 'admin') {
  console.log('Привет, админ!\nПроверь нет ли жалоб от пользователей!');
} else { 
  console.log('Здравствуйте ' + user + ' ! У нас новые поступления халвы!');
}

let newOrders = 6;
let errorOrders = 3;
if (newOrders > errorOrders) {
  console.log('In shop ' + newOrders + ' new orders with faults ' + errorOrders);
} else if (newOrders === errorOrders) {
  console.log ('Attention Something are going wrong! All new orders are finished with mistakes');
}