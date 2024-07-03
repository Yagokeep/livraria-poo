import Prompt from "prompt-sync";
import { Membro } from "./classes/Membro";
import fs from "fs";
import { Livro } from "./classes/Livro";
import { Emprestimo } from "./classes/Emprestimo";

const key = Prompt();

while (true) {
  console.log("+----------------------+");
  console.log("| Administrar:         |");
  console.log("| 1. Livros            |");
  console.log("| 2. Membros           |");
  console.log("| 3. Empréstimos       |");
  console.log("| 0. Sair              |");
  console.log("+----------------------+");

  let menuSelecionado: number = +key("- ");

  // LIVROS
  if (menuSelecionado == 1) {
    while (true) {
      console.log("+---------------------------------------+");
      console.log("| 1. Adicionar novo livro               |");
      console.log("| 2. Listar livros                      |");
      console.log("| 3. Atualizar um livro                 |");
      console.log("| 4. Remover livro                      |");
      console.log("| 0. Sair                               |");
      console.log("+---------------------------------------+");

      let opcao: number = +key("- ");

      if (opcao == 0) {
        break;
      }

      switch (opcao) {
        case 1:
          let titulo: string = key("Título: ");
          let autor: string = key("Autor: ");
          let ISBN: string = key("ISBN: ");
          let ano: number = +key("Ano: ");

          const livro = new Livro(titulo, autor, ISBN, ano);

          livro.adicionar();
          break;
        case 2:
          Livro.prototype.listar();
          break;
        case 3:
          Livro.prototype.atualizar();
          break;
        case 4:
          Livro.prototype.deletar();
          break;
      }
    }
  }

  //MEMBROS
  else if (menuSelecionado == 2) {
    while (true) {
      console.log("+---------------------------------------+");
      console.log("| 1. Adicionar novo membro               |");
      console.log("| 2. Listar membros                      |");
      console.log("| 3. Atualizar um membro                 |");
      console.log("| 4. Remover membro                      |");
      console.log("| 0. Sair                                |");
      console.log("+---------------------------------------+");

      let opcao: number = +key("- ");

      if (opcao == 0) {
        break;
      }

      switch (opcao) {
        case 1:
          let nome: string = key("Nome: ");
          let endereco: string = key("Endereço: ");
          let CPF: string = key("Matrícula: ");          
          let telefone: number = +key("Telefone: ");

          const membro = new Membro(nome, endereco, CPF, telefone);

          membro.adicionar();

          break;

         case 2:
          Membro.prototype.listar();
          break;
        //   if (fs.existsSync("data/membros.txt")) {
        //     const membros = fs
        //       .readFileSync("data/membros.txt", "utf8")
        //       .split(", ");

        //     console.log(membros);
        //   } else {
        //     console.log("Não há nenhum registro.");
        //   }

        //   break;

        case 3:
          Membro.prototype.atualizar();
          break;
          // let m: string = key("CPF: ");
          // const membros = fs
          //   .readFileSync("data/membros.txt", "utf8")
          //   .split(", ");

          // console.log(membros);

          // break;
          case 4:
            Membro.prototype.deletar();
            break;
      }
    }
  }

  //EMPRESTIMOS
  else if (menuSelecionado == 3) {
    while (true) {
      console.log("+---------------------------------------+");
      console.log("| 1. Adicionar novo empréstimo           |");
      console.log("| 2. Fazer uma devolução                 |");
      console.log("| 3. Listar empréstimos não devolvidos   |");
      console.log("| 0. Sair                                |");
      console.log("+---------------------------------------+");

      let opcao: number = +key("- ");

      if (opcao == 0) {
        break;
      }

      switch (opcao) {
        case 1:
          Emprestimo.prototype.adicionar();
          break;
        case 2:
          Emprestimo.prototype.devolver
        case 3:
         Emprestimo.prototype.listar
      }
    }
    //SAIR
  } else if (menuSelecionado == 0) {
    break;
  } else {
    console.log("Selecione uma das opções pelos números.");
  }
}

// console.log("+---------------------------------------+");
// console.log("| 1. Adicionar novo livro               |");
// console.log("| 2. Listar livros                      |");
// console.log("| 3. Atualizar um livro                 |");
// console.log("| 4. Remover Livro                      |");
// console.log("| 0. Sair                               |");
// console.log("+---------------------------------------+");
