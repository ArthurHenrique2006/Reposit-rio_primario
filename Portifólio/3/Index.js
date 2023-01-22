function recuperar(){
    while(localStorage -! 0){
        
    }
}

function add(){
    //Adicionar itens
    var n = document.getElementById('name')
    var p = document.getElementById('preço')
    var lista = document.getElementById('L')

    //Definir valores
    var preço = Number(p.value)
    var nome = String(n.value)

    //Criar itens da lista
    var item = document.createElement('option')
    item.text = `${nome}----${preço}R$`
    
    //Adicionar itens a lista
    lista.add(item)

    //Salvar no local storage
    localStorage.setItem(nome, preço)
}