export abstract class Produtos {

    private _id:number;
    private _modelo: string;
    private _preco: number;
    private _estoque: number;
    private _categoria: string;
    
    constructor(id:number, modelo: string, preco: number, estoque: number, categoria: string) {
        this._id = id;
        this._modelo = modelo;
        this._preco = preco;
        this._estoque = estoque;
        this._categoria = categoria;
    }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }
    
    public get modelo(): string {
        return this._modelo;
    }

    public set modelo(modelo: string) {
        this._modelo = modelo;
    }

    public get preco(): number {
        return this._preco;
    }

    public set preco(preco: number) {
        this._preco = preco;
    }

    public get estoque(): number {
        return this._preco;
    }

    public set estoque(preco: number) {
        this._preco = preco;
    }
    
    public get categoria(): string {
        return this._categoria;
    }

    public set categoria(categoria: string) {
        this._categoria = categoria;
    }

    public adicionarEstoque(qtd: number):void{
        this._estoque = this._estoque + qtd;
    }

    public retirarEstoque(qtd: number): boolean{
        if (qtd < this._estoque) {
            this._estoque = this._estoque - qtd;  
            return true;
        } else {
            console.log("Sem estoque!");
            return false;
        }
    }

    public listar():void {
        console.log(`Produtos:\nModelo do produto: ${this._modelo}\nPreco: ${this.preco}\nEstoque: ${this.estoque}\nCategoria: ${this.categoria}`);
    }

}   