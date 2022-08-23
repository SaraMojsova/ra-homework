let activeUser;
const loginSection = document.getElementById("loginSection");
const contentSection = document.getElementById("contentSection");
const profileSection = document.getElementById("profileSection");
const profileButton = document.getElementById("profile");
const loginButton = document.getElementById("login");
const welcomeMessage = document.getElementById("welcome");
const welcomeMessageText = document.querySelector("#welcome span");
const albumsSection=document.getElementById("albumsSection")
const albumsButton=document.getElementById("albums")

const displayLoginSection = () => {
  contentSection.classList.add("d-none");
  profileSection.classList.add("d-none");
  loginSection.classList.remove("d-none");
};

const handleLogin = (e) => {
  e.preventDefault();
  const email = document.getElementById("exampleInputEmail1").value;
  activeUser = users.find((user) => user.email === email);
  if (!activeUser) return;
  const { id } = activeUser;
  fetchUserPosts(id);
  showProfileButton();
  displayHomeSection();
  displayAlbumsButton();
}

const displayHomeSection = () => {
  loginSection.classList.add("d-none");
  profileSection.classList.add("d-none");
  contentSection.classList.remove("d-none");
};

const displayProfileSection = () => {
  loginSection.classList.add("d-none");
  contentSection.classList.add("d-none");
  profileSection.classList.remove("d-none");
  // TODO: Implement user info section on profile view
  albumsSection.classList.add("d-none")
};
const displayAlbumsSection = () => {
  loginSection.classList.add("d-none");
  contentSection.classList.add("d-none");
  profileSection.classList.add("d-none");
  albumsSection.classList.remove("d-none")
};

const displayAlbumsButton = () => {
  // profileButton.classList.add("d-none");
  // loginButton.classList.add("d-none");
  // welcomeMessage.classList.add("d-none");
  // welcomeMessageText.append(`Welcome, ${activeUser.name}`);
  albumsButton.classList.remove("d-none")
};
const showProfileButton = () => {
  profileButton.classList.remove("d-none");
  loginButton.classList.add("d-none");
  welcomeMessage.classList.remove("d-none");
  welcomeMessageText.append(`Welcome, ${activeUser.name}`);
};

const appendElementsToHtml = (array, elementId) => {
  for (const item of array) {
    generateCardElement(item, elementId);
  }
};

const generateCardElement = ({ title, body, id }, elementId) => {
  // create the main element
  const container = document.createElement("div");
  container.classList.add("col-sm-12", "mb-3");
  // create the card element and append it to the main element
  const card = document.createElement("div");
  card.classList.add("card");
  container.append(card);
  // create the card body and append it to the card
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.append(cardBody);
  // card body content - creating elements and appending to the card body
  const h5 = document.createElement("h5");
  h5.classList.add("card-title");
  const p = document.createElement("p");
  p.classList.add("card-text");
  const span = document.createElement("span");
  span.classList.add("btn", "btn-dark");
  span.onclick = () => fetchPostComments(id, cardBody);
  span.append("Comments");
  h5.append(title);
  p.append(body);
  cardBody.append(h5);
  cardBody.append(p);
  cardBody.append(span);
  // Append the newly created element to the row element
  const parrent = document.getElementById(elementId);
  parrent.append(container);
};

const generateComments = (element, comments) => {
  const ul = document.createElement("ul");
  ul.classList.add("list-group", "mb-3");
  for (const { body } of comments) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.append(body);
    ul.append(li);
  }
  element.insertBefore(ul, element.children[2]);
};
// --------------
const appendAlbumsToHtml = (array, elementId) => {
  for (const item of array) {
    generateAlbums(item, elementId);
  }
};

const generateAlbums=(userId,elementId)=>{
  // const email = document.getElementById("exampleInputEmail1").value;
  // activeUser = users.find((user) => user.email === email);
  // if (!activeUser) return;
  // userId = activeUser;

  // const container = document.createElement("div");
  // container.classList.add("col-sm-12", "mb-3");
  // // create the card element and append it to the main element
  // const card = document.createElement("div");
  // card.classList.add("card");
  // container.append(card);
  // // create the card body and append it to the card
  // const cardBody = document.createElement("div");
  // cardBody.classList.add("card-body");
  // card.append(cardBody);
  // // card body content - creating elements and appending to the card body
  // const h5 = document.createElement("h5");
  // h5.classList.add("card-title");
  // const h4 = document.createElement("h4");
  // h4.classList.add("card-text");
  // const p = document.createElement("p");
  // p.classList.add("card-text");
 
  // h5.append(userId);
  // h4.append(id)
  // p.append(title);
  // cardBody.append(h5);
  // cardBody.append(h4);
  // cardBody.append(p);
  // // Append the newly created element to the row element
  // const parrent = document.getElementById(elementId);
  // parrent.append(container);


}