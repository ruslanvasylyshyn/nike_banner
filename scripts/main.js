"use strict";

const bannerBlock = document.querySelector(".banner__container");

async function loadBannersData(e) {
  bannerBlock.innerHTML = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;

  const url = "https://solovey.com.ua/test/data.json";
  const response = await fetch(url);
  const responseResult = await response.json();

  if (response.ok) {
    changeBannerData(responseResult);
  } else {
    console.log(responseResult.message);
  }
}

function changeBannerData(data) {
  let number = 0;

  let model = data.sneakers[0].model;
  let modelImg = data.sneakers[0].image_url;
  let price = data.sneakers[0].price;
  let href = data.sneakers[0].link;
  let currency = data.currency;

  let template = `<img
  src="./img/Vector.png"
  alt="Nike logo"
  class="banner__container-logo"
  />
  <h1 class="banner__container-model">${model}</h1>
  <img
    src="${modelImg}"
    alt="model image"
    class="banner__container-modelImg"
  />
  <div class="banner__container-currencyVsPrice">
    <span class="banner__container-currency">${currency}</span>
    <span class="banner__container-price">${price}</span>
  </div>

  <button class="banner__container-button">
  <a href="${href}" class="banner__container-href">order now!</a>
  </button>`;

  bannerBlock.innerHTML = template;

  setInterval(() => {
    if (number < data.sneakers.length - 1) {
      number++;
    } else {
      number = 0;
    }

    model = data.sneakers[number].model;
    modelImg = data.sneakers[number].image_url;
    price = data.sneakers[number].price;
    href = data.sneakers[number].link;
    currency = data.currency;

    let template = `<img
      src="./img/Vector.png"
      alt="Nike logo"
      class="banner__container-logo"
    />
    <h1 class="banner__container-model">${model}</h1>
    <img
      src="${modelImg}"
      alt="model image"
      class="banner__container-modelImg"
    />
    <div class="banner__container-currencyVsPrice">
      <span class="banner__container-currency">${currency}</span>
      <span class="banner__container-price">${price}</span>
    </div>
    
    <button class="banner__container-button">
    <a href="${href}" class="banner__container-href">order now!</a>
    </button>`;

    bannerBlock.innerHTML = template;
  }, 5000);
}

if (bannerBlock) {
  loadBannersData();
}
