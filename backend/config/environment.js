module.exports = function(app, express, bodyparser){
    
    app.use(bodyparser.urlencoded({
        extended: false
    }));

    app.use(bodyparser.json());
    
    
    app.set('frontendUrl', 'http://localhost:9000');
    app.set('backendUrl', 'http://localhost:5000');

    app.set('port', 5000);
};
