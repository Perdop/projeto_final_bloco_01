import { Produtos } from "../model/PRodutos";

export interface ProdutosRepository {

	procurarModelo(modelo:string): void;
	listarTodos(): void;
	cadastrar(produto: Produtos): void;
	atualizar(produto: Produtos): void;
	deletar(id: number):void;

	
}
