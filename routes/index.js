
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express West Europe V2 from GitHub' });
};