$(() => {
    console.log("jquery!");

    const lolaTypes = [
        'dec-23-2020',
        'dec-26-2020',
        'jan-9-2021',
        'feb-27-2021',
        'apr-4-2021',
        'apr-11-2021',
        'may-2-2021',
        'jun-2-2021',
        'jul-5-2021',
        'aug-4-2021',
        'sept-12-2021',
        'sept-25-2021',
        'oct-31-2021',
        'nov-6-2021',
        'dec-13-2021',
      ];
      const $swapHeadsButton = $('.swap');


    //generates an array of LolaHeads at random
  function randomLolaGenerator(){
    const randomNumber = Math.floor(Math.random()* 15);
    return lolaTypes[randomNumber];
  }

// adds new array of LolaHeads to page
  function newSelection() {
    $('.lola-head-selection')
      .find('div.age')
      .removeClass(lolaTypes.join(' '))
      .addClass(randomLolaGenerator);
  }

//   $('.delete-file').on('click', e => {
//     let element = $(e.target);
//     console.log(element);
//   });


  $swapHeadsButton.on('click', e => {
    let element = $(e.target);
    let left = element.parents('div.swap').prev().children()
    let right = element.parents('div.swap').next().children()

    console.log(left, right);

    
    // console.log($(this).prev());
    
    // $(this).attr('class')
    // $(this).attr('class')
    // find class of div before and after
    // store in vars
    // remove existing class
    // add stored classes swapped around
  });



  newSelection();

  

  
  });
  