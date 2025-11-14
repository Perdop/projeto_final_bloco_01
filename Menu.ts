import { log } from "node:console";
import readlinesync = require("readline-sync");

const listaOpcoesMenu: string[] = ["Cadastrar Produto", "Listar Produto", "Atualizar Produto", "Excluir Produto", "Sair"];


export function main(){
    apresentacaoMarca();
    opcoesMenu(listaOpcoesMenu)

    
    
    while (true) {
        let opcao = questionInt("Selecione a opcao: \n");
        switch (opcao) {
            case 1:
                console.log("Voce escolheu " + listaOpcoesMenu[0] + " -->\n");
                break;

            case 2:
                console.log("Voce escolheu " + listaOpcoesMenu[1] + " -->\n");
                break;

            case 3:
                console.log("Voce escolheu " + listaOpcoesMenu[2] + " -->\n");
                break;

            case 4:
                console.log("Voce escolheu " + listaOpcoesMenu[3] + " -->\n");
                break;

            case 5:
                console.log("Voce escolheu " + listaOpcoesMenu[4] + " -->\n");
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