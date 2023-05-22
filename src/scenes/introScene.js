class IntroScene extends Phaser.Scene {
  constructor() { // this will be parameter name - state/scene which we pass in central game state
    super("IntroScene")
  }

  init(data) {
    // console.log(data);
    console.log('IntroScene was loading');
    this.sound.removeAll()
  }

  preload() {
    //image
    config.loadMultiImages('IntroScene', 'bgIntro', '../src/assets/images/backgrounds/intro/sprite/', 3)
    this.load.image('btnStart', '../src/assets/images/buttons/btnStart.png')
    this.load.image('btnMenu', '../src/assets/images/buttons/btnMenu.png')
    //sound
    this.load.audio('frogKva', '../src/assets/sounds/effects/frog/kva.mp3')
    this.load.audio('click', '../src/assets/sounds/effects/btnClick/click1.wav')

   
  }


  create() {
    //------------------------------ create image
    this.bgIntro = this.add.sprite(0, 0, 'bgIntro1').setOrigin(0, 0)
    config.createAnimation('bgIntro', 3, 10, -1, 40, true, 2000, 1500)
    this.bgIntro.play('bgIntro', true)
    //-button
    this.btnMenu = this.add.image(100, config.height - 94, 'btnMenu',).setScale(1.1)
    this.btnStart = this.add.image(290, config.height - 94, 'btnStart',).setScale(1.1)

   
    //------------------------------- create music and sound effects
    this.soundBtnClick = () => config.createAudio('click').play() 
    this.frogSound = config.createAudio('frogKva', 1, false, 1)
    this.myTimerSound = setInterval(() => this.frogSound.play(), 2100)
 


    //------------------------------- create text
    //---logo
    let logoText = config.createText('IntroScene', 30, 50, 'Classic FROG', 62, '#EAEDF0', null, 'italic', 'mario')
      .setShadow(5, 5, 'black', 'blur', 'enable', 'enable')   //add shadow
    
    // let effect = logoText.postFX.addDisplacement('__WHITE', 0, 0);
    
    this.tweens.add({
      targets: logoText,
      x: -1,
      duration: 200,
      hold: 10,
      loop: 3,
      yoyo: true,
      // ease: 'sine.inout',
      onUpdate: () => {
        logoText.setColor( logoText.x < 2 ?  '#F50022' : '#EAEDF0')
      }
  });
  
   
    //---author
    config.createText('IntroScene', 20, config.height - 25, 'By Abaddon', 16, '#BEDDDD', null, null, 'cute')
    //---copyright
    config.createText('IntroScene', config.width - 115, config.height - 25, 'Copyright 2023', 16, '#BEDDDD', null, null, 'cute')


      //---------------------------add interactive btn options
      Array.from([this.btnMenu, this.btnStart]).forEach((btn, index) => {
        btn.setInteractive({ cursor: 'pointer', index })
         .on('pointerover', () => btn.setTint(0xe0e0e0))
         .on('pointerout', () =>  btn.setTint(0xffffff)) 
          .on('pointerdown', () => { 
            clearInterval(this.myTimerSound)   // stop loop sound kva
             config.transitionBetweenScene('IntroScene') // translation between scene
             if (index == 0)  setTimeout(() => this.scene.start('MenuScene'), 800) //switch Scene
             if (index == 1) setTimeout(() => this.scene.start('GameScene'), 800) //switch Scene
             // play sound btn click
             this.soundBtnClick() 
       }) 
      })
  
  
  }


  update() {
    // this.btnStart.rotation += 0.01;
    // this.circle.radius += 10
    
  }




}