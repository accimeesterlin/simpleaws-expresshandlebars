const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const expbs = require('express-handlebars');


const hbs = expbs.create({
    layoutsDir: 'views/mainLayout',
    defaultLayout: 'main',
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});


app.listen(PORT, () => {
    console.log('Server is starting on PORT ', PORT);
});