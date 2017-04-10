module.exports = function(app){
    var dinnerIdeas = require('../controllers/dinnerIdeas');
    app.get('/dinnerIdeas', dinnerIdeas.get);
    app.post('/dinnerIdeas', dinnerIdeas.post);
    app.get('/dinnerIdeas/:id', dinnerIdeas.getById);
    app.delete('/dinnerIdeas/:id', dinnerIdeas.delete);
}