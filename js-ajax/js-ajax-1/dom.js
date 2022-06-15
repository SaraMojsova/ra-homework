const cards=document.getElementById('cards')
const p=document.createElement('div') //**** this one

const buildUI=(post)=>{
    const {body,id,title,userId}=post 
    // const p=`
    //with this one ***** ->
    p.innerHTML=` 
    <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">Id: ${id} UserId: ${userId}</div>
    <div class="card-body">
      <h5 class="card-title">Title:${title}</h5>
      <p class="card-text">Body:${body}</p>
      <button type="button" id="${id}" class="btn btn-light">Delete</button>
    </div>
  </div>
    `;
    
    cards.insertAdjacentElement('afterend',p) 
    // cards.append(p)
}