function consultaClima(){

    let ciudad = document.getElementById("ciudad").value;

    const options = {
        method: "GET"
    };
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=d6620cf294f05fd2feaf09d28f82553e`)
            .then(response => response.text())
            .then(data => {
                let infoClima = JSON.parse(data)
                document.getElementById("resultado").innerHTML = ((infoClima.main.temp)- 273.15).toFixed(1)+"°  celsius"
                document.getElementById("ambiente").innerHTML = (infoClima.weather[0].main)
                let icon = (infoClima.weather[0].icon)
                document.getElementById("icon").setAttribute("src",`http://openweathermap.org/img/wn/${icon}@2x.png`)
            }).catch((err) => {
                alert("Error de conexión, intentalo de nuevo por favor.", err)
            })
}
