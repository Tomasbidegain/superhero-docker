import Card from "@/components/Card";

const fetchSuperHeroes = async (filter, casa) => {
  const data = {};
  if (casa) data.casa = casa
  if (filter) data.nombre = filter;
  const res = await fetch("http://localhost:4000/filter-superheroes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export default async function ListSuperHeroes({ search, casa }) {
  const superheroes = await fetchSuperHeroes(search, casa);
  return (
      superheroes.length ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-28 pt-24 pb-20">
          {superheroes.map((superhero) => (
            <Card superhero={superhero} />
          ))}
        </div>
      ) : (
        <div className="w-full h-screen flex justify-center items-center">
          <h1 className="font-bold text-error">
            No hay personajes disponibles D:
          </h1>
        </div>
      )
  );
}
