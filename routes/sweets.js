var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {
        "id": 1,
        "type": "img",
        "link": "https://images.pexels.com/photos/539447/pexels-photo-539447.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    },
    {
        "id": 2,
        "type": "img",
        "link": "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    },
    {
        "id": 3,
        "type": "img",
        "link": "https://images.pexels.com/photos/574111/pexels-photo-574111.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    },
    {
        "id": 4,
        "type": "img",
        "link": "https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    },
    {
        "id": 5,
        "type": "img",
        "link": "https://images.pexels.com/photos/224198/pexels-photo-224198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    },
    {
        "id": 6,
        "type": "video",
        "link": "https://media.giphy.com/media/mwD0VOVS7tQli/giphy.mp4"
    },
    {
        "id": 7,
        "type": "img",
        "link": "https://wallpaperscraft.com/image/cake_dessert_syrup_baking_89689_1920x1080.jpg"
    },
    {
        "id": 8,
        "type": "img",
        "link": "https://wallpaperscraft.com/image/cherries_berries_flowers_109509_1920x1080.jpg"
    },
    {
        "id": 9,
        "type": "img",
        "link": "https://wallpaperscraft.com/image/pig_cake_soiled_96841_1920x1080.jpg"
    },
    {
        "id": 10,
        "type": "img",
        "link": "https://wallpaperscraft.com/image/coffee_cups_grains_macaroon_cookies_frosting_berries_blueberries_dessert_sweets_still_life_96604_1920x1080.jpg"
    }
])
});

module.exports = router;
