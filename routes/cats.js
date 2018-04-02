var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json([
      {
        "id": "1",
        "type": "img",
        "link": "https://wallpaperscraft.com/image/kittens_cats_fluffy_colorful_cute_99165_1920x1080.jpg"
      },
      {
        "id": "2",
        "type": "img",
        "link": "https://wallpaperscraft.com/image/kittens_cats_couple_shoes_hide_106936_1920x1080.jpg"
      },
      {
        "id": "3",
        "type": "img",
        "link": "https://wallpaperscraft.com/image/cats_couple_dream_care_tenderness_89398_1920x1080.jpg"
      },
      {
        "id": "4",
        "type": "img",
        "link": "https://wallpaperscraft.com/image/cats_couple_package_paper_89333_1920x1080.jpg"
      },
      {
        "id": "5",
        "type": "img",
        "link": "https://wallpaperscraft.com/image/cats_steam_water_sink_drop_85845_1920x1080.jpg"
      },
      {
        "id": 6,
        "type": "video",
        "link": "https://media.giphy.com/media/qMLQ2EOUzMT84/giphy.mp4"
      },
      {
        "id": 7,
        "type": "img",
        "link": "https://wallpaperscraft.com/image/cats_fluffy_snow_blurring_85849_1920x1080.jpg"
      },
      {
        "id": 8,
        "type": "img",
        "link": "https://wallpaperscraft.com/image/cats_fat_lie_71748_1920x1080.jpg"
      },
      {
        "id": 9,
        "type": "img",
        "link": "https://wallpaperscraft.com/image/cats_couple_kitty_background_85847_1920x1080.jpg"
      },
      {
        "id": 10,
        "type": "img",
        "link": "https://wallpaperscraft.com/image/cats_hugging_couple_face_funny_cool_102395_1920x1080.jpg"
      },
  ])
});

module.exports = router;