const section = document.querySelector('section');
const resultDiv = document.createElement('div');
const image = document.createElement('img');
const authorDiv = document.createElement('div');
const estimatedAge = 'https://api.agify.io/?name=';
const ageDiv = document.createElement('div');

const button = document.querySelector('button');
const body = document.body;
body.appendChild(resultDiv);

// Function to fetch quote, author, and photo URL
const fetchQuote = async () => {
  try {
    // Show the loader
    const loader = document.getElementById('loader');
    loader.classList.remove('hidden');

    // Fetch data author, quote, and photo
    const response = await fetch('https://thatsthespir.it/api');
    const data = await response.json();

    // Fetch age data
    const ageResponse = await fetch(`${estimatedAge}${data.author}`);
    const ageData = await ageResponse.json();

    // Clear the result div
    resultDiv.innerHTML = '';

    if (data.quote && data.photo && data.author && 'age' in ageData) {
      resultDiv.textContent = data.quote;
      resultDiv.classList.add('quote');

      image.src = data.photo;
      image.classList.add('photo');

      authorDiv.textContent = "- " + data.author;
      authorDiv.classList.add('author');

      ageDiv.classList.add('age');
      ageDiv.textContent = ageData.age ? `Age estimated: ${ageData.age}` : "Age couldn't be estimated.";

      section.appendChild(resultDiv);
      section.appendChild(image);
      section.appendChild(authorDiv);
      section.appendChild(ageDiv);
    } else {
      console.log('Invalid response format');
    }
  } catch (error) {
    console.log('There was an error!', error);
  } finally {
    // Hide the loader
    const loader = document.getElementById('loader');
    loader.classList.add('hidden');
  }
};

// Function to generate a new quote
const generateQuote = () => {
  fetchQuote();
};

// Add event to the button
button.addEventListener('click', generateQuote);

// Generate a quote when the page loads
window.addEventListener('load', generateQuote);
