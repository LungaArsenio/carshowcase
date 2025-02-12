// THIS IS THE WAY IT COMES FROM THE API PROVIDER
// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '0be88aa644mshdbca557037153bfp1c278ejsne051fecc9524',
// 		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
// 	}
// };

import { carProps, FilterProps } from "@/types";

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
//utils just means utilities

//function used to make a request to the API
export async function fetchCars(filters: FilterProps) {
const { manufacturer, model, year, fuel } = filters;

  const headers = {
      'x-rapidapi-key': '0be88aa644mshdbca557037153bfp1c278ejsne051fecc9524',
      'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

//dynamically updating the url based on the filters
  const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}`, {
    headers: headers,
  });

  const result = await response.json();
  return result;

}
//END
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};


export const generateCarImageUrl = (car: carProps, angle?: string) => {
  //API Endpoint
  const url = new URL("https://cdn.imagin.studio/getImage");

  const { make, year, model } = car;

  url.searchParams.append('customer', 'img')
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', "fullscrean");
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;

}
