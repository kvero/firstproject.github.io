$('.Increase').on('click', (event) => {
    var currentValue = $('h2').text()
    console.log(currentValue)
    $('h2').html(parseInt(currentValue)+1)
    })

$('.Decrease').on('click', (event) => {
var dvalue = $('h2').text()
console.log(dvalue)
$('h2').html(parseInt(dvalue)-1)
})

$('input[type="submit"]').on('click', (event) => {
    event.preventDefault();
    let todoName = $('input[type="text"]').val();
    $('ul').append(`<li>${todoName}</li>`);
  });
  
  $('ul').on('click', (event) => {
    $(event.target).css('color', 'red');
  });