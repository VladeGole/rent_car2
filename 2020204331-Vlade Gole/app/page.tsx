
import { CarCard, CustomFilter, Herro,SearchBar } from "@/components";
import { HomeProps } from "@/type";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home({ searchParams }: HomeProps) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    model: searchParams.model || "",
  });


  console.log(allCars);

  const isDataEmpty=!Array.isArray(allCars)||allCars.length<1||!allCars;

  console.log(isDataEmpty)

  return (
    <main className="overflow-hidden">
      
     <Herro/>
    <div>
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
      <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p className="pt-5 text-gray-600">Istrazite automobile koji bi vam se mogli svideti</p>
      </div>
    </div>

    <div className="home__filters">
      <SearchBar/>
      <div className="home__filter-container">
             
      </div>

    </div>  

    {!isDataEmpty ?(
      <section>
        <div>
          {allCars?.map((cars)=>(
            <CarCard car={cars}/>
          ))}
        </div>
      </section>):(
      <div>
        <h2 className="text-xl font-bold">Ops, no result</h2>
      </div>
       )}
   
   </div>

    </main>
  );
}
