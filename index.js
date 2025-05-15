// function takes a string response that is seperated by comma creates it into a list and with an object count the number of times a string is iterated as its value.
function parseFroyoResponse(response) {
  const responseList = response.split(",");
  const froyoObj = {};
  for (let i = 0; i < responseList.length; i++) {
    if (froyoObj[responseList[i]]) {
      froyoObj[responseList[i]]++;
    } else {
      froyoObj[responseList[i]] = 1;
    }
  }
  return froyoObj;
}

// takes in an object of froyo flavors and sends an alert with the froyo object in string format that is readable
function sendFroyoResultAlert(froyoFlavorsObj) {
  let userFroyoFlavorsToString = "";
  for (const key in froyoFlavorsObj) {
    userFroyoFlavorsToString += `${key}: ${froyoFlavorsObj[key]} \n`;
  }

  alert(userFroyoFlavorsToString);
}

const userFroyoResponse = prompt(
  "Please enter a comma-seperated list of froyo flavors",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
const userFroyoFlavors = parseFroyoResponse(userFroyoResponse);
console.table(userFroyoFlavors); // display the result of the froyo response in table format
sendFroyoResultAlert(userFroyoFlavors);
