import { Produtos } from "./Produtos";

export class ProdutosVcus extends Produtos {

    private _entradas: number;

    constructor(id:number, modelo: string, preco: number, estoque: number, categoria: number, entradas: number) {
        super(id, modelo, preco, estoque, categoria);
        this._entradas = entradas;
    }

    public get entradas(): number {
        return this._entradas;
    }

    public set entradas(entradas: number) {
        this._entradas = entradas;
    }

    public listar():void {
        super.listar();
        console.log(`Entradas: ${this._entradas}`);
    }

}