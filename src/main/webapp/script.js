//this script is not working learn javascript then gennarte dynamic image based on hidden field value
 
	var weatherIcon = document.getElementById("weather-icon");
	
	var val = document.getElementById("wc").value;
	  switch (val) {
      case 'Clouds':
          weatherIcon.src = "images/cloudy-day.png";
          break;
      case 'Clear':
          weatherIcon.src = "images/sun.png";
          break;
      case 'Rain':
          weatherIcon.src = "images/cloudy.png";
      case 'Mist':
          weatherIcon.src = "images/fog.png";
          break;
      case 'Snow':
          weatherIcon.src = "images/snow.png";
          break;
      case 'Haze':
          weatherIcon.src = "images/haze.png";
           break;
  }
	  