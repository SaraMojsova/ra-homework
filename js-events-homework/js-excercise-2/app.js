const quote1={
    title:'John Johnson',
    message:'First, solve the problem. Then, write the code.'
}
const quote2={
    title:'Cory House',
    message:'Code is like humor. When you have to explain it, it\'s bad.'
}
const quote3={
    title:'Ralph Johnson',
    message:'Before software can be reusable it first has to be usable'
}
const quote4={
    title:'Antoine de Saint-Exupery',
    message:'Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.'
}
const quote5={
    title:'Chris Pine',
    message:'Programming isn\'t about what you know it\'s about what you can figure out.'
}

const quotes=[quote1,quote2,quote3,quote4,quote5]

const createQuote =(quote)=>{
            const newCard= document.createElement('div')
            newCard.classList.add('card','m-3','newCard')
            const lastCard=document.getElementById('lastCard')
            lastCard.insertAdjacentElement('afterend',newCard)

            const newCardTitle=document.createElement('div')
            newCardTitle.classList.add('card-header')
            newCard.append(newCardTitle)
            newCardTitle.innerHTML=quote.title

            const newCardQuote=document.createElement('div')
            newCardQuote.classList.add('card-body')
            newCard.append(newCardQuote)
            newCardQuote.innerHTML=quote.message            
}

const showMessage=()=>{
    const p = document.createElement('p')
    p.innerHTML='No more data'
    p.style.textAlign='center'
    const footer=document.querySelector('#footer')
    console.log(footer)
    footer.insertAdjacentElement('beforebegin',p)


}


let counter=0;
const scrollEventHandler =(event)=>{
    console.log(event)
    const scrollY=window.scrollY
    console.log('Scroll Y',scrollY) // on the bottom 1268
    const innerHeight=window.innerHeight
    console.log('Inner height',innerHeight) //657
    const bodyOffsetHeight = document.body.offsetHeight
    console.log('Document body offset height',bodyOffsetHeight) //1925
    console.log('Window inner height + scrollY',innerHeight+scrollY) //1925
    
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        const quote=quotes[counter]
        counter++
        console.log("bottom");
        createQuote(quote)
        if(counter>quotes.length-1){
            window.removeEventListener('scroll',scrollEventHandler)
            showMessage();
        }   
    }
}

window.addEventListener('scroll',scrollEventHandler)
   