var valor = "07/10/2019"

while (true) {
    var senha = prompt('Senha (dd/mm/aaaa): ')
    if (senha == valor) {
        alert("Welcome, my love.")
        break
    }
    alert("Senha errada, tente novamente.")
}
