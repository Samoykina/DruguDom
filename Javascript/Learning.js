"use strict"
let login = prompt ("Your position?", "");
let message = (login == "Сотрудник") ? "Hi" :
(login == "Директор") ? "Hello" :
(login == " ") ? message = "No login" : " ";
alert(message);
