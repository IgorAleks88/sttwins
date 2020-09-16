function showHeroes(jsonObj, gameNumber) {
  var heroes = jsonObj["ЧАСТНЫЕ ЛИЦА"];

  for (var i = 0; i < heroes.length; i++) {
    let address = "";
    let newRow = document.createElement("tr");
    let newName = document.createElement("td");
    let newAddress = document.createElement("td");
    let newPhotoContainer = document.createElement("td");
    let newPhoto = document.createElement("img");
    newAddress.textContent = heroes[i].address;
    newName.textContent = heroes[i].title;
    address = heroes[i].address;
    address = address.replace("/", "-");
    newPhoto.src =
      "https://cdn.sttwins.com/crop?height=236&type=jpeg&quality=30&file=live/case" +
      gameNumber +
      "/" +
      address +
      ".png";
    newPhoto.alt = "Фото персонажа в этой игре отсутсвует";
    newPhoto.onload = function () {
      newPhotoContainer.appendChild(newPhoto);
      newRow.appendChild(newName);
      newRow.appendChild(newAddress);
      newRow.appendChild(newPhotoContainer);
      let newNeiborContainer = document.createElement("td");
      let newNeibor = document.createElement("img");
      newNeibor.src =
        "https://cdn.sttwins.com/crop?height=236&type=jpeg&quality=30&file=live/case" +
        gameNumber +
        "/" +
        address +
        "-соседи.png";
      newNeibor.alt = "Фото персонажа в этой игре отсутсвует";
      newNeibor.onload = function () {
        newNeiborContainer.appendChild(newNeibor);
        newRow.appendChild(newNeiborContainer);
      };
      document.querySelector("table").appendChild(newRow);
    };
    //  newPhotoContainer.appendChild(newPhoto);
    // newRow.appendChild(newName);
    // newRow.appendChild(newAddress);
    // newRow.appendChild(newPhotoContainer);
    // newRow.appendChild(newAddressContainer);
    // document.querySelector("table").appendChild(newRow);
  }
}
function persFind() {
  let gameNumber = document.querySelector("#game-number").value;
  let num = document.createElement("span");
  num.innerText = gameNumber;
  document.querySelector("header").appendChild(num);
  let requestURL = "https://sttwinscrack.netlify.app/data.json";
  let request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();
  request.onload = function () {
    let addressBook = request.response;

    showHeroes(addressBook, gameNumber);
  };
}
