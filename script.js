let calcValues = document.getElementById("calcInp");
let btn = document.querySelectorAll("button");
let showNum = "";

Array.from(btn).forEach((btnvl) => {
  btnvl.addEventListener("click", (e) => {
    let tVal = e.target.innerHTML;
    console.log(tVal);
    if (tVal == "C") {
      showNum += tVal;
      calcValues.value = showNum;
      showNum = "";
      calcValues.value = showNum;
    } else if (tVal == "=") {
      calcValues.value = eval(showNum);
    } else if (tVal == "Del") {
      showNum -= tVal;
      calcValues.value = showNum;
      showNum = "";
      calcValues.value = showNum;
    } else {
      showNum += tVal;
      calcValues.value = showNum;
    }
  });
});

// Array.from(btn).forEach((btns) => {
//     btns.addEventListener("click", (e) => {
//         let allButtons = e.target.innerHTML
//         console.log(allButtons);
//         if (allButtons == 'C') {
//             showItems += allButtons
//             values.value = showItems
//             showItems = ""
//             values.value = showItems;
//         } else if (allButtons == '=') {
//             values.value = eval(showItems)
//         } else {
//             showItems += allButtons
//             values.value = showItems
