const express = require('express')
const router = express.Router();


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
        "brand": "Xiaomi",
        "model": "Redmi Note 10 Pro",
        "color": "Glacial Blue",
        "display_size": "6.67 inches",
        "RAM": "6 GB",
        "storage": "128 GB",
        "main_camera_resolution": "108 MP",
        "front_camera_resolution": "16 MP",
        "battery_capacity": "5020 mAh",
        "price": "$279.99"
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
        "brand": "Samsung",
        "model": "Galaxy A32",
        "color": "Awesome Black",
        "display_size": "6.4 inches",
        "RAM": "6 GB",
        "storage": "128 GB",
        "main_camera_resolution": "64 MP",
        "front_camera_resolution": "20 MP",
        "battery_capacity": "5000 mAh",
        "price": "$299.99"
    },
    {
        "brand": "Apple",
        "model": "iPhone 13",
        "color": "Midnight",
        "display_size": "6.1 inches",
        "RAM": "4 GB",
        "storage": "128 GB",
        "main_camera_resolution": "12 MP",
        "front_camera_resolution": "12 MP",
        "battery_capacity": "2815 mAh",
        "price": "$799.00"
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
        "brand": "OnePlus",
        "model": "9 Pro",
        "color": "Morning Mist",
        "display_size": "6.7 inches",
        "RAM": "8 GB",
        "storage": "128 GB",
        "main_camera_resolution": "48 MP",
        "front_camera_resolution": "16 MP",
        "battery_capacity": "4500 mAh",
        "price": "$969.00"
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
        "brand": "LG",
        "model": "Velvet",
        "color": "Aurora Silver",
        "display_size": "6.8 inches",
        "RAM": "6 GB",
        "storage": "128 GB",
        "main_camera_resolution": "48 MP",
        "front_camera_resolution": "16 MP",
        "battery_capacity": "4300 mAh",
        "price": "$499.99"
    },
    {
        "brand": "Nokia",
        "model": "8.3 5G",
        "color": "Polar Night",
        "display_size": "6.81 inches",
        "RAM": "8 GB",
        "storage": "128 GB",
        "main_camera_resolution": "64 MP",
        "front_camera_resolution": "24 MP",
        "battery_capacity": "4500 mAh",
        "price": "$699.00"
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
        "brand": "Oppo",
        "model": "Find X3 Pro",
        "color": "Gloss Black",
        "display_size": "6.7 inches",
        "RAM": "12 GB",
        "storage": "256 GB",
        "main_camera_resolution": "50 MP",
        "front_camera_resolution": "32 MP",
        "battery_capacity": "4500 mAh",
        "price": "$1,199.00"
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
        "brand": "Vivo",
        "model": "X70 Pro+",
        "color": "Deep Sea Blue",
        "display_size": "6.78 inches",
        "RAM": "12 GB",
        "storage": "256 GB",
        "main_camera_resolution": "50 MP",
        "front_camera_resolution": "32 MP",
        "battery_capacity": "4450 mAh",
        "price": "$1,099.00"
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
        "brand": "ZTE",
        "model": "Axon 30 Ultra",
        "color": "Black",
        "display_size": "6.67 inches",
        "RAM": "8 GB",
        "storage": "256 GB",
        "main_camera_resolution": "64 MP",
        "front_camera_resolution": "16 MP",
        "battery_capacity": "4600 mAh",
        "price": "$749.00"
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
        "brand": "CAT",
        "model": "S61",
        "color": "Black",
        "display_size": "5.2 inches",
        "RAM": "4 GB",
        "storage": "64 GB",
        "main_camera_resolution": "16 MP",
        "front_camera_resolution": "8 MP",
        "battery_capacity": "4500 mAh",
        "price": "$999.00"
    },
    {
        "brand": "Fairphone",
        "model": "4",
        "color": "Black",
        "display_size": "5.65 inches",
        "RAM": "4 GB",
        "storage": "64 GB",
        "main_camera_resolution": "12 MP",
        "front_camera_resolution": "8 MP",
        "battery_capacity": "3000 mAh",
        "price": "$549.00"
    },
    {
        "brand": "Nokia",
        "model": "3310 3G",
        "color": "Charcoal",
        "display_size": "2.4 inches",
        "RAM": "64 MB",
        "storage": "128 MB",
        "main_camera_resolution": "2 MP",
        "front_camera_resolution": "None",
        "battery_capacity": "1200 mAh",
        "price": "$49.99"
    },
    {
        "brand": "Palm",
        "model": "Palm Phone",
        "color": "Titanium",
        "display_size": "3.3 inches",
        "RAM": "3 GB",
        "storage": "32 GB",
        "main_camera_resolution": "12 MP",
        "front_camera_resolution": "8 MP",
        "battery_capacity": "800 mAh",
        "price": "$349.99"
    },

    {
        "brand": "Sony",
        "model": "Xperia 1 III",
        "color": "Frosted Purple",
        "display_size": "6.5 inches",
        "RAM": "12 GB",
        "storage": "256 GB",
        "main_camera_resolution": "12 MP",
        "front_camera_resolution": "8 MP",
        "battery_capacity": "4500 mAh",
        "price": "$1,299.99"
    },
    {
        "brand": "Huawei",
        "model": "Mate 40 Pro",
        "color": "Mystic Silver",
        "display_size": "6.76 inches",
        "RAM": "8 GB",
        "storage": "256 GB",
        "main_camera_resolution": "50 MP",
        "front_camera_resolution": "13 MP",
        "battery_capacity": "4400 mAh",
        "price": "$1,199.00"
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
    {
        "brand": "Realme",
        "model": "Narzo 30 Pro",
        "color": "Blade Silver",
        "display_size": "6.5 inches",
        "RAM": "8 GB",
        "storage": "128 GB",
        "main_camera_resolution": "48 MP",
        "front_camera_resolution": "16 MP",
        "battery_capacity": "5000 mAh",
        "price": "$299.99"
    },


]



router.get('/api/mobile', (req, res) => {
    
    res.send("hiii")
    res.json(mobile);

})
module.exports = router;

