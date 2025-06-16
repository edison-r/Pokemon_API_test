var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { mostrarError } from "./ui.js";
export function bringPokemon(name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            if (!res.ok)
                throw new Error("No se encontró el Pokémon");
            const data = yield res.json();
            return data;
        }
        catch (error) {
            mostrarError("Error: No se pudo cargar el Pokémon");
            console.log(error);
            return null;
        }
    });
}
