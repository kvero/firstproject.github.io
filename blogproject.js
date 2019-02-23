

$('.button').on('click', (event) => {
    event.preventDefault();
    let blogpost = $('.textarea').val();
    $('.div2').append(`<li>${blogpost}</li>`);
  });
  
  $('background-image').on('click', (event) => {
    $('background-image').css();
    $('duck.png').fadeOut(1000);
  });

  $('#kacsa').slideDown("slow");

  $('.catchit').on('mouseover', (event) => {
    $('.quack').append(`<div>QUACK QUACK</div>`);
    setTimeout(() => {
        $('.quack div').fadeOut();
    }, 200);
  });

