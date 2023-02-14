
(async () => {
    
    const TarefasAlunos = require('./models/TarefasAlunos');
    const database = require ('./db');
    const Alunos = require('./models/Alunos');
    const Professores = require('./models/Professores');
    const Tarefas = require('./models/Tarefas');
    await database.sync(); //{force: true} dentro do sync na primeira vez que for usar


    /*const buscarAluno = await Alunos.findByPk(1)
    const buscarTarefa = await Tarefas.findAndCountAll()
    let num = buscarTarefa.count
    
    //await buscarAluno.setTarefas([addTarefas])

    let i = 1
    while (i <= 2) {
        let addTarefas = await Tarefas.findOne({
            where: {
                id: i,
                serie: 1
            }
        })
       await buscarAluno.setTarefas([addTarefas])
        /*if (addTarefas.serie === buscarAluno.serie) {
            console.log(addTarefas.titulo);
            //await buscarAluno.setTarefas([Tarefas])
            return
        }
        i++
    }*/
    
    /*for (let i = 1; i == num; i++) {
        
        //await buscarAluno.setTarefas([addTarefas])
    }*/
    

    /*const aluno = await Alunos.findAndCountAll({
        where: {
            serie: 2
        }
    })
    console.log(aluno.count);*/

    /*const tarefa = await Tarefas.findByPk(1)
    console.log(tarefa.serie);*/


    // Operações CRUD = Create

    /*const novoProfessor = await Professores.create({
        nome: 'Luan',
        sobrenome: 'Peixoto',
        celular: 99999,
        disciplina: 'Fisica',
        email: 'desousadelima.joao@gmail.com',
        senha: '123'
    })
    console.log(novoProfessor.dataValues);*/

    /*const novoAluno = await Alunos.create({
        nome: 'Marianna',
        sobrenome: 'Assis',
        celular: 99999,
        serie: 2,
        email: 'desousadelima@gmail.com',
        senha: '123'
    })
    console.log(novoAluno);*/

    /*const buscarProf = await Professores.findByPk(2)

    const novaTarefa = await Tarefas.create({
        titulo: 'Eletromagnetismo',
        serie: 1,
        disciplina: 'Fisica',
        descricao: 'Exercicios do livro',
        ProfessoreId: buscarProf.id
    })
    console.log(novaTarefa);*/

    const tamanho = await Tarefas.findAndCountAll()
    let num = tamanho.count

    for (let i = 1; i <= num; i++) {
        const buscarAluno = await Alunos.findByPk(1)
        
        let buscarTarefa = await Tarefas.findOne({
            where: {
                id: i
            }
        })
        if (buscarTarefa.serie === buscarAluno.serie) {
            let addTarefas = await TarefasAlunos.create({
                AlunoId: buscarAluno.id,
                TarefaId: buscarTarefa.id
            })
            
            console.log(addTarefas)
        }

    }


    /*const produto = await TarefasAlunos.findByPk(1)
    
    
    produto.AlunoId = 1

    await produto.save()
    console.log(produto);*/



    /*const novoFabricante = await Fabricante.create({
        nome: 'Apple'
    })
    const novoProduto = await Produto.create({
        nome: 'Macbook',
        preco: 5000,
        descricao: 'Notebook da Apple',
        idFabricante: novoFabricante.id
    })
    console.log(novoProduto);*/

    /*const novoProduto = await Produto.create({
        nome: 'Monitor LED',
        preco: 500,
        descricao: 'Monitor bacana'
    })
    console.log(novoProduto);*/

    /*const novaCategoria = await Categoria.create({
        nome: 'Informatica'
    })

    const produto = await Produto.findByPk(1)
    await produto.setCategoria([novaCategoria])

    const cat = await Categoria.findOne({
        where: {
            nome: 'Informatica'
        }
    })
    const produto = await Produto.findByPk(3)
    await produto.setCategoria([cat])*/


   /* for (let i = 1; i < 10 ; i++) {
        
        const buscarAluno = await Alunos.findOne({
            where: {
                id: 1,
                serie: 2
            }
        })
        
        let buscarTarefa = await Tarefas.findOne({
            where: {
                id: i,
                serie: 2
            }
        })
    
        await buscarAluno.setTarefas([buscarTarefa])
    }
    */

   

    /*const buscarFabricante = await Fabricante.findAll({
        where: {
            nome: 'Apple'
        }
    })*/
    /*const buscarFabricante = await Fabricante.findOne({
        where: {
            nome: 'Apple'
        }
    })

    const novoProduto = await Produto.create({
        nome: 'Iphone',
        preco: 8000,
        descricao: 'Celular da Apple',
        idFabricante: buscarFabricante.id
    })*/

    // Operações CRUD = Read

    /*const produtos = await Produto.findAll()
    console.log(produtos);*/
    //const produtos = await Produto.findByPk(1)
    /*const produtos = await Produto.findAll({
        where: {
            preco: 15
        }
    })
    console.log(produtos);*/

    /*const produto = await Produto.findByPk(1)
    const fabricante = await produto.getFabricante()
    console.log(fabricante.nome);*/

    /*const produto = await Produto.findByPk(1, {
        include: Fabricante
    })
    console.log(produto.fabricante.nome);*/

    const aluno = await Alunos.findByPk(1, {
        include: Tarefas
    })

    const alunosTarefa = aluno.Tarefas.map((result) => result.dataValues)

    console.log(alunosTarefa);

    /*const fabricante = await Fabricante.findByPk(1)
    const produtos = await fabricante.getProdutos()
    console.log(produtos);*/
    /*/const fabricante = await Fabricante.findByPk(1, {
        include: Produto
    })
    console.log(fabricante.produtos);*/

    /*const produto = await Produto.findByPk(1, {
        include: Categoria
    })
    console.log(produto.categoria);*/

    /*const categoria = await Categoria.findByPk(1, {
        include: Produto
    })

    const categoriaData = categoria.produtos.map((result) => result.dataValues)

    console.log(categoriaData);*/

    /*const aluno = await Alunos.findByPk(2)
    const tarefas = await aluno.getTarefas()

    console.log(tarefas);*/



    //Operações CRUD = Update

    /*const produto = await Produto.findByPk(4)
    produto.nome = 'Gabinete'
    produto.preco = 1000
    produto.descricao = 'Gabinete bacana'

    await produto.save()
    console.log(produto);*/

    //Operações CRUD = Delete

    /*const produto = await Produto.findByPk(2)
    await produto.destroy()
    console.log(produto);*/

    /*await Alunos.destroy({
        where: {
            id: 2
        }
    })*/

    

})(); 