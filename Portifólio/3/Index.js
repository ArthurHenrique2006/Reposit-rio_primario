function add(){
    var n = document.getElementById('name')
    var p = document.getElementById('preço')
    var lista = document.getElementById('L')
    var t = document.getElementById('TOTAL')

    var preço = Number(p.value)
    var nome = String(n.value)
    var total = Number(n.value)

    var item = document.createElement('option')
    item.text = `${nome}    ${preço}`
    total.text = `${total + preço}`

    lista.add(item)
}