"use client"
import { useState } from "react";
import CreateSuperHero from "./CreateSuperHero";

export default function ButtonAddSuperHero() {
  const [openModal, setOpenModal] = useState(false);

  const handleClickOpen = () => {
    setOpenModal(true)
  }
  
  const handleClickClose = () => {
    setOpenModal(false)
  }

  return (
    <div className="indicator">
      <button
        className="fixed bottom-0 right-4 btn mb-20 btn-circle"
        onClick={handleClickOpen}
      >
        <span className="indicator-center indicator-item badge badge-success">
          Crear
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 inline-block"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 0 0-1 1v6H3a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2h-6V3a1 1 0 0 0-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <CreateSuperHero openModal={openModal} handleClickClose={handleClickClose} />
    </div>
  );
}
