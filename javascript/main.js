let songs = document.querySelectorAll('.soundtrack');
let covers = document.querySelectorAll('.covers');


// function to hide all divs
function hideAll() {
  songs.forEach(function(el) {
    el.style.display = 'none';
  });
}

// run that function right away
hideAll();

// when any animal is clicked, make the suitable div appear
covers.forEach(function(el) {
  el.onclick = (e) => {

    // hide all the divs to ensure that only one will be open
    hideAll();

    // here is a switch statement to handle opening the right div

    switch (e.target.getAttribute('id')) {
      case 'cover1':
        document.querySelector('#heatwaves')
        	.style.display = 'block';
        break;
      case 'cover2':
        document.querySelector('#porksoda')
        	.style.display = 'block';
        break;
      case 'cover3':
        document.querySelector('#yourlove')
        .style.display = 'block';
        break;
      case 'cover4':
        document.querySelector('#gooey')
        .style.display = 'block';
        break;
    }
  }
  });
