const validateRegisterForm = () => {
  let firstNameData = document.forms['registerForm']['firstname'].value;
  if (firstNameData == "") {
    alert('Please input a first name');
    return false;
  };
  let LastNameData = document.forms['registerForm']['lastname'].value;
  if (LastNameData == "") {
    alert('Please input a last name');
    return false;
  };

  let phoneNumberData = document.forms['registerForm']['phonenumber'].value;
  // Javascript reGex for Phone Number validation. 
  var regPhone = /^\d{10}$/;

  if (phoneNumberData == "" || !regPhone.test(phoneNumberData)) {
    alert('Please input a phone number that is 10 digits long');
    return false;
  };

  let emailData = document.forms["registerForm"]['emailID'].value;
  if (emailData == "") {
    alert('Please input an email')
    return false;
  };
  let passwordData = document.getElementById('passwordID').value;
  if (passwordData == "") {
    alert("Password field cannot be empty")
    return false;
  };
  let confirmPasswordData = document.getElementById('passwordConfirmID').value;
  if (confirmPasswordData == " " || confirmPasswordData !== passwordData) {
    alert("Password and Confirm Password must match")
    return false;
  };
};





