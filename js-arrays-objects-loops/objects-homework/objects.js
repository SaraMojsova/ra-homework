//1.
const userProfile = {
    userName: 'Sara',
    lastName: 'Mojsova',
    years: 23,
    idNumber: 368,
    hasDrivingLicense: true,
    emails: ['saramojs@gmail.com', 'sara-mojsova@live.com', 'sara-mojsova@hotmail.com'],

    //3.
    printData: function () {
        console.log(`This user\'s name is ${this.userName} and she is ${this.years} years old. She has a driving license and she is adult.`);
    }
};
console.log(userProfile.printData());
//2.
const printEmails = userProfile.emails;
console.log(printEmails);
