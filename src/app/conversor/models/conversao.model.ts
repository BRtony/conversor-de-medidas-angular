import { Unit } from "convert-units";

export class Conversao {
    constructor(
        public medidaDe: Unit,
        public medidaPara: Unit,
        public valorEntrada?: number,
        public valorSaida?: number,
    ){}
}
