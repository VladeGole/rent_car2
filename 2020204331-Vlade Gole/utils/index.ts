import { CarProp, FilterProps } from "@/type";

export async function fetchCars(filters:FilterProps){

    const{manufacturer,model}=filters;

    const headers={
        'x-rapidapi-key': 'cb9566c8eamsh839a0a7ef132e2bp1910a5jsn55b28959eb46',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
     }
 
     const response=await fetch( `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}`,{headers:headers,});
 
     const result= await response.json();
     console.log('API response:', result);
     return result;
 }

 
    export const generateCarImageUrl = (car: CarProp, angle?: string) => {
        const url = new URL('https://cdn.imagin.studio/getimage');
        const { make, model, year } = car;
      
        url.searchParams.append('customer',process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
        url.searchParams.append('make', make);
        url.searchParams.append('modelFamily', model.split(" ")[0]);
        url.searchParams.append('zoomType', 'fullscreen');
        url.searchParams.append('modelYear', `${year}`);
        // url.searchParams.append('zoomLevel', zoomLevel);
        url.searchParams.append('angle', `${angle}`);
      
        return `${url}`;
      } 
 

 

