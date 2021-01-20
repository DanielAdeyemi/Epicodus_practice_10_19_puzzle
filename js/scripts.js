function puzzle(user) {
  let sub = [];
  for (let i = 0; i < user.length; i++) {
    if (user[i].toLowerCase() === 'o' || user[i].toLowerCase() === 'e' || user[i].toLowerCase() === 'u' || user[i].toLowerCase() === 'i' || user[i].toLowerCase() === 'a') {
      sub.push('-')
    } else {
      sub.push(user[i]);
    }
  }
  return sub.join("");
}

$(document).ready(function() {
  $('form').submit(function() {
    event.preventDefault();
    let user = $('#input').val();
    let out = puzzle(user);
    $('.output').text(out);

  });
});