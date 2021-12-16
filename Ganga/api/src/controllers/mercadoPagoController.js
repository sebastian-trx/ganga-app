const mercadopago = require("mercadopago"); // npm install mercadopago
// Agrega credenciales de mp
mercadopago.configure({
  access_token:
    "APP_USR-3165543253229123-102923-7e846c48429d8c5d99d4da622ae38cff-1009370863", // token de la persona que recibe los pagos
});

async function mercadoPagoPost(req, res) {
  const compras = req.body;
  // console.log(compras);

  let preference = {
    items: compras,

    //    back_urls: {
    //    	success: "http://localhost:3000/successMp",
    //    	failure: "http://localhost:3000/failMp",
    // //    	pending: "http://www.pending.com"
    back_urls: {
      success: "https://ganga-app1.vercel.app/successMp",
      failure: "https://ganga-app1.vercel.app/failMp",
      //    	pending: "http://www.pending.com"
    }

  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      let arr = [{ url: `${response.body.init_point}` }];
      res.send(arr);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// async function mercadoPagoPost(req, res) {
//   const compras = req.body;
//   console.log(compras);
//   res.send(`${compras}`)
// }

module.exports = {
  mercadoPagoPost,
};