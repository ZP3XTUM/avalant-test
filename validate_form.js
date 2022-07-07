function validateForm() {
  let fname = document.forms.form.fname;
  let lname = document.forms.form.lname;
  let gender = document.forms.form.gender;
  let nationality = document.forms.form.nationality;
  let address = document.forms.form.address;
  let smallpox = document.forms.form.smallpox;
  let mumps = document.forms.form.mumps;
  let dizziness = document.forms.form.dizziness;
  let sneezing = document.forms.form.sneezing;
  let current_medication_ele = document.forms.form.current_medication;
  let current_medication =
    current_medication_ele.value === "true" ? true : false;
  let textarea_medical = document.forms.form.textarea_medical;

  if (fname.value === "") {
    window.alert("Please enter your first name.");
    fname.focus();
    return false;
  }
  if (fname.value.length > 50) {
    window.alert("Please enter first name no more than 50 characters.");
    fname.focus();
    return false;
  }

  if (lname.value === "") {
    window.alert("Please enter your last name.");
    lname.focus();
    return false;
  }
  if (lname.value.length > 50) {
    window.alert("Please enter last name no more than 50 characters.");
    lname.focus();
    return false;
  }

  if (gender.value === "") {
    window.alert("Please select your gender.");
    return false;
  }

  if (nationality.value === "") {
    window.alert("Please select your nationality.");
    nationality.focus();
    return false;
  }

  if (address.value === "") {
    window.alert("Please enter your address.");
    address.focus();
    return false;
  }
  if (address.value.length > 300) {
    window.alert("Please enter address no more than 300 characters.");
    address.focus();
    return false;
  }

  if (
    !(
      smallpox.checked ||
      mumps.checked ||
      dizziness.checked ||
      sneezing.checked
    )
  ) {
    window.alert("Please select medical history.");
    return false;
  }

  if (current_medication_ele.value === "") {
    window.alert("Please select current medication.");
    return false;
  } else {
    if (current_medication) {
      if (textarea_medical.value === "") {
        window.alert("Please enter text area for 'Current Medication'.");
        textarea_medical.focus();
        return false;
      }
    } else {
      if (textarea_medical.value !== "") {
        window.alert("Don't enter text area for 'Current Medication'.");
        textarea_medical.focus();
        return false;
      }
    }
  }

  window.alert("Success");
  return true;
}
