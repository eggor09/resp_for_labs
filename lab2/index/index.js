let menuUserCreate = document.querySelector(".regs");
let inputsOfMenu = menuUserCreate.querySelectorAll(".info");
let btnCreateUser = menuUserCreate.querySelector("button");
let container = document.querySelector(".users");
//let genders = document.querySelectorAll('input[name="gender"]');
//let type_accounts = document.querySelectorAll('input[name="type_account"]');
let usersArr = [];

btnCreateUser.addEventListener("click", () => {
  
  if (!inputsOfMenu[0].value) {
    alert('Enter the email please!');
  } else if (!inputsOfMenu[1].value) {
    alert('Enter the email confirm please!');
  } else if (!inputsOfMenu[2].value) {
    alert('Enter the password please!');
  } else if (!inputsOfMenu[3].value) {
    alert('Enter the zip please!');
  } else {
    let user = new User(
      inputsOfMenu[0].value,
      inputsOfMenu[1].value,
      inputsOfMenu[2].value,
      inputsOfMenu[3].value,
      deleteUser,
      container 
    );
    console.log(user)
    usersArr.push(user);
  }
});



function deleteUser(id) {
  for (let i = 0; i < usersArr.length; i++) {
    if (id === usersArr[i]?.id) {
      delete usersArr[i];
      return true;
    }
  }
}