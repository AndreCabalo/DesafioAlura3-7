const areaEstudo = prompt("Qual area pretende seguir seus estudos? Front-end ou back-end?");
let aprofundarEm = "";

if (areaEstudo == "front") {
    aprofundarEm = prompt("Posha bacana! Front-end é uma area maravilhosa , pretende se aprofundar em react ou ou vue?")

    if (aprofundarEm == "vue") {
        alert("vue é uma boa escolha!")
    }
    else if (aprofundarEm == "react")
        alert("React é uma escolha sabia")
}

else if (areaEstudo == "back") {
    aprofundarEm == prompt("Back-end é só pra quem curte um desafio ne?!, pretende se aprofundar em java ou c#?")

    if (aprofundarEm == "java") {
        alert("java é o pai de tudo")
    }
    else if (aprofundarEm == "c#") {
        alert("c# é o inicio de tudo")
    }
}

else {
    alert("Vc não escolheu uma opção valida")
}

const especializar = prompt("pretende se especializar no " + areaEstudo + " ou fullstack?")

if (especializar == "fullstack") {
    alert("sabia que full stack é otimo para empregabilidade e salarios!?")
}
else if (especializar == areaEstudo) {
    alert("Nada como se especilizar em uma area! fora que " + areaEstudo + "tem vagas a rodo!")
}

aprenderMais = prompt("deseja aprender mais alguma tecnologia?")


while (aprenderMais == "sim") {
    let novaTecnologia = prompt("Qual nova técnologica deseja aprender?")
    alert(`${novaTecnologia} é realmente uma técnologia bem legal `)
    aprenderMais = prompt("deseja aprender mais alguma tecnologia?")
}