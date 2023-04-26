//your JS code here. If required.
// create student object with a name property
const student = {
  name: "John Doe"
};

// add getKeys() method to Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
}

// test getKeys() method on student object
console.log(student.getKeys()); // output: ["name"]