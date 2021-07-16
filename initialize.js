const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: "0540791f",
  apiSecret: "U3DM4TS4rKoZt9Uf"
});

vonage.numberInsight.get({ level: 'advancedSync', number: "2348100125511" }, (error, result) => {
  if (error) {
    console.error(error);
  }
  else {
    console.log(result);
  }
});

const getNumber = Vonage.number.forEach(user => {
  const { country_code, country_name } = user;
  ` Country Code ${country_code} Name ${country_name}`
});
getNumber()

const displayNumber = Vonage.number.forEach(x => {
  const {status, status_message} = x;
  console.log(` Status ${status} MessAge ${status_message} `);
});
displayNumber();

