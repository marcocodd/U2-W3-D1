class User {
 constructor(name, surName, age, location) {
  this.name = name;
  this.age = age;
  this.surName = surName;
  this.location = location;
 }
 static compareAge (user1, user2) {
    if (user1.age > user2.age) {
      return user1.name +' è più vecchio di ' + user2.name;
    } else if (user1.age < user2.age) {
        return user1.name +' è più giovane di ' +user2.name;
    } else {
      return user1.name +' e '+ user2.name + ' hanno la stessa età';
    }
}
}

const user1 = new User('Marco', 'Brunetti', 32,'Venosa' )
const user2 = new User('Mario', 'Rossi', 32, 'Bari')

console.log(User.compareAge(user1, user2))