const cat = {
  JednorÄczne: 1,
  DwurÄczne: 2,
  PĂłĹtorarÄczne: 3,
  Dystansowe: 4,
  Pomocnicze: 5,
  RĂłĹźdĹźki: 6,
  Laski: 7,
  Zbroje: 8,
  HeĹmy: 9,
  Buty: 10,
  RÄkawice: 11,
  PierĹcienie: 12,
  Naszyjniki: 13,
  Tarcze: 14,
  Neutralne: 15,
  Konsumpcyjne: 16,
  StrzaĹy: 21,
  Talizmany: 22,
  KsiÄĹźki: 23
};

const addToFav = (id, name, type) => {
  const favData = JSON.parse(localStorage.getItem("favData")) || [];
  const newItem = {
    id: parseInt(id),
    name: name,
    type: type
  };
  favData.push(newItem);
  localStorage.setItem("favData", JSON.stringify(favData));
};

const delFromFav = id => {
  const favData = JSON.parse(localStorage.getItem("favData")) || [];
  favData.forEach(data => {
    if (parseInt(id) === data.id) {
      favData.splice(favData.indexOf(data), 1);
    }
    localStorage.setItem("favData", JSON.stringify(favData));
  });
};

const filterForFavItem = (id, name, type) => {
  _g(`ah&cat=${cat[type]}&page=1&filter=||*|0|||${name}`);
  setTimeout(() => {
    ahList = [...document.querySelectorAll("#ah_list tr")];
    ahList.shift();
    ahList.forEach(item => {
      const temp = item.childNodes[0].childNodes[0].childNodes[0];
      item.style.display = "none";
      if (temp.innerHTML.search(id) > -1) {
        item.style.display = "table-row";
      }
    });
  }, 400);
  setTimeout(returnItems, 500);
};

const favItemsButton = document.createElement("span");
const ahtitle = document.querySelector("#ahtitle");
favItemsButton.innerHTML =
  '<div onclick="showFavList()" style="position: absolute; left: 400px; top: 3px;" class="mButton"><div class="inner-part"></div><div class="left"></div><div class="right"></div><div class="content"><span class="gfont" name="Ulubione">Ulubione</span></div></div>';
ahtitle.appendChild(favItemsButton);
const favList = document.createElement("div");
const centerbox = document.querySelector("#centerbox");
favList.classList.add("favListHidden");
favList.id = "favList";
favList.style =
  "width: auto; height: auto; border: 1px solid gold; background: url(https://i.imgur.com/vfjXYBo.png); position: absolute; top: 30px; left: 370px; z-index: 351; display: none";
centerbox.appendChild(favList);
$("#favList").draggable();

const showFavList = () => {
  favList.innerHTML = "";
  if (favList.classList.contains("favListHidden")) {
    favList.classList.remove("favListHidden");
    favList.style.display = "block";
    if (
      localStorage.getItem("favData") === "[]" ||
      localStorage.getItem("favData") === null
    ) {
      favList.innerHTML =
        '<div style="padding: 2px; cursor: move">Brak ulubionych aukcji</div>';
    } else {
      fetchItems();
    }
  } else {
    favList.classList.add("favListHidden");
    favList.style.display = "none";
  }
};

const fetchItems = () => {
  const favItems = JSON.parse(localStorage.getItem("favData"));
  favItems.forEach(item => {
    const favItem = document.createElement("div");
    favItem.style = "padding: 2px; color: gold; cursor: move;";
    favItem.innerHTML =
      item.name +
      `<img tip='PrzejdĹş do aukcji' id='go${item.id}' src='https://i.imgur.com/TB9v3lX.png' style='margin-left: 2px; width: 15px; height: 15px; cursor: pointer'><img tip='UsuĹ z ulubionych' id='del${item.id}' style='margin-left: 2px; width: 15px; height: 15px; cursor: pointer' src='https://i.imgur.com/bbjbZMX.png'>`;
    favList.appendChild(favItem);
    const goToAuction = document.querySelector(`#go${item.id}`);
    goToAuction.addEventListener("click", () => {
      filterForFavItem(parseInt(item.id), item.name, item.type);
    });
    const delFavAuction = document.querySelector(`#del${item.id}`);
    delFavAuction.addEventListener("click", () => {
      delFromFav(parseInt(item.id));
      favList.classList.add("favListHidden");
      showFavList();
    });
  });
};

const returnItems = () => {
  ahList = [...document.querySelectorAll("#ah_list tr")];
  ahList.shift();
  ahList.forEach(item => {
    const itemsData = getItemsData(item);
    const image = document.createElement("img");
    image.id = `img${itemsData[0]}`;
    image.src = "https://i.imgur.com/uazhCyg.png";
    image.style = "width: 15px; height: 15px; cursor: pointer";
    image.tip = "Dodaj do ulubionych";
    image.addEventListener("click", () => {
      if (!image.classList.contains("favAuc")) {
        image.src = "https://i.imgur.com/bbjbZMX.png";
        image.tip = "UsuĹ z ulubionych";
        image.classList.add("favAuc");
        addToFav(itemsData[0], itemsData[1], itemsData[2]);
        refreshFavList();
      } else {
        image.src = "https://i.imgur.com/uazhCyg.png";
        image.tip = "Dodaj do ulubionych";
        image.classList.remove("favAuc");
        delFromFav(itemsData[0]);
        refreshFavList();
      }
    });
    item.childNodes[1].appendChild(image);
  });
  setTimeout(lookForFavItems, 200);
};

const lookForFavItems = () => {
  ahList = [...document.querySelectorAll("#ah_list tr")];
  ahList.shift();
  const favItems = JSON.parse(localStorage.getItem("favData"));
  ahList.forEach(item => {
    const itemsData = getItemsData(item);
    if (favItems !== null) {
      favItems.forEach(item2 => {
        if (item2.id === parseInt(itemsData[0])) {
          try {
            const oImage = document.querySelector(`#img${itemsData[0]}`);
            const nImage = oImage.cloneNode(true);
            oImage.parentNode.replaceChild(nImage, oImage);
            nImage.src = "https://i.imgur.com/bbjbZMX.png";
            nImage.tip = "UsuĹ z ulubionych";
            nImage.classList.add("favAuc");
            nImage.addEventListener("click", () => {
              if (!nImage.classList.contains("favAuc")) {
                nImage.src = "https://i.imgur.com/bbjbZMX.png";
                nImage.tip = "UsuĹ z ulubionych";
                nImage.classList.add("favAuc");
                addToFav(itemsData[0], itemsData[1], itemsData[2]);
                refreshFavList();
              } else {
                nImage.src = "https://i.imgur.com/uazhCyg.png";
                nImage.tip = "Dodaj do ulubionych";
                nImage.classList.remove("favAuc");
                delFromFav(itemsData[0]);
                refreshFavList();
              }
            });
            item.childNodes[1].appendChild(nImage);
          } catch (err) {
            message("Klikasz za szybko lub masz wolne połączenie internetowe!");
          }
        }
      });
    }
  });
};

const getItemsData = item => {
  let itemID = item.innerHTML.substring(74, item.innerHTML.length);
  itemID = itemID.substring(0, itemID.indexOf('"'));
  const temp = item.childNodes[1].innerHTML;
  let itemName =
    temp.indexOf("(") > -1 ? temp.substring(0, temp.indexOf("(") - 1) : temp;
  let itemType = ah_item(itemID);
  const index = itemType.search("Typ:");
  itemType = itemType.substring(index, itemType.length);
  itemType = itemType.substring(6, itemType.indexOf("<"));
  return [itemID, itemName, itemType];
}

const refreshFavList = () => {
  if (!favList.classList.contains("favListHidden")) {
    favList.classList.add("favListHidden");
    showFavList();
  }
};

const ah_page1 = ah_page;
const ah_select1 = ah_select;
const ah_apply1 = ah_apply;
const auctionsHide1 = auctionsHide;
ah_page = a => {
  ah_page1(a);
  setTimeout(returnItems, 500);
};
ah_select = (a, b) => {
  ah_select1(a, b);
  setTimeout(returnItems, 500);
};
ah_apply = () => {
  ah_apply1();
  setTimeout(returnItems, 500);
};
auctionsHide = () => {
  auctionsHide1();
  if (!favList.classList.contains("favListHidden")) {
    favList.classList.add("favListHidden");
    favList.style.display = "none";
  }
};
