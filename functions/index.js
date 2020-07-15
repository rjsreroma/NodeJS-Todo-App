const functions = require('firebase-functions');
const app = require('express')();

const auth = require('./util/auth');

const {
    getTodos,
    postTodo,
    deleteTodo,
    editTodo
} = require('./APIs/todos');

const {
    loginUser,
    signUpUser,
    uploadProfilePic,
    getUserDetails,
    updateUserDetails
} = require('./APIs/users');

app.get('/todos', auth, getTodos);
app.post('/todo', auth, postTodo);
app.delete('/todo/:todoId', auth, deleteTodo);
app.put('/todo/:todoId', auth, editTodo);

app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.post('/user/image', auth, uploadProfilePic);
app.get('/user', auth, getUserDetails);
app.post('/user', auth, updateUserDetails);


exports.api = functions.https.onRequest(app);