let szamlalo = 0

$('.up').on('click', (event) =>  {
  szamlalo = szamlalo + 1
$('h2').html(szamlalo)
});


$('.down').on('click', (event) => {
  szamlalo = szamlalo - 1
  $('h2').html(szamlalo)
});


$('input[type="submit"]').on('click', (event) => {
  event.preventDefault();
  let listname = $('input[type="text"]').val();
  $('ul').append(`<li>${listname}</li>`);
});

