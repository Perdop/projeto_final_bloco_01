import { Produtos } from "../model/Produtos";

export interface ProdutosRepository {

	listarTodos(): void;
	cadastrar(produto: Produtos): void;
	atualizar(produto: Produtos): void;
	deletar(id: number):void;


}
