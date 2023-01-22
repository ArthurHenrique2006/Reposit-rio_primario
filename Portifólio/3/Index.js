function add(){
    var n = document.getElementById('name')
    var p = document.getElementById('preço')
    var lista = document.getElementById('L')

    var nome = Text(n.value)
    var preço = Number(p.preço)

    var item = document.createElement('option')
    item.text = `${nome}    ${preço}`

    lista.appendChild(item)
}