/* Load the HTTP library */
import * as http from 'http';
import express from 'express';
import { create } from 'express-handlebars';
import path from 'path';

const __dirname = path.resolve('.');
/* Create an HTTP server to handle responses */

const app = express();
const server = http.createServer(app);
const hbs = create({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: "src/views/layouts"
});


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', __dirname+'/src/views');

app.use(express.static(__dirname+ '/src'));

app.get('/', (req, res) => {
  res.render('home');
});

server.listen(8888);
