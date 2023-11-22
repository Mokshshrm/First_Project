const fortunes = require('./fortune');

exports.home = (req, res) => {
    res.render('home',{headingName:'Welcome to the Meadowlark'});
};

exports.about = (req, res) => {
    res.render('about', { fortunes: fortunes.getfortune() });
};

exports.notfound = (req, res) => {
    res.render('404');
};
exports.serverError = (err,req, res,next) => {
    res.render('405');
};