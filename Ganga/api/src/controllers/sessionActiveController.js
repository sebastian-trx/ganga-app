async function sessionActive(req, res) {
  if (req.user)
    res.json({
      login: true,
      id: req.user.id,
      admin: req.user.admin,
      seller: req.user.seller,
      name: req.user.name,
      lastname: req.user.lastname,
      mail: req.user.mail,
      address: req.user.address,
      image: req.user.image
    });
}


module.exports = {
  sessionActive
};


