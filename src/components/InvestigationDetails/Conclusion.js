import React, { useState, useRef } from "react";
import { FaEdit } from "react-icons/fa";

export default function Conclusion({ data }) {
  const [value, setValue] = useState(data); // État pour stocker la valeur du champ de texte
  const [isEditing, setIsEditing] = useState(false); // État pour suivre l'état de modification du champ de texte
  const inputRef = useRef(null); // Référence au champ de texte

  const handleClick = () => {
    setIsEditing(!isEditing); // Bascule entre l'état de modification lors du clic sur l'icône
  };

  const handleChange = (event) => {
    setValue(event.target.value); // Mettre à jour la valeur du champ de texte lors de la modification par l'utilisateur
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick(); // Quitter le mode d'édition lorsque la touche "Enter" est enfoncée
    }
  };

  const handleBlur = () => {
    handleClick(); // Quitter le mode d'édition lors du clic en dehors du champ de texte
  };

  return (
    <div className="w-full px-10 py-3 mb-16 flex flex-col">
      <div className="flex flex-col gap-4 w-full p-4 rounded-md border-solid border-2 border-azegza">
        <div className="flex items-center gap-3 w-36 relative top-0 -mt-8 bg-gray-100 px-2">
          <h3 className="text-xl text-center font-semibold">Conclusion</h3>
          {!isEditing && (
            <FaEdit onClick={handleClick} className="cursor-pointer" />
          )}
        </div>
        <div className="col-span-1 font-normal mb-1">
          {isEditing ? (
            <textarea
              type="text"
              value={value}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              className="text-azegza w-full h-[100px]"
              ref={inputRef}
              autoFocus
            />
          ) : (
            <p className="w-full">{value}</p>
          )}
        </div>
      </div>
    </div>
  );
}
