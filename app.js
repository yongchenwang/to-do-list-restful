let express = require('express');
let mustacheExpress = require('mustache-express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let routes = require('./routes/routes');
let path = require('path');

// to avoid deprecation warnings
mongoose.Promise = global.Promise;

// connect to MongoDB
mongoose.connect('mongodb://localhost:27017/to_do_list', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function () {
    console.log('Connected to MongoDB');
});

let app = new express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// to use mustache-expres template engine
let mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null;
app.engine('mustache', mustacheExpressInstance);
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use('/', routes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(8000, function () {
    console.log('Listening on port 8000');
});