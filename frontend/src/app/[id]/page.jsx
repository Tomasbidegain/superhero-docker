import ButtonDeleteSuperHero from "@/components/ButtonDeleteSuperHero";
import ButtonUpdate from "@/components/ButtonUpdate";
import Carousel from "@/components/Carousel";

const getSuperHero = async (id) => {
  const res = await fetch("http://localhost:4000/superhero", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify({ id }),
  });
  return await res.json();
};

export default async function SuperHero({ params }) {
  const id = params.id;
  const superhero = await getSuperHero(id);
  const { nombre, nombrePersonaje, casa, biografia, equipamiento, images_url } = superhero;

  return (
    <div className="hero min-h-screen bg-base-200 z-10 flex justify-center items-center pt-10">
      <div className="w-full hero-content flex-col items-center lg:flex-row lg:justify-around lg:mt-0">
        
        <Carousel images={images_url} />
        <div>
          <h1 className="text-5xl font-bold text-white">{nombre}</h1>
          <div className="flex justify-start items-center mt-6 w-96">
            <h1 className="text-md font-bold">Nombre del personaje:</h1>
            <p className="pl-2">{nombrePersonaje}</p>
          </div>
          <div className="flex justify-start items-center mt-6 w-96">
            <h1 className="text-md font-bold">Casa:</h1>
            <p className="pl-2">{casa}</p>
          </div>
          <div className="mt-6">
            <h1 className="text-md font-bold">Equipamiento:</h1>
            <div className="bio-container overflow-y-auto max-h-12 max-md:h-1 max-lg:h-12 max-xl:h-20 w-96">
              <p>{equipamiento}</p>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="text-md font-bold">Biografia</h1>
            <div className="bio-container overflow-y-auto max-h-36 max-md:h-44 max-lg:h-52 max-xl:h-60 w-96">
              <p>{biografia}</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <ButtonUpdate superhero={superhero}/>
            <ButtonDeleteSuperHero id={id}/>
          </div>
        </div>
      </div>
    </div>
  );
}
