const assetPath = "/src/game-objects/little-narwhal/assets/";
const swimFrames = 7
export default class LittleNarwhal extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, name = "player1") {
    super(scene, x, y, "pink_01");
    scene.anims.create({
      key: "swim",
      frames: [
        { key: "pink_01" },
        { key: "pink_02" },
        { key: "pink_03" },
        { key: "pink_04" },
        { key: "pink_05" },
        { key: "pink_06" },
        { key: "pink_07" },
      ],
      frameRate: 10,
      repeat: -1,
    });

    this.name = name;
    scene.add.existing(this);
    if (scene.anims.exists("swim")) {
      this.play("swim");
    }
    //flip horizontally
    this.flipX = true;
  }


  static preload(scene) {

    for (let i = 1; i <= swimFrames; i++) {
      scene.load.image(`pink_0${i}`, assetPath + `pink_0${i}.png`);
    }   
  }
}