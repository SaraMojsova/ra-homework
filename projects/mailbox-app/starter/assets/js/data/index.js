// this file is responsible for out initial data


const message1={
    id:generateId(),
    senderEmail:'john@rhinoent.net',
    subject:'Email subject 1',
    message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    isRead:true,
    isBookmarked:false,
    date: new Date(), //native js function (konstruktor) za momentalniot datum

}
const message2={
    id:generateId(),
    senderEmail:'john@rhinoent.net',
    subject:'Email subject 2',
    message:'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words',
    isRead:true,
    isBookmarked:false,
    date: new Date(), //native js function (konstruktor) za momentalniot datum

}
const message3={
    id:generateId(),
    senderEmail:'john@rhinoent.net',
    subject:'Email subject 3',
    message:' It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. ',
    isRead:true,
    isBookmarked:false,
    date: new Date(), //native js function (konstruktor) za momentalniot datum

}

//objekti
const user1={
    id:generateId(),
    email:'aleksandar@rhinoent.net',
    fullName:'Sara Mojsova',
    messages:[message1],
    password:'Test1!',
};

const user2={
    id:generateId(),
    email:'john@rhinoent.net',
    fullName:'John Doe',
    messages:[message2,message3],
    password:'Test1!',
};

// console.log('USERS CREATED',user1,user2)

const seedData=()=>{
    return[
        user1,
        user2,
    ]
}
// console.log(seedData())

