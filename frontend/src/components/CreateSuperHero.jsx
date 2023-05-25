"use client"
import { useState } from "react";
import { uploadFile } from "../../firebase";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const createSuper = async (info) => {
  try {
    const res = await fetch("http://localhos:4000/create-superhero", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default function CreateSuperHero({ handleClickClose, openModal }) {
  const router = useRouter()

  const [nombre, setNombre] = useState("");
  const [nombrePersonaje, setNombrePersonaje] = useState("");
  const [añoAparicion, setAñoAparicion] = useState("");
  const [casa, setCasa] = useState("");
  const [biografia, setBiografia] = useState("");
  const [equipamiento, setEquipamiento] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const info = {
      nombre,
      nombrePersonaje,
      añoAparicion,
      casa,
      biografia,
      equipamiento,
    };
    try {
      const imagesUrls = [];
      for (let i = 0; i < images.length; i++) {
        const file = images[i];
        const resolve = await uploadFile(file);
        imagesUrls.push(resolve[1]);
      }

      info.images_url = imagesUrls;

      await createSuper(info);
      Swal.fire({
        icon: 'success',
        title: 'Personaje creado con éxito',
        showConfirmButton: false,
        timer: 1500
      })
      router.refresh()
      setLoading(false);
      handleClickClose()
    } catch (error) {
      console.error(error);
      setLoading(false);
      handleClickClose()
    }
  };

  return (
    <div className={`modal ${openModal ? "modal-open" : ""}`}>
      <div className="modal-box">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="modal-header">
            <h2 className="text-xl font-bold">Agregar Superhéroe</h2>
          </div>

          <form
            className="grid grid-cols-2 grid-row-3 modal-body w-full max-w-xs gap-4"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="w-full flex flex-col">
              <label htmlFor="images" className="label-text">
                Imágenes*
              </label>
              <input
                required
                type="file"
                id="images"
                className="file-input file-input-md file-input-bordered file-input-accent w-full max-w-xs"
                multiple
                onChange={(e) => {
                  setImages(e.target.files);
                }}
              />
            </div>

            <div className="w-full flex flex-col">
              <label htmlFor="nombre" className="label-text">
                Nombre*
              </label>
              <input
                required
                type="text"
                id="nombre"
                className="input input-md input-bordered input-accent w-full max-w-xs"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className="w-full flex flex-col">
              <label htmlFor="nombrePersonaje" className="label-text">
                Nombre del personaje
              </label>
              <input
                type="text"
                id="nombrePersonaje"
                className="input input-md input-bordered input-accent w-full max-w-xs"
                value={nombrePersonaje}
                onChange={(e) => setNombrePersonaje(e.target.value)}
              />
            </div>

            <div className="w-full flex flex-col">
              <label htmlFor="añoAparicion" className="label-text">
                Año aparición
              </label>
              <input
                type="number"
                id="añoAparicion"
                className="input input-md input-bordered input-accent w-full max-w-xs"
                value={añoAparicion}
                onChange={(e) => setAñoAparicion(e.target.value)}
              />
            </div>

            <div className="w-full flex flex-col">
              <label htmlFor="equipamiento" className="label-text">
                Equipamiento
              </label>
              <input
                type="text"
                id="equipamiento"
                className="input input-md input-bordered input-accent w-full max-w-xs"
                value={equipamiento}
                onChange={(e) => setEquipamiento(e.target.value)}
              />
            </div>

            <div className="w-full flex flex-col">
              <label htmlFor="casa" className="label-text">
                Casa*
              </label>
              <input
                required
                type="text"
                id="casa"
                className="input input-md input-bordered input-accent w-full max-w-xs"
                value={casa}
                onChange={(e) => setCasa(e.target.value)}
              />
            </div>

            <div className="mb-4 flex flex-col col-span-2">
              <label htmlFor="biografia" className="label-text">
                biografiagrafía*
              </label>
              <textarea
                id="biografia"
                className="input input-md input-bordered input-accent w-full max-w-xs"
                value={biografia}
                onChange={(e) => setBiografia(e.target.value)}
              />
            </div>
            <div className="modal-footer flex w-full justify-between col-span-2">
              <button onClick={handleClickClose} className="btn" type="button">
                Cerrar
              </button>
              {loading ? (
                <button className="btn loading">loading</button>
              ) : (
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Guardar
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
