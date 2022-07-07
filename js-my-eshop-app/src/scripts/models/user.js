export class User {
  firstName;
  lastName;
  email;
  gender;
  username;
  image;
  id;

  constructor(
    firstName,
    lastName,
    email,
    gender,
    username,
    image,
    id
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.gender = gender;
    this.username = username;
    this.image = image;
    this.id = id;
  }
}
