var nd = 30
var n = 1
var m = document.getElementById("mês")
var dia = document.getElementById('dia')
var mes = Text(m.value)

if(mes == Janeiro){
    nd = 30
}
else if(mes == setembro){
    nd = 28
}

while(nd >= 1){
    var op = document.createElement('option')
    op.text = n

    dia.appendChild(op)
    n ++
}