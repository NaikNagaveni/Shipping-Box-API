const express = require('express');
const { send } = require('process');
const app = express();   //app is a reference
app.use(express.json())

const items= [];


app.post('/items', (req, res) => {
    try {
        const item = req.body;
        items.push(item);
        res.send(items);

    } catch (error) {
        res.send(error);
    }
})

app.get('/items', (req, res) => {
    try {
        res.send(items);
    }
    catch (error) {
        res.send(error)
    }
})

//read Shipping box record with id
app.get('/items/:id', (req, res) => {
    try {
        const item = items.find((item) =>
            item.id == req.params.id)
        res.send(item);

    }
    catch (error) {
        res.send(error);
    }
})
//update operation using put that updates the value
app.put('/items/:id', (req, res) => {
    try {
        const id = req.params.id;
        const index = items.findIndex(item => item.id == id);
        items[index] = req.body;
        res.send(items);
    }
    catch (error) {
        res.send(error)
    }

    //delete a item
    app.delete('/items/:id', (req, res) => {
        try {
            const index = items.findIndex((item) =>
                item.id == req.params.id)
            items.splice(index, 1)    //splice removes data from array
            res.send("deleted")

        }
        catch (error) {
            res.send(error)
        }

    })


}
)
app.listen(3000, () => {
    console.log("Server is running on port 3000");  //refference
})