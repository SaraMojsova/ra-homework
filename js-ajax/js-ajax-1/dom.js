const cards=document.getElementById('cards')

const buildUI=(post)=>{
    const {body,id,title,userId}=post 
    const p=document.createElement('div')
    p.classList.add('newPost')
    p.innerHTML=` 
    <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">Post Id: ${id} User Id: ${userId}</div>
    <div class="card-body">
      <h5 class="card-title">Title: ${title}</h5>
      <p class="card-text">Body: ${body}</p>
      <button type="button" id="${id}" class="btn btn-light">Delete</button>
    </div>
  </div>
    `;

    
    cards.insertAdjacentElement('beforeend',p) 
}