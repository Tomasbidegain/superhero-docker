import Image from "next/image";
import Link from "next/link";
export default function ({ superhero }) {

  const {
    _id,
    nombre,
    biografia,
    images_url
  } = superhero;

  return (
    <div className="card card-compact w-full h-96.5 bg-base-content shadow-xl transform transition duration-500 hover:scale-105">
      <figure className="image-full h-[260px]">
        
        {images_url.length !== 0 ? (
           <Image
           src={superhero.images_url[0]}
           alt={`image ${nombre}`} 
           width={400}
           height={400}
         />
        ):(
          <Image
          src=''
          alt={`image ${nombre}`} 
        />)}

      </figure>
      <div className="card-body">
        <h2 className="card-title text-neutral">
          {nombre}
        </h2>
        <p className="line-clamp-3 text-neutral">{biografia}</p>
        <div className="card-actions justify-center">
        <Link href={`/${_id}`}>
          <button className="btn btn-primary">Ver detalles</button>
        </Link>
    </div>
      </div>
    </div>
  );
}
