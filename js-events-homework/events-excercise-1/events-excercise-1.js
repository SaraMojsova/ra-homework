const add = document.getElementById('add')
const addText= document.getElementById('addText')
const reset = document.getElementById('reset')
const off= document.getElementById('off')
const elements =document.getElementById('elements')


//1.
const addHandler =()=>{
    
    const p=document.createElement('p')
    console.log('P created')
    elements.append(p)
    const allParagraphs=document.querySelectorAll('p')
    if(allParagraphs.length>50){
        return;
    }
    
    for(let i=0; i<allParagraphs.length;i++){
        p.innerHTML=(`Paragraph ${i+1}`)
    
    if((i+1)%2===1){
        p.style.backgroundColor='green'
    }
    else{
        p.style.backgroundColor='red'
    }
    }
}
    
add.addEventListener('click', addHandler)

const addTextHandler = () => {
    // const p=document.getElementsByTagName('p')
    // const parapraphTrue= document.body.contains('p')
    // if(parapraphTrue){
    // p.prepend('BOOM').style.color='white'
    // p.append('WOW').style.color='white'
    // }
    // else{
    //     alert('There is no paragraph created')
    // }
    const allParagraphs=document.querySelectorAll('p')

    if(allParagraphs.length>0){
        const lastParagraph=allParagraphs[allParagraphs.length-1];
        // lastParagraph.prepend('BOOM').style.color='white'
        // lastParagraph.append('WOW').style.color='white'
        const boom=document.createElement('p')
        const wow=document.createElement('p')
        boom.innerText='BOOM'
        wow.innerText='WOW'
        boom.style.color='white'
        wow.style.color='white'
        lastParagraph.prepend(boom)
        lastParagraph.append(wow)

    }
    else{
        alert('Please add a paragraph first')
    }
}


addText.addEventListener('click', addTextHandler)
// {once:true} prevents from creating the 'boom' and 'wow' several times on same paragraph, but doesn't allow recreating them on the next p

const resetElementsHandler=()=>{
    // const p =document.getElementsByTagName('p')
    // elements.remove(p) 
    elements.innerHTML = '';


}
reset.addEventListener('click',resetElementsHandler)

const toggleBtnHandler =()=>{
    if(elements.style.display!=='none'){
    elements.style.display = 'none'
    off.innerHTML='Turn on'
    off.style.backgroundColor='green'
    off.removeEventListener('click', addHandler,addTextHandler,resetElementsHandler) 

}   else{
    elements.style.display = 'block'
    off.innerHTML='Turn off'
    off.style.backgroundColor='red'
    off.addEventListener('click', addHandler,addTextHandler,resetElementsHandler)

}
}

off.addEventListener('click',toggleBtnHandler)

