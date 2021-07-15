const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: "0540791f",
  apiSecret: "U3DM4TS4rKoZt9Uf"
});

vonage.numberInsight.get({level: 'advancedSync', number: "2348100125511"}, (error, result) => {
    if(error) {
      console.error(error);
    }
    else {
      console.log(result);
    }
  });