const app = require('./config/serve');

app.listen(app.get('port'), () => {
    console.log("aplicación en el puerto", app.get('port'));
    
});