$(() => {
    console.log("jquery!");

    const lolaTypes = [
        'dec23rd2020',
        'dec26th2020',
        'jan9th2021',
        'feb27th2021',
        'april4th2021',
        'april11th2021',
        'may2nd2021',
        'june2nd2021',
        'july5th2021',
        'aug4th2021',
        'sept12th2021',
        'sept25th2021',
        'oct31st2021',
        'nov6th2021',
        'dec13th2021',
      ];


    //generates an array of LolaHeads at random
  function randomLolaGenerator(){
    const randomNumber = Math.floor(Math.random()* 15);
    return lolaTypes[randomNumber];
  }

  function newSelection() {
    $('.lola-head-selection')
      .find('div.age')
      .removeClass(lolaTypes.join(' '))
      .addClass(randomLolaGenerator);
  }

  newSelection();

  
  });
  