import { Pokemon } from "./types.js";
import { mostrarError } from "./ui.js";

export async function bringPokemon(name: string): Promise<Pokemon | null> {
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        
        if(!res.ok) throw new Error("No se encontró el Pokémon");

        const data: Pokemon = await res.json();
        
        return data;
        
    } catch(error){
        mostrarError("Error: No se pudo cargar el Pokémon");
        console.log(error);
        return null;
    }
}