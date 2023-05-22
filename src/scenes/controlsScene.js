class ControlsScene extends Phaser.Scene {
  constructor() { 
    super("ControlsScene")
  }

  init(data) {
    console.log('ControlScene was loading');
  }

  preload() {
    this.load.image('bgControls', '../src/assets/images/backgrounds/controls/bg_controls.png')
    this.load.image('btnBack', '../src/assets/images/buttons/btnBack.png')
    //load audio
    this.load.audio('click', '../src/assets/sounds/effects/btnClick/click1.wav')
  }


  create() {
    //------------------------------ sounds
    this.soundBtnClick = () =>config.createAudio('click').play() 

    //------------------------------ background
    this.bgControls = this.add.image(0, 0, 'bgControls').setOrigin(0, 0)
    
    //------------------------------ buttons
    this.btnBack = this.add.image(config.width - 150, config.height - 94, 'btnBack').setScale(1.1)
 
    //-------------------------------events
    this.btnBack.setInteractive({ cursor: 'pointer' })
        .on('pointerover', () => this.btnBack.setTint(0xe0e0e0))
        .on('pointerout', () =>  this.btnBack.setTint(0xffffff)) 
        .on('pointerdown', (index) => {
          config.transitionBetweenScene('MenuScene') // translation between scene
          setTimeout(() => this.scene.start('MenuScene'), 800) //switch Scene
          this.soundBtnClick()  // play sound btn click
    })
  }


  update() {}
}