const MongoClient = require('mongodb').MongoClient;
const pizzaObject1 = {
    crust_type: "Pan",
    crust_size: "Giant",
    extra_cheese: true,
    address: "1234 Rivers St, Boone NC",
    total_price: 10.00,
    toppings: [
        "Pepperoni",
        "Onion"
    ]
};

const pizzaObject2 = {
    crust_type: "Pan", crust_size: "Small", extra_cheese: false, address: "2345 Rivers St, Boone NC", total_price: 12.00,
    toppings: ["Pepperoni", "Onion", "Turkey"]
};

const pizzaObject3 = {
    crust_type: "Stuffed", crust_size: "Small", extra_cheese: false, address: "2345 Rivers St, Boone NC", total_price: 12.00,
    toppings: ["Pepperoni", "Mushrooms", "Hamburger", "Onions", "Turkey"]
};

const pizzaObject4 = {
    crust_type: "Thin", crust_size: "Giant", extra_cheese: false, address: "2345 Rivers St, Boone NC", total_price: 12.00,
    toppings: ["Pepperoni", "Onion", "Turkey"]
};

const pizzaObject5 = {
    crust_type: "Thin", crust_size: "Medium", extra_cheese: true, address:”2345 Rivers St, Boone NC”, total_price: 12.00,
    toppings: ["Pepperoni", "Mushrooms", "Hamburger", "Onions", "Turkey"]
};

async function main() {
    const uri = "mongodb://pizza_user:pizza_user@localhost:4002/pizza_shanty_db";
    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB
        await client.connect();
        console.log("Connected successfully to server");
        // Do the work here.
        //Insert pizzaObject1 into the pizzas collection on the pizza_shanty_db  
        //Then delete that and insert ALL the above pizzas.
        const db = client.db("pizza_shanty_db");
        const result = await db.collection("pizzas").insertOne(pizzaObject1);
        console.log('New listing created with the following id: ${result.insertedId}');

        const pizzas = [pizzaObject1, pizzaObject2, pizzaObject3, pizzaObject4, pizzaObject5];
        // const result = await db.collection("pizzas").insertMany(pizzas); // This is for part two.
        // console.log('New listing created with the following id: ${result.insertedIds[0]}'); // This is for part two.
        // You can use a for each loop to print all of the ids.

        //Part three.
        // 

        const cursor = await db.collection("pizzas").find({});
        const results = await cursor.toArray();
        if (results.length > 0) {
            console.log("All Pizzas");
            results.forEach((result, i) => {
                console.log('${i+1}. ${result.crust_size} ${result.crust_type} Pizza with ${result.toppings}');
            });
            console.log();
        }
        else {
            console.log("No pizzas found.");
        }
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
        console.log("Connection closed");
    }
}

main().catch(console.error);



