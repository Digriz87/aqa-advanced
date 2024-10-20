const {
  fetchDataWithError,
  fetchDataWithHeadersAndParams,
  makeApiCall,
} = require('./api');
const axios = require('axios');

// Мокаємо Axios
jest.mock('axios');

// Завдання 1: Тест для функції з помилкою
describe('fetchDataWithError', () => {
  it('should return an error message when request fails', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    await expect(fetchDataWithError()).rejects.toThrow('Failed to fetch data from the server.');
  });
});

// Завдання 2: Тест для функції з кастомними заголовками та параметрами
describe('fetchDataWithHeadersAndParams', () => {
  it('should include custom headers and params in the request', async () => {
    const mockParams = { id: 123 };
    const mockResponse = { data: 'mocked data' };

    axios.get.mockResolvedValue(mockResponse);

    const result = await fetchDataWithHeadersAndParams(mockParams);

    expect(axios.get).toHaveBeenCalledWith('https://api.example.com/data', {
      headers: { 'Custom-Header': 'HeaderValue' },
      params: mockParams,
    });

    expect(result).toBe(mockResponse.data);
  });
});

// Завдання 3: Тест для моканих запитів
describe('makeApiCall', () => {
  it('should return data when the API call is successful', async () => {
    const mockData = { data: 'successful response' };

    axios.get.mockResolvedValue(mockData);

    const result = await makeApiCall();
    
    expect(result).toBe(mockData.data);
  });

  it('should throw an error when the API call fails', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    await expect(makeApiCall()).rejects.toThrow('Failed to make API call');
  });
});
