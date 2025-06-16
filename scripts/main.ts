import { bringPokemon } from "./api.js";
import { showPokemon, mostrarMensaje, mostrarError } from "./ui.js";

const input = document.getElementById("namePokemon") as HTMLInputElement;
const button = document.getElementById("searchPokemon") as HTMLButtonElement;
const pokemonContainer = document.getElementById("pokemonContainer") as HTMLDivElement;

button.addEventListener("click", async (e) => {
    e.preventDefault();
    const name = input.value.trim().toLowerCase();

    if(!name){
        mostrarError("Por favor, escribe un nombre de Pokémon");
        return;
    }

    mostrarMensaje("Buscando Pokémon...");
    
    const data = await bringPokemon(name);
    
    if(data) showPokemon(data);

    input.value = "";
    input.focus();
})
