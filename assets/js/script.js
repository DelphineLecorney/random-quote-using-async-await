const section = document.querySelector('section');
const resultDiv = document.createElement('div');
const authorDiv = document.createElement('div');

const button = document.querySelector('button');
const body = document.body;
body.appendChild(resultDiv);

// Function to fetch name and handle response
const fetchQuote = async () => {
  try {
    const response = await fetch('https://thatsthespir.it/api');
    const data = await response.json();

    // Clear the result div
    resultDiv.innerHTML = '';

    if (data.quote && data.author) {
      resultDiv.textContent = data.quote;
      resultDiv.classList.add('quote');

      authorDiv.textContent = "- " + data.author;
      authorDiv.classList.add('author');

      section.appendChild(resultDiv);
      section.appendChild(authorDiv);
    } else {
      console.log('Invalid response format');
    }
  } catch (error) {
    console.log('There was an error!', error);
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
