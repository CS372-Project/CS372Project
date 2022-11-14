const validateGuestForm = () => {
  let guestCode = document.forms["guestForm"]['guestID'].value;
  if (guestCode == "" || guestCode.length < 6) {
    alert('Please input quiz code (Code has to be 6 digits long)')
    return false;
  };
};

