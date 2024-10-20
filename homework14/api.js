const axios = require('axios');

// Завдання 1: Функція з помилкою
async function fetchDataWithError() {
  try {
    const response = await axios.get('https://wrong-url.com/endpoint');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from the server.');
  }
}

// Завдання 2: Функція з кастомними заголовками та параметрами
async function fetchDataWithHeadersAndParams(params) {
  try {
    const response = await axios.get('https://api.example.com/data', {
      headers: { 'Custom-Header': 'HeaderValue' },
      params: params,
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data.');
  }
}

// Завдання 3: Функція для моканих запитів
async function makeApiCall() {
  try {
    const response = await axios.get('https://api.example.com/data');
    return response.data;
  } catch (error) {
    throw new Error('Failed to make API call');
  }
}

module.exports = {
  fetchDataWithError,
  fetchDataWithHeadersAndParams,
  makeApiCall,
};
