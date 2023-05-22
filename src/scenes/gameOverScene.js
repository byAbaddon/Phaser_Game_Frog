class GameOverScene extends Phaser.Scene {
  constructor() { // this will be parameter name - state/scene which we pass in central game state
    super("GameOverScene")
  }
  init(data) {
    // console.log(data);
    console.log('GameOverScene was loading');
     //stop all sounds
    this.game.sound.stopAll();
  }

  preload() {
    // this.load.image('bgIntro', '../src/assets/images/backgrounds/intro.png')
    this.load.image('btnBack', '../src/assets/images/buttons/btnBack.png')
   //load audio
   this.load.audio('click', '../src/assets/sounds/effects/btnClick/click1.wav')
   this.load.audio('gameOverMusic', '../src/assets/sounds/bgMusic/gameOverMusic.wav')

  }


  create() {
    //----------background
    // this.bgIntro = this.add.image(0, 0, 'bgIntro').setOrigin(0, 0)

    //------------------------------ sounds
    this.soundBtnClick = () => config.createAudio('click').play() 
    config.createAudio('gameOverMusic', 0.4, true).play()
    
    //--------text
    const text = config.createText('GameOverScene', config.width / 2 - 128, config.height / 2 + 100, 'GAME OVER', 50,'#000', null, null,'born' )
   
    this.tweens.addCounter({
        targets: text,
        from: 0,
        to: 1,
        duration: 3000,
    
        onUpdate: (tween) => {
          const v = tween.getValue();
          const c = 255 * v;
          text.x -= v * 2
          text.y -= v * 2
 
          text.setFontSize(20 + v * 64);
          text.setColor(`rgb(${c + 20}, ${c - 20}, ${c + 20})`);
        }
    })


    //------------button
    this.btnBack = this.add.image(config.width / 2, config.height - 94, 'btnBack').setScale(1.1)

    this.btnBack.setInteractive({ cursor: 'pointer' })
    .on('pointerover', () => this.btnBack.setTint(0xe0e0e0))
    .on('pointerout', () =>  this.btnBack.setTint(0xffffff)) 
    .on('pointerdown', () => {
      this.scene.start('IntroScene') //click btn image switch Scene
      // play sound btn click
      this.soundBtnClick() 
      this.game.sound.stopAll();
    }) 


  }


  update() {}

}