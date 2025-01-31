import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allCars = await fetchCars

  console.log(allCars); //it doesn't actually shows on a browser console becuase every page in Next.JS is a server rendered page.
  return (
    <main className="overflow-hidden">
      <Hero />

      <div id="discover" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars of your taste</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter />
        </div>
        </div>
      </div>
   </main>
  );
}
