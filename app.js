console.log("loaded");
let query = document.getElementById("search-input");
let searchBtn = document.getElementById("search-btn");
let outerdiv = document.createElement("div");
outerdiv.classList.add("outer-div");
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let queryVal = query.value;
  let api = `http://api.tvmaze.com/search/shows?q=${queryVal}`;
  outerdiv.innerHTML = "";
  async function getSeriesDetails() {
    let resp = await fetch(api);
    let tvDatas = await resp.json();
    tvDatas.forEach((data) => {
      console.log(data);
      let newdiv = document.createElement("div");
      newdiv.classList.add("new-div");
      let titleImg = document.createElement("img");
      titleImg.src = data.show.image.medium;
      let titleForSeries = document.createElement("h3");
      titleForSeries.innerText = data.show.name;
      titleForSeries.classList.add("series-title");
      let genre = document.createElement("p");
      genre.innerText = `Genre: ${data.show.genres[0]}`;
      let premieredData = document.createElement("p");
      premieredData.innerText = `Premeried on: ${data.show.premiered}`;
      let time = document.createElement("p");
      time.innerText = `Show time: ${data.show.schedule.time}`;
      let network = document.createElement("p");
      network.innerText = `See it on: ${data.show.network.name}`;
      newdiv.appendChild(titleImg);
      newdiv.appendChild(titleForSeries);
      newdiv.appendChild(genre);
      newdiv.appendChild(premieredData);
      newdiv.appendChild(time);
      newdiv.appendChild(network);
      outerdiv.appendChild(newdiv);
      document.body.appendChild(outerdiv);
    });
  }
  getSeriesDetails();
});
