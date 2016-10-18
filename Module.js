var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
function multiply(x, y) {
  return x * y;
};
class Person {

}
export {
  firstName, 
  lastName,
  year,
  multiply as mul,
  Person
};
setTimeout(() => year = 2016, 5000);