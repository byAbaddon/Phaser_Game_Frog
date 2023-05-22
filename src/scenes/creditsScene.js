class CreditsScene extends Phaser.Scene {
  constructor() { 
    super("CreditsScene")
  }

  init(data) {
    console.log('CreditsScene was loading');
  }

  preload() {
    this.load.image('btnBack', '../src/assets/images/buttons/btnBack.png')
    this.load.image('logo', '../src/assets/images/backgrounds/logo/phaser.png')
    //load audio
    this.load.audio('click', '../src/assets/sounds/effects/btnClick/click1.wav')
     
  }


  create() {
    //------------------------------ sounds
    this.soundBtnClick = () => config.createAudio('click').play() 
    
    //------------------------------ text

    //top
    config.createText('CreditsScene', config.width - 100,  10, 'Version: 1.0.0-beta', 12,'white' ,null , null, 'cute')
    config.createText('CreditsScene', config.width / 2 - 90,  20, 'CREDITS', 40,'white' ,null , null, 'cute')

    
    //--------top left
    //free img
    config.createText('CreditsScene', 20, config.height / 5, 'Free Images:', 28,'brown' ,null , null, 'cute')
    config.createText('CreditsScene', 40, config.height / 4 + 5, 'https://www.pngwing.com', 20,'teal' ,null , null, 'cute')
    config.createText('CreditsScene', 40, config.height / 4 + 30, 'https://www.freepik.com', 20,'teal' ,null , null, 'cute')
    config.createText('CreditsScene', 40, config.height / 4 + 55, 'https://www.craftpix.net', 20,'teal' ,null , null, 'cute')
    //free sounds
    config.createText('CreditsScene', 20, config.height / 3 + 40, 'Free Sounds:', 28,'brown' ,null , null, 'cute')
    config.createText('CreditsScene', 40, config.height / 3 + 70, 'https://www.freesound.org', 20,'teal' ,null , null, 'cute')
    config.createText('CreditsScene', 40, config.height / 3 + 95, 'https://pixabay.com/bg/music/', 20,'teal' ,null , null, 'cute')
    config.createText('CreditsScene', 40, config.height / 3 + 120, 'https://orangefreesounds.com', 20,'teal' ,null , null, 'cute')
    //platform
    config.createText('CreditsScene', 20, config.height / 2 + 50, 'Platform 2D game:', 28,'brown' ,null , null, 'cute')
    config.createText('CreditsScene', 40, config.height / 2 + 80, 'https://phaser.io/', 20,'teal' ,null , null, 'cute')

    //------middle-----logo
    this.add.image(config.width - 210 , config.height / 2 - 40, 'logo').setScale(0.4) 
    



    //---------- bottom
    config.createText('CreditsScene', 20, config.height - 45, 'Developer:', 16,'brown' ,null , null, 'cute')
    config.createText('CreditsScene', 40, config.height - 25, 'By Abaddon', 16, '#BEDDDD', null, null, 'cute')
    
    config.createText('CreditsScene', config.width / 2 - 80, config.height - 45, 'Bug rapports:', 16, 'brown', null, null, 'cute')
    config.createText('CreditsScene', config.width / 2 - 50, config.height - 25, 'subtotal@avb.bg', 16, '#BEDDDD', null, null, 'cute')

    config.createText('CreditsScene', config.width - 90, config.height - 45, 'Copyright:', 16,'brown' ,null , null, 'cute')
    config.createText('CreditsScene', config.width - 50, config.height - 25, '2023', 16, '#BEDDDD', null, null, 'cute')



    //------------------------------ buttons
    //---btnBack
    this.btnBack = this.add.image(config.width / 2, config.height - 110, 'btnBack').setScale(1.1)
 

    this.btnBack.setInteractive({ cursor: 'pointer' })
        .on('pointerover', () => this.btnBack.setTint(0xe0e0e0))
        .on('pointerout', () =>  this.btnBack.setTint(0xffffff)) 
        .on('pointerdown', (index) => {
          config.transitionBetweenScene('MenuScene') // translation between scene
          setTimeout(() => this.scene.start('MenuScene'), 800) //switch Scene
          this.soundBtnClick()  //add sound
    })
  }


  update() {}
}