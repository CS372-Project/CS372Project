const validateGuestForm = () => {
    let guestCode = document.forms["guestForm"]['guestID'].value;
    if (guestCode == "") {
      alert('Please input game quiz title.')
      return false;
    };
  };