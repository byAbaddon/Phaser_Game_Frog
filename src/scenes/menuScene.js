class MenuScene extends Phaser.Scene {
  constructor() { // this will be parameter name - state/scene which we pass in central game state
    super("MenuScene")
  }

  init(data) {
  
    console.log('MenuScene was loading');
    //stop all sounds
    // this.game.sound.stopAll();
    // this.sound.removeByKey('menuMusic')
  }

  preload() {
    this.load.image('bgIntroFrog', '../src/assets/images/frog/frog2.png')
    this.load.image('btnBack', '../src/assets/images/buttons/btnBack.png')

    this.load.spritesheet('buttons', '../src/assets/images/buttons/longBtn.png',
      { frameWidth: 490, frameHeight: 194, startFrame: 0, endFrame: 5});

    //load audio
    this.load.audio('click', '../src/assets/sounds/effects/btnClick/click1.wav')
    this.load.audio('menuMusic', '../src/assets/sounds/bgMusic/menuMusic.mp3')
  }
 

  create() {
    //------------------------------ sounds
    this.soundBtnClick = () =>  config.createAudio('click').play() 
    this.soundMenuMusic = () => config.createAudio('menuMusic', 0.4, true).play()
    if(!this.sound.get('menuMusic')) this.soundMenuMusic() //play music only is null

    //------------------------------ background
    this.bgIntro = this.add.image(config.width / 4, 0, 'bgIntroFrog').setOrigin(0, 0).setScale(0.4)
    
    //------------------------------ buttons
    //---btnCredits
    this.btnCredits = this.add.image(140, config.height - 86, 'buttons', 0).setScale(0.4, 0.5) 
    config.createText('MenuScene', 74, config.height - 120, 'Credits', 35, 'white',)   //add text
    
    //---btnBack
    this.btnBack = this.add.image(config.width / 2, config.height - 94, 'btnBack').setScale(1.1)
    
    //---btnControls
    this.btnControls = this.add.image(config.width - 150, config.height - 86, 'buttons', 1).setScale(0.4, 0.5)
    config.createText('MenuScene', config.width - 208, config.height - 116, 'Controls', 33, 'white',)  //add text
    
    //---------------------------add interactive btn options
    Array.from([this.btnCredits, this.btnBack, this.btnControls]).forEach((btn, index) => {
       btn.setInteractive({ cursor: 'pointer', index })
        .on('pointerover', () => btn.setTint(0xe0e0e0))
        .on('pointerout', () =>  btn.setTint(0xffffff)) 
         .on('pointerdown', () => { 
            config.transitionBetweenScene('MenuScene') // translation between scene
            if (index == 0) setTimeout(() => this.scene.start('CreditsScene'), 800) //switch Scene
            if (index == 2) setTimeout(() => this.scene.start('ControlsScene'), 800) //switch Scene
            if (index == 1) setTimeout(() => this.scene.start('IntroScene') , 800) //switch Scene

            // play sound btn click
           this.soundBtnClick()  
      }) 
    })
   


  }


  update() {}

}