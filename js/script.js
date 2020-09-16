function showHeroes(jsonObj) {
  var heroes = jsonObj["ЧАСТНЫЕ ЛИЦА"];

  for (var i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement("article");

    var myPara1 = document.createElement("p");
    var myPara2 = document.createElement("p");

    myPara1.textContent = "Name: " + heroes[i].title;
    myPara2.textContent = "Address: " + heroes[i].address;

    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);

    section.appendChild(myArticle);
  }
}
function persFind() {
  // let requestURL = "data.json";
  //let request = new XMLHttpRequest();
  // request.open("GET", requestURL);
  // request.responseType = "json";
  /// request.send();
  // request.onload = function () {
  // let addressBook = request.response;
  let addressBook = JSON.parse(data.json);
  showHeroes(addressBook);
}
