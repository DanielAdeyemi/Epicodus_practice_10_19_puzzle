function puzzle(user) {
  for (let i = 0; i < user.length; i++) {
    if (user[i] === 'o' || user[i] === 'e' || user[i] === 'u' || user[i] === 'i' || user[i] === 'a') {
      user[i] = '-';
    } else {
      continue;
    }
    return user;
  }
}

$(document).ready(function() {
  $('form').submit(function() {
    event.preventDefault();
    let user = $('#input').val().toLowerCase();
    let out = puzzle(user);
    $('output').text(out);

  });
});