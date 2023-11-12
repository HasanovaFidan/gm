let carousel = document.querySelector(".carousel");
let slides = document.querySelectorAll(".carousel-slide");
let gear = document.getElementById("gear");
let noneDiv = document.querySelector('.none__div');
let noneTwo = document.querySelector(".none__two");
let bracket = document.getElementById("bracket");
let alpay = document.getElementById("alpay");
let lale = document.getElementById("lale");
let fidan = document.getElementById("fidan");
let searchInput = document.getElementById("inputsearch");
let currentIndex = 0;

function showSlide(index) {
    const slideWidth = slides[0].offsetWidth;
    const offset = -index * slideWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function previousSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000);

showSlide(currentIndex);

carousel.addEventListener("click", nextSlide);

// gear.addEventListener('mouseenter', function () {
//     noneDiv.style.display = 'block';
// });

// gear.addEventListener('mouseleave', function () {
//     noneDiv.style.display = 'none';
// });

let isNoneTwoVisible = false;

bracket.addEventListener('click', function () {
    isNoneTwoVisible = !isNoneTwoVisible;
    noneTwo.style.display = isNoneTwoVisible ? 'block' : 'none';
});

noneTwo.addEventListener('mouseleave', function () {
    isNoneTwoVisible = false;
    noneTwo.style.display = 'none';
});





let gameArray=[{
    id:1,
    name:"ASUS ROG Strix G18 (RTX4050)",
    marka:"ASUS",
    price:3419,
  image:"https://gamenotebaku.az/cdn/storage/product_images/qKXTHatKKCJbSxrEH/fullHD/qKXTHatKKCJbSxrEH.png"
},
{
    id:2,
    name:"ASUS ROG G16",
    marka:"ASUS",
    price:3399,
  image:"https://gamenotebaku.az/cdn/storage/product_images/qKXTHatKKCJbSxrEH/fullHD/qKXTHatKKCJbSxrEH.png"
},
{
    id:3,
    name:"ASUS ROG Strix G16 (RTX4060)",
    marka:"ASUS",
    price:3399,
  image:"https://gamenotebaku.az/cdn/storage/product_images/qKXTHatKKCJbSxrEH/fullHD/qKXTHatKKCJbSxrEH.png"
},
{
    id:4,
    name:"ASUS ROG G16 (RTX4050)",
    marka:"ASUS",
    price:3799,
  image:"https://gamenotebaku.az/cdn/storage/product_images/qKXTHatKKCJbSxrEH/fullHD/qKXTHatKKCJbSxrEH.png"
},
{
    id:5,
    name:"ASUS TUF Gaming F15 (2023)",
    marka:"ASUS",
    price:2399,
  image:"https://gamenotebaku.az/cdn/storage/product_images/dindv2ubEvGZGrmFs/fullHD/dindv2ubEvGZGrmFs.png"
},
{
    id:6,
    name:"ASUS ROG Strix G17 (RTX4060)",
    marka:"ASUS",
    price:3899,
  image:"https://gamenotebaku.az/cdn/storage/product_images/tseDAiTNdQm4FmWmY/fullHD/tseDAiTNdQm4FmWmY.png"
},
{
    id:7,
    name:"ASUS ROG Zephyrus M16 (RTX3070Ti)",
    marka:"ASUS",
    price:3999,
  image:"https://gamenotebaku.az/cdn/storage/product_images/tggSkcsbMTuaWTY3g/fullHD/tggSkcsbMTuaWTY3g.png"
},
{
    id:8,
    name:"ASUS ROG Strix G18 (2023)",
    marka:"ASUS",
    price:4699,
  image:"https://gamenotebaku.az/cdn/storage/product_images/qKXTHatKKCJbSxrEH/fullHD/qKXTHatKKCJbSxrEH.png"
},
{
    id:9,
    name:"ASUS ROG Strix G16 (RTX4070)",
    marka:"ASUS",
    price:4499,
  image:"https://gamenotebaku.az/cdn/storage/product_images/YpvwkQptvmtLr3wLy/fullHD/YpvwkQptvmtLr3wLy.png"
},
{
    id:10,
    name:"ASUS ROG Strix G16 (2023)",
    marka:"ASUS",
    price:3399,
  image:"https://gamenotebaku.az/cdn/storage/product_images/tseDAiTNdQm4FmWmY/fullHD/tseDAiTNdQm4FmWmY.png"
},
{
    id:11,
    name:"ACER Nitro 5 (RTX3070)",
    marka:"ACER",
    price:3999,
  image:"https://gamenotebaku.az/cdn/storage/product_images/BNoJkf53gt8RCYjB5/fullHD/BNoJkf53gt8RCYjB5.png"
},
{
    id:12,
    name:" ASUS TUF DASH F15 2022 White Ed.",
    marka:"ASUS",
    price:2299,
  image:"https://gamenotebaku.az/cdn/storage/product_images/g3udQn3K6LNTMzd7n/fullHD/g3udQn3K6LNTMzd7n.png"
},
]
gameArray.forEach(element => {
    let gameCard = document.createElement("div");
    gameCard.classList.add("card"); 
  
    gameCard.innerHTML = `
      <img src="${element.image}" alt="">
      <div class="flex">
        <p>${element.name}</p> 
        <span>${element.price}₼</span>
      </div>
      <h4>${element.marka}<h4>
    `;
    gameCard.dataset.id = element.id; 
    alpay.appendChild(gameCard);
    console.log(element);
  });
  let gameLale=[{
    id:13,
    name:"Lenovo Legion Pro 5 (i9/RTX4070)",
    marka:"Lenovo",
    price:3999,
  image:"https://gamenotebaku.az/cdn/storage/product_images/R2BCKS94ma4PPAhes/fullHD/R2BCKS94ma4PPAhes.png"
},
{
    id:14,
    name:"Acer Nitro 16 (2023)",
    marka:"Acer",
    price:2499,
  image:"https://gamenotebaku.az/cdn/storage/product_images/A7L9XaYy2zP35jSnw/fullHD/A7L9XaYy2zP35jSnw.png"
},
{
    id:15,
    name:"MSI Cyborg 15 (RTX4050",
    marka:"MSI",
    price:2099,
  image:"https://gamenotebaku.az/cdn/storage/product_images/BQeQsaFQrHYBKTW2D/fullHD/BQeQsaFQrHYBKTW2D.png"
},
{
    id:16,
    name:"ASUS TUF Gaming A15 (RTX4060)",
    marka:"ASUS",
    price:2499,
  image:"https://gamenotebaku.az/cdn/storage/product_images/dXF9C5fSCTvBEWhLb/fullHD/dXF9C5fSCTvBEWhLb.png"
},
{
    id:17,
    name:"ASUS ROG Strix G18 (RTX4050)",
    marka:"ASUS",
    price:3419,
  image:"https://gamenotebaku.az/cdn/storage/product_images/qKXTHatKKCJbSxrEH/fullHD/qKXTHatKKCJbSxrEH.png"
},
{
    id:18,
    name:"ASUS TUF Gaming F15 (2023)",
    marka:"ASUS",
    price:2399,
  image:"https://gamenotebaku.az/cdn/storage/product_images/dindv2ubEvGZGrmFs/fullHD/dindv2ubEvGZGrmFs.png",
},
{
    id:19,
    name:"ASUS ROG Strix G17 (RTX4070)",
    marka:"ASUS",
    price:3999,
  image:"https://gamenotebaku.az/cdn/storage/product_images/5uDEFp5zxFtyLyer5/fullHD/5uDEFp5zxFtyLyer5.png"
},
{
    id:20,
    name:"ASUS ROG Strix G18 (RTX4080)",
    marka:"ASUS",
    price:5999,
  image:"https://gamenotebaku.az/cdn/storage/product_images/qKXTHatKKCJbSxrEH/fullHD/qKXTHatKKCJbSxrEH.png"
},
{
    id:21,
    name:"MSI Stealth 16 Studio (RTX4070)",
    marka:"MSI",
    price:4799,
  image:"https://gamenotebaku.az/cdn/storage/product_images/WAdrjTiGp4DucK7TH/fullHD/WAdrjTiGp4DucK7TH.png"
},
{
    id:22,
    name:"ASUS ROG Strix G18 (RTX4060)",
    marka:"ASUS",
    price:3599,
  image:"https://gamenotebaku.az/cdn/storage/product_images/WAdrjTiGp4DucK7TH/fullHD/WAdrjTiGp4DucK7TH.png"
},
{
    id:23,
    name:"Alienware m18 R1 (RTX4090)",
    marka:"Alienware",
    price:6499,
  image:"https://gamenotebaku.az/cdn/storage/product_images/DHrCojWRYq2oLKN3h/fullHD/DHrCojWRYq2oLKN3h.png"
},
{
    id:24,
    name:" ASUS ROG Zephyrus M16 (RTX3070Ti)",
    marka:"ASUS",
    price:3399,
  image:"https://gamenotebaku.az/cdn/storage/product_images/tggSkcsbMTuaWTY3g/fullHD/tggSkcsbMTuaWTY3g.png"
},
]
gameLale.forEach(element => {
    let gameCard = document.createElement("div");
    gameCard.classList.add("card"); 
  
    gameCard.innerHTML = `
      <img src="${element.image}" alt="">
      <div class="flex">
        <p>${element.name}</p> 
        <span>${element.price}₼</span>
      </div>
      <h4>${element.marka}<h4>
    `;
    gameCard.dataset.id = element.id; 
    lale.appendChild(gameCard);
    console.log(element);
  });

  
let gameFidan=[{
    id:25,
    name:"ROG Strix SCAR 18 (i9/RTX4090)",
    marka:"ASUS",
    price:8499,
  image:"https://gamenotebaku.az/cdn/storage/product_images/qKXTHatKKCJbSxrEH/fullHD/qKXTHatKKCJbSxrEH.png"
},
{
    id:26,
    name:"ASUS ROG Strix G18 (RTX4080",
    marka:"ASUS",
    price:5999,
  image:"https://gamenotebaku.az/cdn/storage/product_images/qKXTHatKKCJbSxrEH/fullHD/qKXTHatKKCJbSxrEH.png"
},
{
    id:27,
    name:"MSI Stealth 16 Studio (RTX4070)",
    marka:"MSI",
    price:3799,
  image:"https://gamenotebaku.az/cdn/storage/product_images/WAdrjTiGp4DucK7TH/fullHD/WAdrjTiGp4DucK7TH.png"
},
{
    id:28,
    name:"ASUS ROG Strix G18 (RTX4060)",
    marka:"ASUS",
    price:3599,
  image:"https://gamenotebaku.az/cdn/storage/product_images/qKXTHatKKCJbSxrEH/fullHD/qKXTHatKKCJbSxrEH.png"
},
{
    id:29,
    name:"Alienware m18 R1 (RTX4090)",
    marka:"Alienware",
    price:6499,
  image:"https://gamenotebaku.az/cdn/storage/product_images/DHrCojWRYq2oLKN3h/fullHD/DHrCojWRYq2oLKN3h.png"
},
{
    id:30,
    name:"ASUS ROG Zephyrus M16 (RTX3070Ti)",
    marka:"ASUS",
    price:3999,
  image:"https://gamenotebaku.az/cdn/storage/product_images/tggSkcsbMTuaWTY3g/fullHD/tggSkcsbMTuaWTY3g.png"
}
]
gameFidan.forEach(element => {
    let gameCard = document.createElement("div");
    gameCard.classList.add("card"); 
  
    gameCard.innerHTML = `
      <img src="${element.image}" alt="">
      <div class="flex">
        <p>${element.name}</p> 
        <span>${element.price}₼</span>
      </div>
      <h4>${element.marka}<h4>
    `;
    gameCard.dataset.id = element.id; 
    fidan.appendChild(gameCard);
    console.log(element);
  });
  searchInput.addEventListener('input', function () {
    let searchText = searchInput.value.toLowerCase();

    alpay.innerHTML = "";
    lale.innerHTML = "";
    fidan.innerHTML = "";

    let alpaySearch = gameArray.filter(element => element.name.toLowerCase().includes(searchText) || element.marka.toLowerCase().includes(searchText));
    let laleSearch = gameLale.filter(element => element.name.toLowerCase().includes(searchText) || element.marka.toLowerCase().includes(searchText));
    let fidanSearch = gameFidan.filter(element => element.name.toLowerCase().includes(searchText) || element.marka.toLowerCase().includes(searchText));

    alpaySearch.forEach(element => {
        displayGameCard(element, alpay);
    });

    laleSearch.forEach(element => {
        displayGameCard(element, lale);
    });

    fidanSearch.forEach(element => {
        displayGameCard(element, fidan);
    });
});




function displayGameCard(element, container) {
    let gameCard = document.createElement("div");
    gameCard.classList.add("card");

    gameCard.innerHTML = `
      <img src="${element.image}" alt="">
      <div class="flex">
        <p>${element.name}</p> 
        <span>${element.price}₼</span>
      </div>
      <h4>${element.marka}<h4>
    `;

    container.appendChild(gameCard);
}

let gameCards = document.querySelectorAll('.card');
gameCards.forEach(card => {
    card.addEventListener('click', function() {
        let cardId = this.getAttribute('data-id'); 
        let detailUrl = `detail.html?id=${cardId}`;
        window.location.href = detailUrl;
    })
});















