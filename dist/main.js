var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { bringPokemon } from "./api.js";
import { showPokemon, mostrarMensaje, mostrarError } from "./ui.js";
const input = document.getElementById("namePokemon");
const button = document.getElementById("searchPokemon");
const pokemonContainer = document.getElementById("pokemonContainer");
button.addEventListener("click", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const name = input.value.trim().toLowerCase();
    if (!name) {
        mostrarError("Por favor, escribe un nombre de Pokémon");
        return;
    }
    mostrarMensaje("Buscando Pokémon...");
    const data = yield bringPokemon(name);
    if (data)
        showPokemon(data);
    input.value = "";
    input.focus();
}));
