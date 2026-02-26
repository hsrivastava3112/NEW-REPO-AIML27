//server.js
import express from 'express';
const app = express();
const PORT= 3000;
//to define the sample data
let books=[
    {
        id:1,
        title: 'The great gatsby',
        author: 'F. Scott Fitzgerald'
    },
    {
        id:2,
        title: 'to Kill a mockngbird',
        author: 'Harper lee'
    },
];
app.get('/api/books',
    (req, res)=> {
        res.json(books);
    });
    app.get('git ',
        (req, res)=> {
            const id = praseInt(res.params.id);
            const books=books.find(books => books.id === id);
            if(book){
                res.json(book);
            }
            else{
                res.status(404).json({message: 'books not found'});
            }
        });
        app.listen(PORT,
            () => {
                console.log(`Server is running on port ${PORT}`);
            });