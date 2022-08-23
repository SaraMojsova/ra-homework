console.log('CALL METHOD IMPLEMENTATION----------------------')
const user={
    firstName:'Aleksandar',
    lastName:'Todorovski',
    age:28,
    print(){
        console.log(`First name:${this.firstName} \nLast name:${this.lastName}`)
    },
    getUserData(field,fallbackMsg){
        field=this?.['firstName']
        let fieldData= field??fallbackMsg
        console.log('Get first name:',fieldData)

        field=this?.['isLoggedIn']
        fieldData= field??fallbackMsg
        console.log('Get isLoggedIn:',fieldData)
    }
    
}
user.print()
user.getUserData('firstName',`${user.field??'isLoggedIn'} field doesn\'t exist on user1 `)


const user2={
    firstName:'John',
    lastName:'Doe',
    age:25
}

console.log('---------------------------------')
const print=user.print;
const getUserData=user.getUserData

print.call(user2)
getUserData.call(user2, user2.field,`${user2.field??'isLoggedIn'} field doesn\'t exist on user2 `)
console.log('---------------------------------')

console.log('APPLY METHOD IMPLEMENTATION----------------------')
const applyArray=[this.field, `${this.field??'isLoggedIn'} field doesn\'t exist on user1`] // ${this?'user1':'user2'} not sure how to handle if it prints user1 or user2
const applyArray2=[this.field, `${this.field??'isLoggedIn'} field doesn\'t exist on user2`]
print.apply(user)
getUserData.apply(user,applyArray)
console.log('---------------------------------')
print.apply(user2)
getUserData.apply(user2,applyArray2)

console.log('---------------------------------')
console.log('BIND METHOD IMPLEMENTATION----------------------')

const printB=user.print;
const getUserDataB=user.getUserData

const printBind1=printB.bind(user)
const printBind2=printB.bind(user2)
const getUserDataBind1=getUserDataB.bind(user)
const getUserDataBind2=getUserDataB.bind(user2)

printBind1();
printBind2()
getUserDataBind1(this.firstName, `${this.firstName??'isLoggedIn'} field doesn\'t exist on user1`)
getUserDataBind2(this.firstName, `${this.firstName??'isLoggedIn'} field doesn\'t exist on user2`)

