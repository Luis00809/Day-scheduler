$(document).ready(function() {

let savedString = localStorage.getItem('savedString');
let saveBtns = $('.saveBtn');
let textarea = $('.description');
let timeBlock = $('.time-block');

function Scheduler () {
  saveBtns.each(function () {
    $(this).on('click', function (event) {
      event.preventDefault();
      let button = event.target;
      let div = $(button).parent();
      let hour = div.attr('id');
      let textarea = div.find('textarea');
      let userInput = textarea.val();
      localStorage.setItem(hour, userInput);
      console.log(userInput);
      
    });
  });

  textarea.each(function() {
    let hour = $(this).closest('.time-block').attr('id');
    let savedInput = localStorage.getItem(hour);
    console.log(hour)

    if (savedInput) {
      $(this).val(savedInput);
    }
  })
};

let currentDate = dayjs().format('MMM D, YYYY');
$('#currentDay').text(currentDate);

let currentHour = dayjs().hour()

timeBlock.each(function(){
  let time = $(this).attr('id');
  let blockHour = parseInt(time.split('-')[1])

  if (blockHour < currentHour) {
    $(this).addClass('past');
  } else if (blockHour === currentHour) {
    $(this).addClass('present');
  } else {
    $(this).addClass('future');
  }

})

Scheduler();
});