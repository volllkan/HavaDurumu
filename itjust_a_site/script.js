var apikey ="0c21d8a980a023c9f13a86b1ff146c61"


let weather = {
    apikey:"0c21d8a980a023c9f13a86b1ff146c61",
    fetchHavaDurumu: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&lang=tr&appid=" + this.apikey
        )
        .then((Response) => Response.json())
        .then((data) => this.datahavadurumu(data));
    },
    datahavadurumu: function(data){
      var {name} = data;
      var {description} = data.weather[0];
      var {temp,humidity} = data.main;
      var {speed} = data.wind;

      document.querySelector(".şehir").innerText = name + " Hava Durumu ";
      document.querySelector(".durum").innerText = description;
      document.querySelector(".derece").innerText = temp + "°C";
      document.querySelector("nem").innerText =  "Nem : "  + humidity + "%";        
      document.querySelector(".ruzgar").innerText = "Rüzgar Hızı" + speed +  "km/s";
    },

    arama: function(){
        this.fetchHavaDurumu(document.querySelector(".arama-motoru").value);
    },



  
}

    document.querySelector(".arama button").addEventListener("click", function(){
        weather.arama()
    })

document.querySelector(".arama-motoru").addEventListener("keyup",function(e){
    if(e.key == "Enter"){
        weather.arama();
    }
})

weather.fetchHavaDurumu("İstanbul");