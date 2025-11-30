import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { PokemonContext } from "../../../../context/PokemonContext";
import { useNavigate } from "react-router-dom";

const PokemonForm = () => {
  const { addPokemon } = useContext(PokemonContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newPokemon = {
      id: Number(data.id),
      name: data.name,
      sprites: { front_default: data.image },
      types: [
        { type: { name: data.typeOne } },
        data.typeTwo ? { type: { name: data.typeTwo } } : null,
      ].filter(Boolean), // Si no existe tipo 2 lo elimina para que no salga
    };

    addPokemon(newPokemon);
    navigate("/"); // volver a lista de búsqueda
  };

  return (
    <section className="formNewContainer">
      <h1>Añade tu Pokemon</h1>
      <form className="formNew" onSubmit={handleSubmit(onSubmit)}>
        <div className="basicDates">
          <label>ID:</label>
          <input
            type="number"
            {...register("id", { required: true })}
            placeholder="Intruduce el ID"
          />
          {errors.id && <span>ID es obligatorio</span>}

          <label>Nombre:</label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Introduce el nombre"
          />
          {errors.name && <span>Nombre obligatorio</span>}

          <label>Imagen:</label>
          <input
            type="text"
            {...register("image", { required: true })}
            placeholder="Introduce una URL"
          />
          {errors.image && <span>Imagen obligatoria</span>}
        </div>
        <div className="typesDates">
          <label>Tipo 1:</label>
          <select {...register("typeOne", { required: true })}>
            <option value="">Selecciona tipo</option>
            <option value="fire">Fuego</option>
            <option value="water">Agua</option>
            <option value="grass">Planta</option>
            <option value="electric">Eléctrico</option>
            <option value="psychic">Psíquico</option>
          </select>
          {errors.typeOne && <span>Tipo 1 obligatorio</span>}

          <label>Tipo 2:</label>
          <select {...register("typeTwo")}>
            <option value="">Selecciona tipo</option>
            <option value="fire">Fuego</option>
            <option value="water">Agua</option>
            <option value="grass">Planta</option>
            <option value="electric">Eléctrico</option>
            <option value="psychic">Psíquico</option>
          </select>
        </div>

        <button className="createButton" type="submit">
          Crear Pokémon
        </button>
      </form>
    </section>
  );
};

export default PokemonForm;
