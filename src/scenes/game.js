import LittleNarwhal from "../game-objects/little-narwhal/little-narwhal.js";
import Jellyfish from "../game-objects/jellyfish/jellyfish.js";
export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
  }
  

  init(data) {
    this.name = data.name;
    this.number = data.number;
  }

  preload() {
    LittleNarwhal.preload(this);
    Jellyfish.preload(this);

  }

  create() {

    this.player = new LittleNarwhal(this, 100, 100);
    this.jelly = new Jellyfish(this, 200, 200);
  }
}