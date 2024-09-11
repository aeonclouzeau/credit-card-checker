// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

const validTest = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:

const validateCred = (arr) => {
  let sum = 0;
  let checkDigit = arr[arr.length - 1];
  console.log(`Card to check: ${arr}`);
  console.log(`Check digit: ${checkDigit}`);

  for (let i = arr.length - 1; i >= 0; i--) {
    let currValue = arr[i];
    // console.log(i);
    // console.log(`current value: ${currValue}`);

    if ((arr.length - 1 - i) % 2 === 1) {
      currValue *= 2;
      //   console.log(`current value doubled: ${currValue}`);
      if (currValue > 9) {
        currValue -= 9;
        // console.log(`current value -9: ${currValue}`);
      }
    }
    sum += currValue;
    // console.log(`sum: ${sum}`);
  }
  return sum % 10 === 0;
};

// console.log(validateCred(validTest));
// console.log(validateCred(invalid1));

const findInvalidCards = (cards) => {
  const invalid = [];

  for (let i = 0; i < cards.length; i++) {
    let currCard = cards[i];

    if (!validateCred(currCard)) {
      invalid.push(currCard);
    }
  }
  return invalid;
};

/*
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));
console.log(
  findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])
);
*/

/*
const invalidCards = findInvalidCards([
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
]);
*/

const idInvalidCardCompanies = (cards) => {
  const idsInvalidCardCompanies = [];

  for (let i = 0; i < cards.length; i++) {
    console.log(`Card to check: ${cards[i]}`);
    let firstDigit = cards[i][0];
    console.log(`First digit: ${firstDigit}`);

    switch (firstDigit) {
      case 3:
        if (!idsInvalidCardCompanies.includes("American Express")) {
          idsInvalidCardCompanies.push("American Express");
        }
        break;
      case 4:
        if (!idsInvalidCardCompanies.includes("Visa")) {
          idsInvalidCardCompanies.push("Visa");
        }
        break;
      case 5:
        if (!idsInvalidCardCompanies.includes("Master Card")) {
          idsInvalidCardCompanies.push("Master Card");
        }
        break;
      case 6:
        if (!idsInvalidCardCompanies.includes("Discover")) {
          idsInvalidCardCompanies.push("Discover");
        }
        break;
      default:
        continue;
    }
  }

  return idsInvalidCardCompanies;
};

// console.log(idInvalidCardCompanies(invalidCards));

const createCreditCard = (str) => {
  let newCard = [];

  for (let i = 0; i < str.length; i++) {
    // console.log(`current digit: ${str[i]}`);
    newCard.push(parseInt(str[i]));
  }

  return newCard;
};

// console.log(createCreditCard("4930205933869820"));
const newCard = createCreditCard("412290115789599560");
console.log(validateCred(newCard));

const makeValid = (card) => {
  let sum = 0;

  for (let i = card.length - 1; i >= 0; i--) {
    let currValue = card[i];
    // console.log(i);
    // console.log(`current value: ${currValue}`);

    if ((card.length - 1 - i) % 2 === 1) {
      currValue *= 2;
      //   console.log(`current value doubled: ${currValue}`);
      if (currValue > 9) {
        currValue -= 9;
        // console.log(`current value -9: ${currValue}`);
      }
    }
    sum += currValue;
    // console.log(`sum: ${sum}`);
  }

  const remainder = sum % 10;

  if (remainder !== 0) {
    let difference = 10 - remainder;

    card[card.length - 1] += difference;

    if (card[card.length - 1] > 9) {
      card[card.length - 1] -= 10;
    }

    return card;
  } else {
    return "The card is already valid.";
  }
};

const validCard = makeValid(newCard);
// console.log(validCard);
console.log(validateCred(validCard));
