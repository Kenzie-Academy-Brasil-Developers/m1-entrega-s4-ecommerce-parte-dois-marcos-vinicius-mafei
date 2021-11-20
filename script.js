//adiciona os cards de forma dinâmica à página
function adicionar(){
    for(let i=1;i<7;i++){
        const div = document.createElement("div");
        div.classList.add("item--box")
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const figcaption = document.createElement("figcaption");
        const button = document.createElement("button");
        const h3 = document.createElement("h3");
        const p1 = document.createElement("p");
        p1.classList.add("description")
        const p2 = document.createElement("p");
        p2.classList.add("preço")
        const small = document.createElement("small");
        small.classList.add("botao--adicionar")
        small.innerText="Adicionar ao carrinho"
        if(i===1){
            img.src = "assets/jaquetaLeve.png";
            img.alt = "Lightweight Jacket"
            figcaption.innerText = 'Imagem de uma jaqueta leve';
            button.innerText = 'Camisetas';
            h3.innerText = 'Lightweight Jacket';
            p1.innerText ="Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante..."
            p2.innerText="R$100.00"
        }else if(i===2){
           img.src = 'assets/gorro.png'
           img.alt = "Black Hat"
           figcaption.innerText ='Imagem de um gorro'
           button.innerText ='Acessórios'
           h3.innerText = 'Black Hat'
           p1.innerText ='O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...'
           p2.innerText ="R$100.00"
        }else if(i===3){
            img.src = 'assets/mascara.png'
            img.alt = "Mask"
            figcaption.innerText ='Imagem de uma mascara'
            button.innerText ='Acessórios'
            h3.innerText ='Mask'
            p1.innerText ='Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...'
            p2.innerText ="R$40.00"
        }else if(i===4){
            img.src = 'assets/tShirt.png'
            img.alt = "T-shirt"
            figcaption.innerText ='Imagem de uma camiseta'
            button.innerText ='Camisetas'
            h3.innerText ='T-shirt'
            p1.innerText ='Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...'
            p2.innerText ="R$100.00"
        }else if(i===5){
            img.src = 'assets/tShirtBranca.png'
            img.alt = "Short-Sleeve T-Shirt"
            figcaption.innerText ='Imagem de uma camiseta branca'
            button.innerText ='Camisetas'
            h3.innerText ='Short-Sleeve T-Shirt'
            p1.innerText ='Agora você encontrou small camiseta básica do seu guarda-roupa. É feito de um mais grosso...'
            p2.innerText ="R$100.00"
        }else if(i===6){
            img.src = 'assets/jaqueta.png'
            img.alt = "Champion Packable Jacket"
            figcaption.innerText ='Imagem de uma jaqueta'
            button.innerText ='Camisetas'
            h3.innerText ='Champion Packable Jacket'
            p1.innerText ='Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...'
            p2.innerText ="R$100.00"
        }
    figure.appendChild(img)
    figure.appendChild(figcaption)
    div.appendChild(figure)
    div.appendChild(button)
    div.appendChild(h3)
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(small)
    div.addEventListener('click', addCarrinho)
    const vitrine = document.getElementsByClassName("produtos")[0]
    vitrine.appendChild(div)
    }
}

    function btnCarrinhoShowHide(){
        const carrinho = document.getElementsByClassName("carrinho")[0]
        const classes = carrinho.classList
        if(classes.contains('displayNone')){
            carrinho.classList.remove('displayNone')
        }else{
            carrinho.classList.add('displayNone')
        }
    }
    const btnCarrinho = document.getElementsByClassName("btn--carrinho")[0]
    btnCarrinho.addEventListener('click',btnCarrinhoShowHide)

    function addCarrinho(event){
        let checkElement = event.target
        console.log(checkElement)
        const classes = checkElement.classList
        if(classes.contains('botao--adicionar')){
            const card = checkElement.parentNode
            const name = card.childNodes[2].innerText
            const price = card.childNodes[4].innerText
            console.log(price)
            console.log(name)
            const figure = card.firstChild
            const image = figure.firstChild
            const caption = figure.childNodes[1].innerText
            const src = image.src
            const carrinho = document.getElementById('atualizaCarrinho')
            if(carrinho.classList.contains('carrinho--vazio')){
                carrinho.classList.remove('carrinho--vazio')
                carrinho.classList.add('novo--carrinho')
                carrinho.innerHTML=''
            }
            const divContainer = document.createElement('div')
            divContainer.classList.add('carrinho--container')
            const divCard = document.createElement('div')
            divCard.classList.add('carrinho--card')
            const novaFigure = document.createElement("figure")
            const novaImagem = document.createElement('img')
            novaImagem.src = src
            const novaCaption = document.createElement('figcaption')
            novaCaption.innerText=caption
            const h3 = document.createElement("h3")
            h3.innerText =name
            const preço = document.createElement('p')
            preço.innerText =price
            preço.classList.add('preço')
            const remover = document.createElement('p')
            remover.innerText='Remover produto'
            remover.classList.add('remover')
            novaFigure.appendChild(novaImagem)
            novaFigure.appendChild(novaCaption)
            divCard.appendChild(novaFigure)
            divCard.appendChild(h3)
            divCard.appendChild(preço)
            divCard.appendChild(remover)
            divContainer.appendChild(divCard)
            carrinho.appendChild(divContainer)
        }
    }

adicionar()






// idéia do filter do bônus:
// function remove(type){
//     adicionar()
//     if(button.innerText!==type ){
//         display none
//     }
// }