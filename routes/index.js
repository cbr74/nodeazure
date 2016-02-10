
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express WE V2.2 from gitHub' });
};
