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


  // generate an array of 3 random but unique numbers
  function lolaShuffle(arr){
    var idx, rand, tmp;
    // start at the end
    idx = arr.length - 1;
    while (idx) {
      //  Take one place after another reducing the number of places every time such that every place gets swapped at least once with a randomly chosen other place
      rand = Math.floor(Math.random() * idx--);
      // swap current place with random place
      temp = arr[idx];
      arr[idx] = arr[rand];
      arr[rand] = temp;
    }
    return arr;
  }
  
  // take the first three elements of the array
  var threeLolaTypes = lolaShuffle(lolaTypes).slice(0,3);
  console.log(threeLolaTypes);

  //  apply each number from array to .lola-head-selection
  function threeNewHeads() {
    $('.lola-head-selection').find('div.age').each(function(idx){
      $(this).removeClass(lolaTypes.join(' '))
      .addClass(threeLolaTypes[idx]);
      
      console.log(threeLolaTypes[idx] + "!!!");
   })

  }


  $swapHeadsButton.on('click', e => {
    // find div before and after
    let element = $(e.target);
    let leftElement = element.parents('div.swap').prev().children();
    let rightElement = element.parents('div.swap').next().children()

    // get classes and store in variables
    let left = leftElement.attr("class");
    let right = rightElement.attr("class");

    console.log(left, right);

    // add stored classes swapped around
    rightElement.addClass(left);
    leftElement.addClass(right);

    // remove existing class
    leftElement.removeClass(left).addClass(' age');
    rightElement.removeClass(right).addClass(' age');
  });


  threeNewHeads();

  
  });
  