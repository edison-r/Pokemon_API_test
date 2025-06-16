import { Pokemon } from "./types.js";

const pokemonContainer = document.getElementById("pokemonContainer") as HTMLDivElement;

export function showPokemon(data: Pokemon): void{ // data: interface Pokemon y void xq la función no devuelve nada
    pokemonContainer.innerHTML= "";

    const img = document.createElement("img");
    img.src = data.sprites.front_default;
    img.className = 'w-32 h-32 p-2';

    const h3 = document.createElement("h3");
    h3.textContent = data.name;
    h3.className = 'text-xl font-semibold text-center capitalize';

    const div = document.createElement("div");
    div.className = 'flex flex-col items-center';
    div.appendChild(img);
    div.appendChild(h3);

    pokemonContainer.appendChild(div);
}

export const mostrarError = (mensaje: string): void => {
    pokemonContainer.innerHTML= "";

    const error = document.createElement("p");
    error.textContent = mensaje;
    error.className = 'text-red-600 text-center mt-2 font-medium';
    pokemonContainer.appendChild(error);
}

export const mostrarMensaje = (mensaje: string): void  => {
    pokemonContainer.innerHTML= "";

    const msg = document.createElement("p");
    msg.textContent = mensaje;
    msg.className = 'text-gray-500 text-center mt-2 font-medium';
    pokemonContainer.appendChild(msg);
}