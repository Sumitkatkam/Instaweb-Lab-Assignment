function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");

  let isValid = true;

  nameError.classList.add("hidden");
  emailError.classList.add("hidden");

  const nameRegex = /^[A-Za-z][A-Za-z0-9 ]*$/;

  if (!name) {
    nameError.textContent = "Name is required.";
    nameError.classList.remove("hidden");
    isValid = false;
  } else if (!nameRegex.test(name)) {
    nameError.textContent = "Name must start with a letter.";
    nameError.classList.remove("hidden");
    isValid = false;
  }

  if (!email || !email.includes("@")) {
    emailError.classList.remove("hidden");
    isValid = false;
  }

  if (isValid) {
    setTimeout(() => {
      document.getElementById("myForm").reset();
    }, 100);
  }

  return isValid;
}
