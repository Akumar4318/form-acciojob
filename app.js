let emailerror = document.querySelector(".email-error");
let passworderror = document.querySelector(".Password-error");
let submiterror = document.querySelector(".submit-error");
let submitbutn = document.querySelector("button");

function emailcheck() {
  let email = document.querySelector("#email-input").value;
  if (email.length <= 3) {
    emailerror.innerHTML =
      "Make sure email is more than 3 characters and has @ and a";

    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,4}$/)) {
    emailerror.innerHTML =
      "Make sure email is more than 3 characters and has @ and a";

    return false;
  }
  emailerror.innerHTML = "";

  return true;
}

function PasswordCheck() {
  let Password = document.querySelector("#Password-input").value;

  if (Password.length < 8) {
    passworderror.innerHTML = "Make sure password is more than 8 characters";

    return false;
  }

  passworderror.innerHTML = "";

  return true;
}
function updateSubmitStatus() {
  const isEmailValid = emailcheck();
  const isPasswordValid = PasswordCheck();

  if (isEmailValid && isPasswordValid) {
    submiterror.innerHTML = "All good to go!";
    submiterror.style.color = "green";
  } else {
    submiterror.innerHTML = "";
  }
}
document
  .querySelector("#email-input")
  .addEventListener("input", updateSubmitStatus);
document
  .querySelector("#Password-input")
  .addEventListener("input", updateSubmitStatus);

submitbutn.addEventListener("click", () => {
  if (!emailcheck() || !PasswordCheck()) {
    alert("Fill the all details");
  } else {
    confirm("Do you want to submit this file ?");
  }
});
