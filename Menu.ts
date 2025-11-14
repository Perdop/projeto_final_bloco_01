import { log } from "node:console";
import readlinesync = require("readline-sync");
import { ProdutosController } from "./src/controller/ProdutosController";
import { ProdutosVcus } from "./src/model/ProdutosVcus";
import { ProdutosChicotes } from "./src/model/ProdutosChicotes";
import { ProdutosVolante } from "./src/model/ProdutosVolante";


export function main(){
    const listaOpcoesMenu: string[] = ["Cadastrar Produto", "Listar Produtos", "Atualizar Produto", "Excluir Produto",  "Sair"];

    apresentacaoMarca();
    opcoesMenu(listaOpcoesMenu)

    let produto: ProdutosController = new ProdutosController();
    let id, preco, estoque, categoria, entradas, comprimento, diametro: number;
    let modelo: string;
    let telaConfiguravel: boolean;
    const categorias = ["Vcus", "Chicotes", "Volantes"]
 
    
    while (true) {
        let opcao = questionInt("Selecione a opcao: \n");
        switch (opcao) {
            case 1:
                console.log("Voce escolheu " + listaOpcoesMenu[0] + " -->\n");

                modelo = question("Qual o modelo? \n");
                preco = questionFloat("Qual o preco? \n");
                estoque = questionInt("Qual o estoque? \n");
                categoria = questionInt("Qual a categoria? \n1 - Vcus / 2 - Chicotes / 3 - Volantes \n");

                switch (categoria) {
                    case 1:
                        console.log("Selecionou Vcus: ");
                        entradas = questionInt("Quantas entradas? ")
                        produto.cadastrar(new ProdutosVcus(produto.gerarNumero(), modelo, preco, estoque, categoria, entradas));
                        break;

                    case 2:
                        console.log("Selecionou Chicotes: ");
                        comprimento = questionInt("Qual o comprimento?");
                        produto.cadastrar(new ProdutosChicotes(produto.gerarNumero(), modelo, preco, estoque, categoria, comprimento));
                        break;

                    case 3:
                        console.log("Selecionou Volante: ");
                        diametro = questionFloat("Qual o diametro? ")
                        produto.cadastrar(new ProdutosVolante(produto.gerarNumero(), modelo, preco, estoque, categoria, diametro));
                        break;
                
                    default:
                        console.log("Opcao invalida");
                        break;
                }

                break;

            case 2:
                console.log("Voce escolheu " + listaOpcoesMenu[1] + " -->\n");
                produto.listarTodos();

                break;

            case 3:
                console.log("Voce escolheu " + listaOpcoesMenu[2] + " -->\n");
                id = questionInt("Qual o id do produto: ");

                let produtos = produto.buscarNoArray(id);
                
                if (produtos != null) {
                    modelo = question("Novo modelo? \n");
                    preco = questionFloat("Novo  preco? \n");
                    estoque = questionInt("Novo estoque? \n");
                    categoria = questionInt("Nova categoria? \n1 - Vcus / 2 - Chicotes / 3 - Volantes \n");

                    switch (categoria) {
                        case 1:
                            console.log("Selecionou Vcus: ");
                            entradas = questionInt("Quantas entradas? ")
                            produto.atualizar(new ProdutosVcus(id, modelo, preco, estoque, categoria, entradas));
                            break;

                        case 2:
                            console.log("Selecionou Chicotes: ");
                            comprimento = questionInt("Qual o comprimento?");
                            produto.atualizar(new ProdutosChicotes(id, modelo, preco, estoque, categoria, comprimento));
                            break;

                        case 3:
                            console.log("Selecionou Volante: ");
                            diametro = questionFloat("Qual o diametro? ")
                            produto.atualizar(new ProdutosVolante(id, modelo, preco, estoque, categoria, diametro));
                            break;
                    
                        default:
                            console.log("Opcao invalida");
                            break;
                }
                } else {
                    console.log("Produto nao encontrado");
                }

                break;

            case 4:
                console.log("Voce escolheu " + listaOpcoesMenu[3] + " -->\n");
                id = questionInt("Qual o id do produto pra apagar? \n");
                produto.deletar(id);
                
                break;
            
            case 6:
                console.log("Saindo...");
                return;

            default:
                console.log("Opcao Invalida");
                break;
        }
    }

}


const question = (opcao: string) : string => readlinesync.question(`${opcao}`); 
const questionInt = (opcao: string) : number => readlinesync.questionInt(`${opcao}`);
const questionFloat = (opcao: string) : number => readlinesync.questionFloat(`${opcao}`);
const apresentacaoMarca = (): void => {
    console.log("  _/  \\_   _/  \\_   _/  \\_   _/  \\_   _/  \\_   _/  \\_  ");
    console.log("  -O--O-   -O--O-   -O--O-   -O--O-   -O--O-   -O--O-   \n");
    console.log("                       Roda Antiga                      \n");
    console.log("\n                     \"O Legado Gira\"                \n");
    console.log("  ___|  \\_   ___|  \\_   ___|  \\_   ___|  \\_   ___|  \\_");
    console.log("  -O---O--   -O---O--   -O---O--   -O---O--   -O---O--  \n");
}
const opcoesMenu = (opcoes: String[]): void => {
    for (let i =  0; i  < opcoes.length; i++) {
        console.log(`                  ${i+1} - ${opcoes[i]}`);
    }    
    console.log("\n    ___|  \\_   _/  \\_   ___|  \\_   _/  \\_   ___|  \\_");
    console.log("    -O---O--   -O--O-   -O---O--   -O--O-   -O---O--  \n");
    
}

main();