var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json([
      {
        "id": "1",
        "type": "img",
        "link": "https://wallpaperscraft.com/image/processor_cpu_upgrade_installation_chip_robot_5633_1920x1080.jpg"
      },
      {
        "id": "2",
        "type": "img",
        "link": "https://wallpaperscraft.com/image/circuit_paths_chips_black_pin_26298_1920x1080.jpg"
      },
      {
        "id": "3",
        "type": "img",
        "link": "https://wallpaperscraft.com/image/xbox_xbox_one_console_gamepad_joystick_97639_1920x1080.jpg"
      },
      {
        "id": "4",
        "type": "img",
        "link": "https://wallpaperscraft.com/image/keyboard_robot_bw_clone_lego_27558_1920x1080.jpg"
      },
      {
        "id": "5",
        "type": "img",
        "link": "https://wallpaperscraft.com/image/asus_asus_rog_pc_gaming_105788_1920x1080.jpg"
      },
      {
        "id": 6,
        "type": "video",
        "link": "https://media.giphy.com/media/l46CwEYnbFtFfjZNS/giphy.mp4"
      },
      {
        "id": 7,
        "type": "img",
        "link": "https://wallpaperscraft.com/image/nvidia_geforce_titan_x_12gb_pc_gpu_vga_graphics_card_100862_1920x1080.jpg"
      },
      {
        "id": 8,
        "type": "img",
        "link": "https://wallpaperscraft.com/image/brand_processor_intel_core_26218_1920x1080.jpg"
      },
      {
        "id": 9,
        "type": "img",
        "link": "https://wallpaperscraft.com/image/apple_vs_android_android_competition_26151_1920x1080.jpg"
      },
      {
        "id": 10,
        "type": "img",
        "link": "https://wallpaperscraft.com/image/computer_cooling_water_tube_power_light_29679_1920x1080.jpg"
      },
  ])
});

module.exports = router;