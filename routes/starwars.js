var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
      {
        "id": "1",
        "type": "img",
        "link": "https://wallpaperscraft.com/image/star_wars_battlefront_electronic_arts_105865_1920x1080.jpg"
      },
      {
        "id": "2",
        "type": "img",
        "link": "https://wallpaperscraft.com/image/r2d2_drone_star_wars_toy_113637_1920x1080.jpg"
      },
      {
        "id": "3",
        "type": "img",
        "link": "https://wallpaperscraft.com/image/star_wars_the_old_republic_guard_characters_lightsabers_21255_1920x1080.jpg"
      },
      {
        "id": "4",
        "type": "img",
        "link": "https://wallpaperscraft.com/image/star_wars_force_kylo_ren_laser_sword_112324_1920x1080.jpg"
      },
      {
        "id": "5",
        "type": "img",
        "link": "https://wallpaperscraft.com/image/darth_vader_armor_star_wars_film_hat_snow_93645_1920x1080.jpg"
      },
      {
        "id": 6,
        "type": "video",
        "link": "https://media.giphy.com/media/F53RB33SVCzYc/giphy.mp4"
      },
      {
        "id": 7,
        "type": "img",
        "link": "https://wallpaperscraft.com/image/star_wars_battlefront_outer_rim_dice_electronic_arts_111641_1920x1080.jpg"
      },
      {
        "id": 8,
        "type": "img",
        "link": "https://wallpaperscraft.com/image/star_wars_episode_i_the_phantom_menace_qui_gon_jinn_obi_wan_kenobi_darth_maul_107544_1920x1080.jpg"
      },
      {
        "id": 9,
        "type": "img",
        "link": "https://wallpaperscraft.com/image/star_wars_episode_vii_the_force_awakens_darth_vader_105155_1920x1080.jpg"
      },
      {
        "id": 10,
        "type": "img",
        "link": "https://wallpaperscraft.com/image/star_wars_darth_vader_anakin_skywalker_99807_1920x1080.jpg"
      },
  ])
});

module.exports = router;
