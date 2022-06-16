// const request = new XMLHttpRequest();
// request.open('GET','https://jsonplaceholder.typicode.com/posts')
// request.send()
// request.responseType='json'

// request.addEventListener('load',()=>{
//     console.log(request.response)
// })

const sendHttpRequest=(method,url,data)=>{
    return fetch(url, {
        method,
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      }).then((response) => {
        console.log(response);
        if (response.status >= 200 & response.status < 300) {
          return response.json()
        } else {
          return response.json().then((data) => {
            console.log('Error', data)
            throw new Error(`Api failed. Status code: ${response.status}, reason: ${JSON.stringify(data)}`);
          })
        }
      }, (err) => {
        console.log(err)
        throw 'Network failed'
      })
    }

const fetchPosts=()=>{
    sendHttpRequest('GET','https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
        console.log(response)
        const posts=response
        for(const post of posts){
            buildUI(post)
        }
    })
    .catch((error)=>{
        console.log(error.message)
    })
}
fetchPosts()

const deletePosts=(postId)=>{
  sendHttpRequest('DELETE',`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then((success)=> console.log('Deleted',success))
  .catch((error)=> console.log('Error',error))
}

cards.addEventListener('click',(event)=>{
  if(event.target.tagName==='BUTTON'&& event.target.getAttribute('id')){
    const postId=event.target.getAttribute('id')
    // const deletePost=document.querySelector('div')
    // deletePost.style.display='none'
    deletePosts(postId)
  }
})

const createPost=(id,userId,title,body)=>{
  const request={
    id,
    userId,
    title,
    body
  }
  return sendHttpRequest('POST','https://jsonplaceholder.typicode.com/posts',request)
}

const form=document.querySelector('form')
form.addEventListener('submit',(event)=>{
  event.preventDefault();
  const id=event.target.elements.id.value;
  const userId=event.target.elements.userId.value;
  const title=event.target.elements.title.value;
  const body=event.target.elements.body.value;
  const spinnerHtml = `<span class="spinner-border spinner-border-sm hide" role="status" aria-hidden="true"></span>`;
  const submitBtn=event.submitter;
  // const submitBtn=document.querySelector('submit')

  if(!id && !userId && !title && !body){
    return;
  }

  submitBtn.innerHTML = spinnerHtml;

  createPost(id,userId,title,body)
    .then((success)=>{
      event.target.elements.id.value='';
      event.target.elements.userId.value='';
      event.target.elements.title.value='';
      event.target.elements.body.value='';
      console.log(success)
    }).catch((error) => {
      console.log(error);
    })
    .finally(() => {
      submitBtn.innerHTML = 'Submit';
    });

})