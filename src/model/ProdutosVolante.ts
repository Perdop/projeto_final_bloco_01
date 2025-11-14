import { Produtos } from "./Produtos";

export class ProdutosVolante extends Produtos {

    private _diametro: number;

    constructor(id:number, modelo: string, preco: number, estoque: number, categoria: number, diametro: number ) {
        super(id, modelo, preco, estoque, categoria);
        this._diametro = diametro;
    }

    public get diametro(): number {
        return this._diametro;
    }

    public set diametro(diametro: number) {
        this._diametro = diametro;
    }

    public listar():void {
        super.listar();
        console.log(`Diametros: ${this._diametro}`);
    }
}