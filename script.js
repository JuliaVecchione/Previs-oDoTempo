const key = "f128706179651fdbaf3d4fd5a248004d"

function DadosScreen(dados) {
  console.log(dados)
  document.querySelector(".city").innerHTML = "Tempo em " + dados.name
  document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
  document.querySelector(".text-prev").innerHTML = dados.weather[0].description
  document.querySelector(".umi").innerHTML = "Umidade: " + dados.main.humidity + "%"
  document.querySelector(".img-prev").src =
    "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}


async function buscarcity(city) {
  const dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    city + 
    "&appid=" + 
    key + 
    "&lang=pt_br" +
    "&units=metric"
    ).then((response) => response.json())

  DadosScreen(dados)
}

function clickBnt() {
  const city = document.querySelector(".input-city").value
  buscarcity(city)
}

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    var btn = document.querySelector(".bnt-search")

    btn.click()
  }
})




