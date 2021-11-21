//Declaração de variáveis importantes e usadas em diferentes funções:
let preçoTotal = 0
const btnCarrinho = document.getElementsByClassName("btn--carrinho")[0]
const quantidade = document.getElementById('quantidade')
const total = document.getElementById('total')
const carrinho = document.getElementById('atualizaCarrinho')
const header = document.getElementsByTagName('header')[0]
const aside = document.getElementsByTagName('aside')[0]
const vazio = carrinho.innerHTML

//*FUNCTIONS*

//função que adiciona os cards de forma dinâmica à vitrine:
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
        //event listener para cada item--box:
        div.addEventListener('click', addCarrinho)
        const vitrine = document.getElementsByClassName("produtos")[0]
        vitrine.appendChild(div)
        }
    }

//função do botão que mostra e esconde o carrinho de compras:
    function btnCarrinhoShowHide(){
        const carrinho = document.getElementsByClassName("carrinho")[0]
        const classes = carrinho.classList
        if(classes.contains('displayNone')){
            carrinho.classList.remove('desaparece')
            carrinho.classList.remove('displayNone')
        }else{
            carrinho.classList.add('desaparece')
            function remover(){
                carrinho.classList.add('displayNone')
            }
            setTimeout(remover,300)
        }
    }
    
//função que adiciona os itens ao carrinho a partir de um evento:
    function addCarrinho(event){
        let checkElement = event.target
        const classes = checkElement.classList
        if(classes.contains('botao--adicionar')){
            const card = checkElement.parentNode
            const name = card.childNodes[2].innerText
            const price = card.childNodes[4].innerText
            const figure = card.firstChild
            const image = figure.firstChild
            const caption = figure.childNodes[1].innerText
            const src = image.src
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
            const infoCarrinho = document.getElementsByClassName('info--carrinho')[0]
            if(infoCarrinho.classList.contains('displayNone')){
                infoCarrinho.classList.add('aparece')
                infoCarrinho.classList.remove('displayNone')
            }
            preçoTotal += Number.parseInt(price.substring(2,5))
            total.innerText = 'R$'+preçoTotal+',00'
            const itensNumbers = carrinho.childNodes.length
            quantidade.innerText = (itensNumbers+1)
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
//função que remove os itens do carrinho a partir de um evento:  
    function removeCarrinho(event){
        const checkElement = event.target
        const elementClasses = checkElement.classList
        if(elementClasses.contains('remover')){
            const cardCarrinho = checkElement.parentNode
            const container = cardCarrinho.parentNode
            const preço = cardCarrinho.childNodes[2]
            container.classList.add('desaparece')
            function remover(){
                container.remove()
                preçoTotal -= Number.parseInt(preço.innerText.substring(2,5))
                total.innerText = 'R$'+preçoTotal+',00'
                const itensNumbers = carrinho.childNodes.length
                quantidade.innerText = itensNumbers
                if(itensNumbers===0){
                carrinho.innerHTML = vazio
                carrinho.classList.remove('novo--carrinho')
                carrinho.classList.add('carrinho--vazio')
                }
            }
            setTimeout(remover,300)
        }
    }

//função que filtra os itens conforme o tipo clicado no header:
    function filtraItens(event){
        const checkElement = event.target
        if(checkElement.classList.contains('filtra')){
            const filter = checkElement.innerText
            const itens = document.getElementsByClassName('item--box')
            for(let i = 0;i<itens.length;i++){
                const button = itens[i].childNodes[1]
                const match = button.innerText
                if(filter==='Todos'){
                    itens[i].classList.remove('displayNone')
                }
                else if(match!=filter){
                    itens[i].classList.add('displayNone')
                }else if(match===filter){
                    itens[i].classList.remove('displayNone')
                }
            }
        }
    }

//função que filtra os itens conforme o nome pesquisado:
    function buscaNome(event){
        const checkElement = event.target
        if(checkElement.classList.contains('btn--primary')){
            const search = document.getElementsByTagName('input')[0].value.toLowerCase()
            const itens = document.getElementsByClassName('item--box')
            for(let i =0;i<itens.length;i++){
                const name = itens[i].childNodes[2].innerText.toLowerCase()
                if(search===''){
                    itens[i].classList.remove('displayNone')
                }else if(name.includes(search)===false){
                    itens[i].classList.add('displayNone') 
                }else if(name.includes(search)===true){
                    itens[i].classList.remove('displayNone')
                }
            }
        }
    }

//*FUNCTIONS*

//chama a função que adiciona os itens de forma dinâmica à vitrine:
adicionar()


// EVENT LISTENERS

btnCarrinho.addEventListener('click',btnCarrinhoShowHide)

carrinho.addEventListener('click',removeCarrinho)

header.addEventListener('click',filtraItens)

aside.addEventListener('click',buscaNome)

// EVENT LISTENERS