export function assetsLoader() {
  this.load.setBaseURL('../assets');
  this.load.spritesheet('person', '/sprites/robot_spritesheet.png', {
    frameWidth: 32,
    frameHeight: 32
  });
  this.load.image('target', '/sprites/target.png');
  this.load.image('orb', '/sprites/controller.png');
  this.load.spritesheet('playerPos', '/sprites/player_position.png', {
    frameWidth: 300,
    frameHeight: 300
  });
  this.load.image('castleTiles', '/tilesets/factory_tileset.png');
  this.load.tilemapTiledJSON(
    'map',
    '../../../../assets/tilemaps/factory-map.json'
  );
  this.load.audio('music_intro', ['/music/Battle_Intro.mp3']);
  this.load.audio('music_loop', ['/music/Battle_Loop.mp3']);
}
