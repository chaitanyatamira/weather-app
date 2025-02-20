document.getElementById('weatherForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    const location = document.getElementById('locationInput').value;
    const apiKey = '5e8904d71406417eadb54337252002'; // Your API key
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const temperature = data.current.temp_c; // Temperature in Celsius
        const condition = data.current.condition.text; // Weather condition
  
        document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
        document.getElementById('condition').textContent = `Condition: ${condition}`;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('temperature').textContent = 'Failed to fetch weather data.';
        document.getElementById('condition').textContent = '';
      });
  });
