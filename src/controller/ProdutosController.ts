import { Produtos } from "../model/Produtos";
import { ProdutosRepository } from "../repository/ProdutosRepository";

export class ProdutosController implements ProdutosRepository{

    private listaProdutos: Array<Produtos> = new Array<Produtos>();
    id: number = 0

    listarTodos(): void {
        try {
            if (this.listaProdutos.length < 1) {
                console.log("Nenhum Produto");
            } else {
                for (let produto of this.listaProdutos){
                    produto.listar();
                } 
            }
        } catch (error) {
            console.log("Erro: " + error);
        }
    }
    cadastrar(produto: Produtos): void {
        try {
            this.listaProdutos.push(produto);
            console.log(`Produto: ${produto.modelo} foi cadastrado!\n`);
        } catch (error) {
            console.log("Erro: " + error);
        }
    }
    atualizar(produto: Produtos): void {
        try {
            let buscaProduto = this.buscarNoArray(produto.id);

            if (buscaProduto != null) {
                this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
                console.log("\nO produto Numero: " + produto.id + " foi atualizada com sucesso!");   
            } else {
                console.log("\nO produto Numero: " + produto.id + " nao foi encontrada!");            
            } 
        } catch (error) {
            console.log("Erro: " + error);
        }

    }
    deletar(id: number): void {
        try {
            let buscaProduto = this.buscarNoArray(id);

            if (buscaProduto != null) {
                this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
                console.log("\nO produto numero: " + id + " foi apagado com sucesso");
            } else {
                console.log("\nO produto Numero: " + id + " nao foi encontrada!");
                
            }
        } catch (error) {
            console.log("Erro: " + error);
        }
    }
    
    public gerarNumero(): number {
        return ++ this.id;
    }

    public buscarNoArray(id: number): Produtos | null {
        for(let conta of this.listaProdutos){
            if(conta.id === id){
                return conta;
            }
        }

        return null;    
    }

}