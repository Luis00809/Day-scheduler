// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// targets ids of text area of each box

let savedString = localStorage.getItem('savedString');
let saveBtns = $('.saveBtn');
let textarea = $('.description');




function Scheduler () {


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  

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
// how to save the userInput to the correct textarea section so when the page is refreshed 
// the value is still there
// uses the key to retrieve the value the userInputed
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
Scheduler();
