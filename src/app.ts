import express from 'express';
import bodyParser from 'body-parser';
import todosRoute from './routes/todos';

const app = express();
app.use(bodyParser.json());

app.use('/todo', todosRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
