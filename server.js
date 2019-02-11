import express from 'express';
import bodyParser from 'body-parser';
import UserWS from './user/userWS';

const app = express();
app.use(bodyParser.json());

const userWS = new UserWS();

app.use(userWS.getRouter());

const port = process.env.PORT || 80801;
app.listen(port, () => {
    console.log('Listening on port ' + port);
});
