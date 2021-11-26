async function sessionActive(req, res) {
  if(req.user)res.json({login:true})
  else res.json({login:false})
}


module.exports = {
  sessionActive
};


