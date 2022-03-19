function magicTemplate(strings, ...rest) {
  let sentence = "";
  for (let i = 0; i < strings.length; i++) {
    sentence += strings[i] + (rest[i] ? rest[i] : "");
  }
  console.log(sentence);
}

let firstName = "James";
let lastName = "Bond";

const update = (names) => {
  firstName = names.firstName ? names.firstName : firstName;
  lastName = names.lastName ? names.lastName : lastName;
  magicTemplate`My name is ${lastName}. ${firstName} ${lastName}.`;
};

update({ firstName: "George" });
update({ lastName: "Weasley" });
update({ firstName: "Ron" });
