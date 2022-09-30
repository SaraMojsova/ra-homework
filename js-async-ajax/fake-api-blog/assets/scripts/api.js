let users = [];
let allPosts = [];
let userPosts = [];
let comments = [];
let albums=[];

const getRequest = async (path) => {
  const request = await fetch(`https://jsonplaceholder.typicode.com${path}`);
  const fetchedData = await request.json();
  return fetchedData;
}

const fetchUsers = async () => {
  const fetchedUsers = await getRequest('/users')
  console.log(fetchedUsers);
  users = [...fetchedUsers];
};

fetchUsers();

const fetchPosts = async () => {
  const fetchedPosts = await getRequest('/posts');
  console.log(fetchedPosts);
  allPosts = [...fetchedPosts];
  appendElementsToHtml(allPosts, "row-container");
};

fetchPosts();

const fetchUserPosts = async (userId) => {
  const fetchedPosts = await getRequest(`/users/${userId}/posts`);
  console.log(fetchedPosts);
  userPosts = [...fetchedPosts];
  appendElementsToHtml(userPosts, "row-profile-container");
};

const fetchPostComments = async (postId, element) => {
  const fetchedComments = await getRequest(`/posts/${postId}/comments`);
  console.log(fetchedComments);
  comments = [...fetchedComments];
  generateComments(element, comments);
};

fetchUserAlbums= async(userId)=>{
  const fetchedAlbums= await getRequest(`/users/${userId}/albums`)
  console.log(fetchedAlbums);
  albums=[...fetchedAlbums];
  appendAlbumsToHtml(albums,"row-profile-container")
}
fetchUserAlbums(2)