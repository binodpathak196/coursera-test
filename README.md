// Array of names
const names = ['John', 'Jessica', 'Jake', 'Sarah', 'Jack'];

// Loop over the names array
for (let i = 0; i < names.length; i++) {
  // Get the current name
  const name = names[i];

  // Check the starting letter of the name
  if (name.charAt(0).toLowerCase() === 'j') {
    console.log(`Goodbye ${name}`);
  } else {
    console.log(`Hello ${name}`);
  }
}

