"use client"

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const deleteSuperHero = async (id) => {
  try {
    const res = await fetch("http://localhost:4000/delete-superhero", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id}),
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default async function ButtonDeleteSuperHero( { id } ){
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Quieres eliminar el personaje?',
        text: "Si lo eliminas no puedes volver atras!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteSuperHero(id)
          router.push('/')
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'Personaje eliminado correctamente!',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Tu personaje esta a salvo :D',
            'error'
          )
        }
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un error',
        text: 'Intentalo de nuevo mas tarde',
      })
    }
  }

  return(
    <button className="btn btn-error" onClick={handleSubmit}>Eliminar</button>
  )
}