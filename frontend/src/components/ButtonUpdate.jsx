"use client"
import { useState } from "react";
import { UpdateSuperHero } from "./UpdateSuperHero";

export default function ButtonUpdate( {superhero, getSuperHero} ) {

  const [openModal, setOpenModal] = useState(false);

  const handleClickOpen = () => {
    setOpenModal(true)
  }
  
  const handleClickClose = () => {
    setOpenModal(false)
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={handleClickOpen}>
        Editar
      </button>
      <UpdateSuperHero superhero={superhero} handleClickClose={handleClickClose} openModal={openModal} handleClickOpen={handleClickOpen}/>
    </div>
  );
}
