const getaymentTokenFromAPI = (success) => {
  if (success) {
    return new Promise((resolve) => {
        resolve({data: 'Successful response from the API' });
    })
  }
  return;
}

module.exports = getaymentTokenFromAPI;