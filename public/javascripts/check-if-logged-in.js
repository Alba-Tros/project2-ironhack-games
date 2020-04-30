axios.get('/get-user').then(response => {
  if(response.data.loggedInUser) {
    document.getElementById('logout').style.display = 'block';
    document.getElementById('my-account').style.display = 'block';
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'none';
  }
});

