const { select } = require ('@inquirer/prompts')


const start = async () =>
{

  while (true){

    const opcao = await select ({
        message: "Menu > ",
        choices: [
            {
              name: "Cadastrar Meta",
              value: "cadastrar"
            },
            {
              name: "Listar Metas",
              value: "listar"
            },
            {
              name: "Sair",
              value: "sair"
            },
        ]

    })
   
      switch(opcao) {
        case "cadastrar":
          console.log("vamos cadastrar")
          break
        case "listar":
          console.log("Vamos listar")
          break
        case "sair":
          console.log("Até a próxima")
          return  

      }

  }


}

start ()

