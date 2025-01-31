// THIS IS THE WAY IT COMES FROM THE API PROVIDER
// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '0be88aa644mshdbca557037153bfp1c278ejsne051fecc9524',
// 		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
//utils just means utilities

//function used to make a request to the API
export async function fetchCars() {
  const headers = {
      'x-rapidapi-key': '0be88aa644mshdbca557037153bfp1c278ejsne051fecc9524',
      'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

//this block of code actually return every car present instead of the detailed template showing only toyotacorola
  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
  });

  const result = await response.json();
  return result;

}
