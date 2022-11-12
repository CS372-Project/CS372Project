const validateLoginForm = () => {
  let emailData = document.forms["LoginForm"]['emailID'].value;
  if (emailData == "") {
    alert('Please input an email')
    return false;
  };
  let passwordData = document.getElementById('passwordID').value;
  if (passwordData == "") {
    alert("Password field cannot be empty")
    return false;
  };
};





