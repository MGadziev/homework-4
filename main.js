(function() {
  // --------------------------ЗАДАНИЕ 1---------------------------------------

  // function recursion() {
  //   alert("LOOK IN CONSOLE");
  //   const child = document.querySelector(".deepChild");
  //   const parentClass = document.querySelector(".parent");
  //   let count = 0;
  //   const attempt = 1;
  //   let k = 1;
  //
  //
  //   function up(el) {
  //     console.log(k);
  //     const parent = el.parentNode;
  //     if (parent === parentClass) {
  //       console.log("endUp");
  //     } else {
  //       setTimeout(() => {
  //       parent.style.border = '2px solid green';
  //       k++;
  //       up(parent);}, 300);
  //     }
  //   }
  //   function down(el) {
  //     console.log(k);
  //     const childDown = el.firstElementChild;
  //     if (childDown === child) {
  //       console.log("endDown");
  //     } else {
  //       setTimeout(() => {
  //       childDown.style.border = '5px solid red';
  //       k = k - 1;
  //       down(childDown);}, 2000);
  //     }
  //   }
  //   up(child);
  //   down(parentClass);
  // }
  // recursion();

  //-------------------------------- ЗАДАНИЕ 2-------------------------------

  function recursion2() {
    let keyUp = 1;
    let keyDown = 1;
    let left;
    const deepChild = document.querySelector(".deepChild");
    const siblingFirst = document.querySelector(".sibling.first");


    function up(el) {
      el.style.border = '2px solid green';
      const parent = el.parentNode;
      if (parent === siblingFirst) {
        // начало внешнего if
        const parentSecond = parent.nextElementSibling;
        // начало функции спуска
        down(parentSecond);
        function down(elem) {
          elem.style.border = '5px solid black';
          const childDown = elem.nextElementChild;
          if (childDown === elem.lastElementChild) {
            console.log("end");
          } else {
            elem.style.border = '5px solid black';
            down(childDown);
          }
        }
        // конец функции спуска
        down(parentSecond);
        // конец внешнего if
      } else {
        setTimeout(() => {
          parent.style.border = '2px solid green';
          keyUp++;
          up(parent);
        }, 300);
      }
      return left;
    }
    up(deepChild);
  }
  recursion2();

})();
