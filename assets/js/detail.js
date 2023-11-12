let artir=document.getElementById("artir")
let azalt=document.getElementById("azalt")
let orta=document.getElementById("orta")
let gear=document.getElementById("gear")
let noneDiv = document.querySelector('.none__div');
let noneTwo = document.querySelector(".none__two");
let bracket = document.getElementById("bracket");
counter=0
artir.addEventListener("click", (e)=>{
    counter++
    orta.innerHTML=counter

}
)
azalt.addEventListener("click", (e)=>{
    if(counter<=1){
        Swal.fire({
            title: "Miqdarı bir və ya üzəri seçin",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          });
    }
    else{
        counter--
        orta.innerHTML=counter
    }

})
// gear.addEventListener('mouseenter', function() {
//     noneDiv.style.display = 'block';
// });

// gear.addEventListener('mouseleave', function() {
//     noneDiv.style.display = 'none';
// });



bracket.addEventListener('click', function () {
    isNoneTwoVisible = !isNoneTwoVisible;
    noneTwo.style.display = isNoneTwoVisible ? 'block' : 'none';
});

noneTwo.addEventListener('mouseleave', function () {
    isNoneTwoVisible = false;
    noneTwo.style.display = 'none';
});


let colorToggle = true;

let isBlack = true;

function changeColor() {
    const colorSquare = document.getElementById('colorSquare');

    if (isBlack) {
        colorSquare.style.backgroundColor = 'white';
        colorSquare.style.border = '1px solid #000';
    } else {
        colorSquare.style.backgroundColor = 'black';
        colorSquare.style.border = '1px solid #fff';
    }

    isBlack = !isBlack;
}
