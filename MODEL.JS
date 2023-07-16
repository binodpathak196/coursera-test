// Array of names
var names = ["John", "Jane", "Jack", "Jessica"];

// Loop over the names
for (var i = 0; i < names.length; i++) {
  var name = names[i];

  // Check if the name starts with 'j' or 'J'
  if (name.charAt(0).toLowerCase() === 'j') {
    console.log("Goodbye " + name);
  } else {
    console.log("Hello " + name);
  }
}
