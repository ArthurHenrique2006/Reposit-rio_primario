function add(){
    //Adicionar itens
    var n = document.getElementById('name')
    var p = document.getElementById('preço')
    var lista = document.getElementById('L')
    var t = document.getElementById('total')
    //Definir valores
    var preço = Number(p.value)
    var nome = String(n.value)
    var subtotal = Number(t.value)
    //Criar itens da lista
    var item = document.createElement('option')
    item.text = `${nome}....${preço}R$`
    var total = subtotal + preço
    //Adicionar itens a lista
    lista.add(item)
    t.text(total)
}