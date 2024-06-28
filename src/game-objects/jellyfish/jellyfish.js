const assetPath = "/src/game-objects/jellyfish/assets/";
const swimFrames = 8

export default class Jellyfish extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, name = "player1") {
    super(scene, x, y, "frame_01");
    this.scene = scene;
    scene.anims.create({
      key: "jellyfish_swim",
      frames: [
        { key: "frame_01" },
        { key: "frame_02" },
        { key: "frame_03" },
        { key: "frame_04" },
        { key: "frame_05" },
        { key: "frame_06" },
        { key: "frame_07" },
        { key: "frame_08" },
      ],
      frameRate: 10,
      repeat: -1,
    });

    this.name = name;
    scene.add.existing(this);
    this.play("jellyfish_swim");
  }

  static preload(scene) {
    for (let i = 1; i <= swimFrames; i++) {
      scene.load.image(`frame_0${i}`, assetPath + `frame_0${i}.png`);
    }   
  }
}