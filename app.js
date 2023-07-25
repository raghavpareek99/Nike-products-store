const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Max",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Force",
    price: 149,
    colors: [
      {
        code: "white",
        img: "./img/airforce.png",
      },
      {
        code: "blue",
        img: "./img/airforce2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Mercurial",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/mercurial.png",
      },
      {
        code: "green",
        img: "./img/mercurial2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Jordan",
    price: 129,
    colors: [
      {
        code: "darkred",
        img: "./img/jordan.png",
      },
      {
        code: "darkblue",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Pegasus",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/pegasus.png",
      },
      {
        code: "black",
        img: "./img/pegasus2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "red";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "red";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
