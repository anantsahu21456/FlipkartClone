const express = require('express')
const connectToMongodb = require('./db/Connection');
const formdataRoutes = require('./Routes/Formdata.routes');
// const mobileroutes = require('./Routes/mobiledata.routes');
const cors = require('cors');

require('dotenv').config()

let app = express();
app.use(cors());
app.use(express.json())
app.use('/api/formdata', formdataRoutes)
// app.use('/api/mobile',mobileroutes)

app.get('/api/mobile', (req, res) => {
  const mobile = [
    {
      "brand": "Samsung",
      "model": "Galaxy A12",
      "color": "Black",
      "display_size": "6.5 inches",
      "RAM": "4 GB",
      "storage": "64 GB",
      "main_camera_resolution": "48 MP",
      "front_camera_resolution": "8 MP",
      "battery_capacity": "5000 mAh",
      "price": "$199.99"
    },
    {
      "brand": "Apple",
      "model": "iPhone SE (2020)",
      "color": "White",
      "display_size": "4.7 inches",
      "RAM": "3 GB",
      "storage": "64 GB",
      "main_camera_resolution": "12 MP",
      "front_camera_resolution": "7 MP",
      "battery_capacity": "1821 mAh",
      "price": "$399.00"
    },
    {
      "brand": "OnePlus",
      "model": "Nord N200",
      "color": "Quantum Blue",
      "display_size": "6.49 inches",
      "RAM": "4 GB",
      "storage": "64 GB",
      "main_camera_resolution": "13 MP",
      "front_camera_resolution": "16 MP",
      "battery_capacity": "5000 mAh",
      "price": "$239.99"
    },
    {
      "brand": "Google",
      "model": "Pixel 5a 5G",
      "color": "Mostly Black",
      "display_size": "6.34 inches",
      "RAM": "6 GB",
      "storage": "128 GB",
      "main_camera_resolution": "12.2 MP",
      "front_camera_resolution": "8 MP",
      "battery_capacity": "4680 mAh",
      "price": "$449.00"
    },
    {
      "brand": "Motorola",
      "model": "Moto G Power (2021)",
      "color": "Flash Gray",
      "display_size": "6.6 inches",
      "RAM": "4 GB",
      "storage": "64 GB",
      "main_camera_resolution": "48 MP",
      "front_camera_resolution": "8 MP",
      "battery_capacity": "5000 mAh",
      "price": "$249.99"
    },
    {
      "brand": "Xiaomi",
      "model": "POCO X3 Pro",
      "color": "Phantom Black",
      "display_size": "6.67 inches",
      "RAM": "6 GB",
      "storage": "128 GB",
      "main_camera_resolution": "48 MP",
      "front_camera_resolution": "20 MP",
      "battery_capacity": "5160 mAh",
      "price": "$249.99"
    },

    {
      "brand": "Sony",
      "model": "Xperia 5 III",
      "color": "Black",
      "display_size": "6.1 inches",
      "RAM": "8 GB",
      "storage": "128 GB",
      "main_camera_resolution": "12 MP",
      "front_camera_resolution": "8 MP",
      "battery_capacity": "4500 mAh",
      "price": "$999.99"
    },
    {
      "brand": "Huawei",
      "model": "P40 Pro",
      "color": "Silver Frost",
      "display_size": "6.58 inches",
      "RAM": "8 GB",
      "storage": "256 GB",
      "main_camera_resolution": "50 MP",
      "front_camera_resolution": "32 MP",
      "battery_capacity": "4200 mAh",
      "price": "$899.00"
    },
    {
      "brand": "Realme",
      "model": "GT Master Edition",
      "color": "Lunar White",
      "display_size": "6.43 inches",
      "RAM": "8 GB",
      "storage": "128 GB",
      "main_camera_resolution": "64 MP",
      "front_camera_resolution": "32 MP",
      "battery_capacity": "4300 mAh",
      "price": "$449.99"
    },
    {
      "brand": "Asus",
      "model": "ZenFone 8",
      "color": "Obsidian Black",
      "display_size": "5.9 inches",
      "RAM": "8 GB",
      "storage": "256 GB",
      "main_camera_resolution": "64 MP",
      "front_camera_resolution": "12 MP",
      "battery_capacity": "4000 mAh",
      "price": "$699.99"
    },
    {
      "brand": "Lenovo",
      "model": "Legion Phone Duel 2",
      "color": "Titanium White",
      "display_size": "6.92 inches",
      "RAM": "12 GB",
      "storage": "256 GB",
      "main_camera_resolution": "64 MP",
      "front_camera_resolution": "16 MP",
      "battery_capacity": "5500 mAh",
      "price": "$999.99"
    },
    {
      "brand": "BlackBerry",
      "model": "KEY2",
      "color": "Black",
      "display_size": "4.5 inches",
      "RAM": "6 GB",
      "storage": "64 GB",
      "main_camera_resolution": "12 MP",
      "front_camera_resolution": "8 MP",
      "battery_capacity": "3500 mAh",
      "price": "$449.99"
    },
    {
      "brand": "LG",
      "model": "Wing",
      "color": "Aurora Gray",
      "display_size": "6.8 inches",
      "RAM": "8 GB",
      "storage": "128 GB",
      "main_camera_resolution": "64 MP",
      "front_camera_resolution": "32 MP",
      "battery_capacity": "4000 mAh",
      "price": "$999.99"
    },
    {
      "brand": "Nokia",
      "model": "8 V 5G UW",
      "color": "Meteor Gray",
      "display_size": "6.81 inches",
      "RAM": "6 GB",
      "storage": "64 GB",
      "main_camera_resolution": "64 MP",
      "front_camera_resolution": "24 MP",
      "battery_capacity": "4500 mAh",
      "price": "$699.00"
    },
   


  ]    // res.send(mobile)
  res.json(mobile);

})

app.get('/api/grocery', (req, res) => {
  const grocery = [
    {
      "name": "Bananas",
      "description": "Fresh yellow bananas, great for snacking or adding to smoothies.",
      "category": "Fruits",
      "quantity": 2,
      "unit": "lbs",
      "price_per_unit": 0.49,
      "currency": "USD"
    },
    {
      "name": "Spinach",
      "description": "Nutrient-rich spinach leaves, ideal for salads or sautéing.",
      "category": "Vegetables",
      "quantity": 1,
      "unit": "bunch",
      "price_per_unit": 1.29,
      "currency": "USD"
    },
    {
      "name": "Olive Oil",
      "description": "Extra virgin olive oil, perfect for cooking and drizzling over salads.",
      "category": "Pantry",
      "quantity": 1,
      "unit": "bottle",
      "price_per_unit": 7.49,
      "currency": "USD"
    },
    {
      "name": "Potatoes",
      "description": "Versatile potatoes, great for roasting, mashing, or making fries.",
      "category": "Vegetables",
      "quantity": 5,
      "unit": "lbs",
      "price_per_unit": 2.99,
      "currency": "USD"
    },
    {
      "name": "Bread",
      "description": "Freshly baked bread, ideal for making sandwiches or toasting.",
      "category": "Bakery",
      "quantity": 2,
      "unit": "loaves",
      "price_per_unit": 3.49,
      "currency": "USD"
    },
    {
      "name": "Ground Beef",
      "description": "Lean ground beef, perfect for making burgers, tacos, or meatballs.",
      "category": "Meat",
      "quantity": 3,
      "unit": "lbs",
      "price_per_unit": 5.99,
      "currency": "USD"
    },
    {
      "name": "Oranges",
      "description": "Juicy oranges, rich in vitamin C, great for fresh-squeezed juice or snacking.",
      "category": "Fruits",
      "quantity": 3,
      "unit": "lbs",
      "price_per_unit": 1.99,
      "currency": "USD"
    },
    {
      "name": "Pasta",
      "description": "Versatile pasta, ideal for creating delicious Italian dishes.",
      "category": "Pantry",
      "quantity": 2,
      "unit": "lbs",
      "price_per_unit": 1.79,
      "currency": "USD"
    },
  ]
  res.json(grocery)
})

app.get('/api/electronics', (req, res) => {
  const electronics = [
    {
      "name": "Laptop",
      "description": "Powerful laptop for work and entertainment.",
      "category": "Computers",
      "quantity": 1,
      "unit": "unit",
      "price_per_unit": 1299.99,
      "currency": "USD"
    },
    {
      "name": "Smart TV",
      "description": "Ultra HD smart TV with built-in streaming services.",
      "category": "Televisions",
      "quantity": 1,
      "unit": "unit",
      "price_per_unit": 1499.99,
      "currency": "USD"
    },
    {
      "name": "Wireless Headphones",
      "description": "Premium wireless headphones with noise-cancellation.",
      "category": "Audio",
      "quantity": 1,
      "unit": "pair",
      "price_per_unit": 299.99,
      "currency": "USD"
    },
    {
      "name": "Tablet",
      "description": "Versatile tablet for productivity and entertainment.",
      "category": "Computers",
      "quantity": 1,
      "unit": "unit",
      "price_per_unit": 499.99,
      "currency": "USD"
    },
    {
      "name": "Digital Camera",
      "description": "Compact digital camera for capturing moments on the go.",
      "category": "Photography",
      "quantity": 1,
      "unit": "unit",
      "price_per_unit": 299.99,
      "currency": "USD"
    },
    {
      "name": "Smart Watch",
      "description": "Feature-packed smartwatch for fitness tracking and notifications.",
      "category": "Wearable Technology",
      "quantity": 1,
      "unit": "unit",
      "price_per_unit": 249.99,
      "currency": "USD"
    },
    {
      "name": "Desktop Computer",
      "description": "High-performance desktop computer for demanding tasks.",
      "category": "Computers",
      "quantity": 1,
      "unit": "unit",
      "price_per_unit": 1599.99,
      "currency": "USD"
    },
    {
      "name": "Bluetooth Speaker",
      "description": "Portable Bluetooth speaker for wireless audio streaming.",
      "category": "Audio",
      "quantity": 1,
      "unit": "unit",
      "price_per_unit": 69.99,
      "currency": "USD"
    }


  ]
  res.json(electronics)
})

app.get('/api/fasion', (req, res) => {
  const fasion = [
    {
      "name": "T-Shirt",
      "description": "Casual cotton t-shirt with a classic fit.",
      "category": "Tops",
      "quantity": 1,
      "unit": "unit",
      "price_per_unit": 19.99,
      "currency": "USD"
    },
    {
      "name": "Jeans",
      "description": "Comfortable denim jeans with a straight leg fit.",
      "category": "Bottoms",
      "quantity": 1,
      "unit": "pair",
      "price_per_unit": 39.99,
      "currency": "USD"
    },
    {
      "name": "Sneakers",
      "description": "Stylish sneakers with a comfortable cushioned sole.",
      "category": "Shoes",
      "quantity": 1,
      "unit": "pair",
      "price_per_unit": 49.99,
      "currency": "USD"
    },
    {
      "name": "Skirt",
      "description": "Versatile A-line skirt in a timeless plaid pattern.",
      "category": "Bottoms",
      "quantity": 1,
      "unit": "unit",
      "price_per_unit": 34.99,
      "currency": "USD"
    },
    {
      "name": "Jacket",
      "description": "Stylish faux leather jacket with moto-inspired details.",
      "category": "Outerwear",
      "quantity": 1,
      "unit": "unit",
      "price_per_unit": 79.99,
      "currency": "USD"
    },
    {
      "name": "Sandals",
      "description": "Fashionable strappy sandals with a block heel.",
      "category": "Shoes",
      "quantity": 1,
      "unit": "pair",
      "price_per_unit": 39.99,
      "currency": "USD"
    },
    {
      "name": "Sunglasses",
      "description": "Trendy oversized sunglasses with UV protection.",
      "category": "Accessories",
      "quantity": 1,
      "unit": "unit",
      "price_per_unit": 24.99,
      "currency": "USD"
    },
    {
      "name": "Polo Shirt",
      "description": "Classic polo shirt with a modern slim fit.",
      "category": "Tops",
      "quantity": 1,
      "unit": "unit",
      "price_per_unit": 29.99,
      "currency": "USD"
    }



  ]
  res.json(fasion)
})

app.get('/api/bestseller', (req, res) => {
  const bestseller = [
    {
      "name": "OnePlus 9 Pro",
      "description": "Flagship smartphone with a powerful Snapdragon processor and stunning AMOLED display.",
      "category": "Smartphones",
      "quantity": 1,
      "unit": "unit",
      "price_per_unit": 899.99,
      "currency": "USD"
    },
    {
      "name": "OnePlus 8T",
      "description": "High-performance smartphone with a smooth 120Hz display and fast charging technology.",
      "category": "Smartphones",
      "quantity": 1,
      "unit": "unit",
      "price_per_unit": 749.99,
      "currency": "USD"
    },
    {
      "name": "OnePlus Watch",
      "description": "Premium smartwatch with health and fitness tracking features, long battery life, and stylish design.",
      "category": "Wearable Technology",
      "quantity": 1,
      "unit": "unit",
      "price_per_unit": 249.99,
      "currency": "USD"
    },
    {
      "name": "OnePlus Nord N200",
      "description": "Affordable 5G smartphone with a large display and impressive battery life.",
      "category": "Smartphones",
      "quantity": 1,
      "unit": "unit",
      "price_per_unit": 299.99,
      "currency": "USD"
    },
    {
      "name": "OnePlus Buds Pro",
      "description": "Wireless earbuds with active noise cancellation and immersive sound quality.",
      "category": "Audio",
      "quantity": 1,
      "unit": "unit",
      "price_per_unit": 149.99,
      "currency": "USD"
    }


  ]
  res.json(bestseller)
})
app.get('/api/todaydeals', (req, res) => {
  const todaydeals = [
    {
      "model": "MacBook Air",
      "year": 2023,
      "processor": "Apple M2",
      "ram": "16GB",
      "storage": "512GB SSD",
      "color": "Space Gray",
      "price": "$1499"
    },
    {
      "model": "MacBook Pro 13-inch",
      "year": 2024,
      "processor": "Apple M3",
      "ram": "32GB",
      "storage": "1TB SSD",
      "color": "Silver",
      "price": "$1999"
    },
    {
      "model": "MacBook Pro 16-inch",
      "year": 2024,
      "processor": "Apple M3X",
      "ram": "64GB",
      "storage": "2TB SSD",
      "color": "Space Gray",
      "price": "$2999"
    }




  ]
  res.json(todaydeals)
})

app.get('/api/surprise',(req,res)=>{
  const surprice = [
    {
      "image":" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-Qns1ottHIzRRsy2N-80O7wI6Vik6CV65w&usqp=CAU",
      "model": "Mahindra Thar LX",
      "year": 2023,
      "engine": "2.0L mStallion Turbo Petrol",
      "transmission": "6-speed Manual / 6-speed Automatic",
      "seating_capacity": 4,
      "fuel_type": "Petrol",
      "color_options": ["Rocky Beige", "Aqua Marine", "Galaxy Grey"],
      "price": "$30,000"
    },

  ]
  res.json(surprice)

  })







// ! we are just running server here--------------------and connecting it to the server
let StartServer = async () => {

  try {

    app.listen(process.env.DEV_PORT, (req, res) => {

      console.log(`Server is running on port ${process.env.DEV_PORT}`);
    })

    await connectToMongodb(process.env.DEV_Mongo_URL);
    console.log('Mongo connected succesfully');

  }
  catch (err) {
    console.log(err);
  }
}
StartServer() 