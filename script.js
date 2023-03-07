function validateForm() {
    const x = document.forms["input-email"]["email"].value;
    if (x == "" || x == null) {
      alert("The input field is empty");
      return false;
    }
  }