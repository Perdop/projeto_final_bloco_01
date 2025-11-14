import { Produtos } from "./PRodutos";

export class ProdutosChicotes extends Produtos {

    private _comprimento: number;

    constructor(id:number, modelo: string, preco: number, estoque:number, categoria: string,comprimento: number) {
        super(id, modelo, preco, estoque,categoria);
        this._comprimento = comprimento;
    }

    public get comprimento(): number {
        return this._comprimento;
    }

    public set comprimento(comprimento: number) {
        this._comprimento = comprimento;
    }

    public listar():void {
        console.log("Comprimento: " + this._comprimento);
    }
}