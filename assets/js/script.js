const section = document.querySelector('section');
const resultDiv = document.createElement('div');
const body = document.body;
body.appendChild(resultDiv);

// Function to fetch name and handle response
const fetchName = async () => {
  try {
    const response = await fetch('https://thatsthespir.it/api');
    const data = await response.json();

    // Clear the result div
    resultDiv.innerHTML = '';

    if (data.quote) {
      // Create and append a div for the result
      let divResult = document.createElement('div');
      divResult.textContent = data.quote;
      divResult.classList.add('quote');
      section.appendChild(divResult);
    } else {
      console.log('Invalid response format');
    }
  } catch (error) {
    console.log('There was an error!', error);
  }
};

fetchName();
