import { Produtos } from "./PRodutos";

export class ProdutosVcus extends Produtos {

    private _telaConfiguravel: boolean;
    private _entradas: number;
    private _entradaConfiguraveis: number;

    constructor(id:number, modelo: string, preco: number, estoque: number, categoria: string, telaConfiguravel:boolean, entradas: number, entradaConfiguraveis: number) {
        super(id, modelo, preco, estoque, categoria);
        this._telaConfiguravel = telaConfiguravel;
        this._entradas = entradas;
        this._entradaConfiguraveis = entradaConfiguraveis;
    }

    public get telaConfiguravel(): boolean {
        return this._telaConfiguravel;
    }

    public set telaConfiguravel(telaConfiguravel: boolean) {
        this._telaConfiguravel = telaConfiguravel;
    }

    public get entradas(): number {
        return this._entradas;
    }

    public set entradas(entradas: number) {
        this._entradas = entradas;
    }

    public get entradaConfiguraveis(): number {
        return this._entradaConfiguraveis;
    }

    public set entradaConfiguraveis(entradaConfiguraveis: number) {
        this._entradaConfiguraveis = entradaConfiguraveis;
    }

    public listar():void {
        console.log(`Entradas: ${this._entradas}`);
    }

}