class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene")
    this.test = false
    this.cursors = null
    this.isKeyDown = false
    this.onPlatform = false
    this.isInSocket = false
    this.isDrowned = false
    this.isDeath = false
    this.isGameOver = false
    this.isTimeOver = false
    this.isCrab = false
    this.carSpeed = 30            
    this.platformSpeed = 30 
    this.emuSpeed = 1
    this.repeatCarTruck = this.repeatCarBus = this.repeatCarPolice = this.repeatCarGreen = this.repeatCarRed = null
    this.stepXCarTruck = this.stepXCarBus = this.stepXCarPolice = this.stepXCarGreen = this.stepXCarRed = null 
    this.speedCarTruck = this.speedCarBus = this.speedCarPolice = this.speedCarGreen = this.speedCarRed = null
    this.repeatSmallLog =  this.repeatBigLog =  this.repeatBigTurtle = this.repeatSmallTurtle = this.repeatCrocodile = null
    this.stepXSmallLog =  this.stepXBigLog =  this.stepXBigTurtle = this.stepXSmallTurtle = this.stepXCrocodile = null
    this.speedSmallLog = this.speedBigLog = this.speedBigTurtle = this.speedSmallTurtle = this.speedCrocodile = null
    this.gameTime = 60
    this.level = 1
    this.life = 3
    this.hiScore = 106500
    this.score = 0
    this.socketCenterPosition = [102, 222, 342, 462, 582, 702]
    this.socketBusyPosition = { 102: false, 222: false, 342: false, 462: false, 582: false, 702: false }
    this.socketCurrentBusyPosition = []
    this.levelsLegend = {
      1: {
        carSpeed: 30, platformSpeed: 30, emuSpeed: 1,
        repeatCarRed: 3,  repeatCarGreen: 3,   repeatCarBus: 3,   repeatCarPolice: 1,  repeatCarTruck: 3,
        stepXCarRed: 160, stepXCarGreen: 200, stepXCarBus: 320,  stepXCarPolice: 200, stepXCarTruck: 300,
        speedCarRed: 30,  speedCarGreen: 30,   speedCarBus: 30,   speedCarPolice: 100, speedCarTruck: 30,
        repeatSmallLog: 5,  repeatBigLog: 5,   repeatBigTurtle: 5,  repeatSmallTurtle: 5,  repeatCrocodile: 5,
        stepXSmallLog: 200, stepXBigLog: 200,  stepXBigTurtle: 200, stepXSmallTurtle: 200, stepXCrocodile: 200,
        speedSmallLog: 30,  speedBigLog: 30,   speedBigTurtle: 40,  speedSmallTurtle: 30,  speedCrocodile: 50
        
      },
      2: {
        carSpeed: 30, platformSpeed: 30, emuSpeed: 1,
        repeatCarRed: 4,  repeatCarGreen: 4,   repeatCarBus: 3,   repeatCarPolice: 2,  repeatCarTruck: 3,
        stepXCarRed: 160, stepXCarGreen: 200, stepXCarBus: 320,  stepXCarPolice: 200, stepXCarTruck: 300,
        speedCarRed: 30,  speedCarGreen: 40,   speedCarBus: 30,   speedCarPolice: 120, speedCarTruck: 50,
        repeatSmallLog: 4,  repeatBigLog: 3,   repeatBigTurtle: 3,  repeatSmallTurtle: 5,  repeatCrocodile: 4,
        stepXSmallLog: 200, stepXBigLog: 200,  stepXBigTurtle: 200, stepXSmallTurtle: 200, stepXCrocodile: 200,
        speedSmallLog: 30,  speedBigLog: 40,   speedBigTurtle: 30,  speedSmallTurtle: 50,  speedCrocodile: 50
        
      },

      3: {
        carSpeed: 30, platformSpeed: 30, emuSpeed: 1,
        repeatCarRed: 4,  repeatCarGreen: 4,   repeatCarBus: 3,   repeatCarPolice: 3,  repeatCarTruck: 4,
        stepXCarRed: 160, stepXCarGreen: 200, stepXCarBus: 320,  stepXCarPolice: 200, stepXCarTruck: 300,
        speedCarRed: 40,  speedCarGreen: 50,   speedCarBus: 40,   speedCarPolice: 150, speedCarTruck: 50,
        repeatSmallLog: 3,  repeatBigLog: 2,   repeatBigTurtle: 3,  repeatSmallTurtle: 4,  repeatCrocodile: 3,
        stepXSmallLog: 200, stepXBigLog: 200,  stepXBigTurtle: 200, stepXSmallTurtle: 200, stepXCrocodile: 200,
        speedSmallLog: 30,  speedBigLog: 60,   speedBigTurtle: 30,  speedSmallTurtle: 50,  speedCrocodile: 70
        
      },
      4: {
        carSpeed: 30, platformSpeed: 30, emuSpeed: 1,
        repeatCarRed: 4,  repeatCarGreen: 4,   repeatCarBus: 4,   repeatCarPolice: 4,  repeatCarTruck: 5,
        stepXCarRed: 160, stepXCarGreen: 200, stepXCarBus: 220,  stepXCarPolice: 200, stepXCarTruck: 300,
        speedCarRed: 40,  speedCarGreen: 80,   speedCarBus: 40,   speedCarPolice: 190, speedCarTruck: 80,
        repeatSmallLog: 2,  repeatBigLog: 2,   repeatBigTurtle: 2,  repeatSmallTurtle: 3,  repeatCrocodile: 2,
        stepXSmallLog: 200, stepXBigLog: 200,  stepXBigTurtle: 200, stepXSmallTurtle: 200, stepXCrocodile: 200,
        speedSmallLog: 40,  speedBigLog: 70,   speedBigTurtle: 50,  speedSmallTurtle: 80,  speedCrocodile: 80
        
      },
      5: {
        carSpeed: 30, platformSpeed: 30, emuSpeed: 1,
        repeatCarRed: 5,  repeatCarGreen: 4,   repeatCarBus: 5,   repeatCarPolice: 4,  repeatCarTruck: 5,
        stepXCarRed: 160, stepXCarGreen: 160, stepXCarBus: 200,  stepXCarPolice: 200, stepXCarTruck: 300,
        speedCarRed: 40,  speedCarGreen: 80,   speedCarBus: 40,   speedCarPolice: 250, speedCarTruck: 80,
        repeatSmallLog: 2,  repeatBigLog: 1,   repeatBigTurtle: 3,  repeatSmallTurtle: 2,  repeatCrocodile: 1,
        stepXSmallLog: 200, stepXBigLog: 200,  stepXBigTurtle: 200, stepXSmallTurtle: 200, stepXCrocodile: 200,
        speedSmallLog: 40,  speedBigLog: 80,   speedBigTurtle: 60,  speedSmallTurtle: 90,  speedCrocodile: 90
        
      },
      6: {
        carSpeed: 30, platformSpeed: 30, emuSpeed: 1,
        repeatCarRed: 5,  repeatCarGreen: 5,   repeatCarBus: 5,   repeatCarPolice: 5,  repeatCarTruck: 5,
        stepXCarRed: 200, stepXCarGreen: 300, stepXCarBus: 200,  stepXCarPolice: 300, stepXCarTruck: 200,
        speedCarRed: 40,  speedCarGreen: 80,   speedCarBus: 40,   speedCarPolice: 250 + this.level * 4, speedCarTruck: 80,
        repeatSmallLog: 2,  repeatBigLog: 1,   repeatBigTurtle: 2,  repeatSmallTurtle: 2,  repeatCrocodile: 1,
        stepXSmallLog: 200, stepXBigLog: 300,  stepXBigTurtle: 200, stepXSmallTurtle: 300, stepXCrocodile: 200,
        speedSmallLog: 110,  speedBigLog: 150,   speedBigTurtle: 50,  speedSmallTurtle: 100,  speedCrocodile: 90
      },

    }
  }

  //================================== ((( INIT ))) ==========================================

  init() {
    //stop all sounds
    this.game.sound.stopAll();
    console.log('GameScene was Loaded!')
    // this.resetAllPlayerData()
  }


  //================================== ((( PRELOAD ))) ==========================================

  preload() {
    //----------------------load background
    this.load.image('bgGame', '../src/assets/images/backgrounds/game/bg.png')
    this.load.image('bgSky', '../src/assets/images/backgrounds/game/sky.png')
    this.load.image('bgSea', '../src/assets/images/backgrounds/game/sea.png')


    //load single img: target, frog in socket, palm
    this.load.image('target', '../src/assets/images/target/1.png')
    this.load.image('socketFrogImg', '../src/assets/images/frog/socketFrogImg.png')
    this.load.image('palm', '../src/assets/images/palm/1.png')

   
   //multi load images: frog, enemies, log platforms
   //---list images
    const multiImgArr = [
       //load player frog
      { name: 'frog', numPic: 5 },
       //load img enemies
      { name: 'police', path: 'automobiles/', numPic: 3 },
      { name: 'red', path: 'automobiles/', numPic: 3 },
      { name: 'green', path: 'automobiles/', numPic: 3 },
      { name: 'bus', path: 'automobiles/', numPic: 3 },
      { name: 'truck', path: 'automobiles/', numPic: 3 }, 
      { name: 'emu', numPic: 6 },
      { name: 'crab', numPic: 3 },
      //load img log platforms
      { name: 'bigLog',  path:'logs/', numPic: 3 },
      { name: 'smallLog',path:'logs/', numPic: 3 },
      { name: 'crocodile', numPic: 3 },
      { name: 'bigTurtle', path:'turtle/', numPic: 3 },
      { name: 'smallTurtle', path:'turtle/', numPic: 3 },
      //load skull
      { name: 'skull', numPic: 3 },
      //load img bonus
      { name: 'fly', numPic: 3 },
      
    ]

     
    for (const obj of multiImgArr) {
      obj.path ? obj.path += obj.name : obj.path = obj.name
      config.loadMultiImages('GameScene', obj.name, `../src/assets/images/${obj.path}/sprite/`, obj.numPic)
      
    }                                                

    
    //----------------------load audio
    //---list audio
    const audioArr = [
      //load player frog
     { name: 'gameMusic', path: 'bgMusic/gameMusic.mp3'},
     { name: 'inSocket', path: 'effects/frog/inSocket.mp3'},
     { name: 'moveFrog', path: 'effects/frog/move.wav'},
     { name: 'busySocket', path: 'effects/frog/no.ogg'},
     { name: 'bonus', path: 'effects/bonus/ring.wav'},
     { name: 'carHorn', path: 'effects/carHorn/c1.wav'},
     { name: 'drowned', path: 'effects/drowned/2.wav'},
     { name: 'eaten', path: 'effects/eaten/1.mp3'},
     { name: 'eatenFromEmu', path: 'effects/eaten/formEmu.ogg'},
     { name: 'eatenFromCrab', path: 'effects/eaten/crab.wav'},
     { name: 'eatenVoice', path: 'effects/eaten/2.wav'},
     { name: 'bird', path: 'effects/bird/1.wav'},
     { name: 'alarm', path: 'effects/alarm/alarm.mp3'},
     { name: 'timeOver', path: 'effects/timeOver/timeOver.wav'},
   ]
    
    for (const obj of audioArr) {
      this.load.audio(obj.name, `../src/assets/sounds/${obj.path}`)
    }
  }


  //================================== ((( CREATE ))) ==========================================

  create() {
    //load Data from current level with legend
    [this.carSpeed, this.platformSpeed, this.emuSpeed,
      this.repeatCarRed, this.repeatCarGreen, this.repeatCarBus, this.repeatCarPolice, this.repeatCarTruck,
      this.stepXCarRed,  this.stepXCarGreen,  this.stepXCarBus,  this.stepXCarPolice,  this.stepXCarTruck,
      this.speedCarRed,  this.speedCarGreen,  this.speedCarBus,  this.speedCarPolice,  this.speedCarTruck, 
      this.repeatSmallLog, this.repeatBigLog, this.repeatBigTurtle, this.repeatSmallTurtle, this.repeatCrocodile,
      this.stepXSmallLog,  this.stepXBigLog,  this.stepXBigTurtle,  this.stepXSmallTurtle,  this.stepXCrocodile,
      this.speedSmallLog,  this.speedBigLog,  this.speedBigTurtle,  this.speedSmallTurtle,  this.speedCrocodile,
    ] = Object.values(this.levelsLegend[this.level > 6 ? 6 : this.level])

     //---------------------------------- create background
     this.add.image(0, 0, 'bgGame').setOrigin(0, 0)
     this.bgSky = this.add.tileSprite(0, 0, config.width, 120, 'bgSky').setOrigin(0,0)//.setDepth(1)
     this.bgSea = this.add.tileSprite(0, 120, config.width, 200, 'bgSea').setOrigin(0,0)//.setDepth(1)


    //grid create for dev test
    // this.grid = this.add.grid(0, 0, 900, 600, 40, 40, '0x057605','','0x00b9f2',).setOrigin(0, 0)

    // ----------- create Groups
    this.multiEnemyGroup = this.physics.add.staticGroup()
    this.multiPlatformGroup = this.physics.add.staticGroup()
    this.multiBonusGroup = this.physics.add.staticGroup()
    this.multiSocketGroup = this.physics.add.staticGroup()
    this.multiPalmGroup = this.physics.add.staticGroup()
    
    //----------- add keyboard control
    this.cursors = this.input.keyboard.createCursorKeys()


    //----------------------------------- create players sprite group with custom function 
    this.player = this.createPlayer(config.width / 2 - 18, config.height - 18, 'frog1') // -268 remove
    this.player.setDepth(10) //z-index

 
    // ---------------------------------- addGroupsToMultiGroups
    //--- create enemies groups
    this.createGroup('red', 'red1', this.repeatCarRed, {x: 0.18,  y: 0.18},          {x: 400,  y: config.height - 58, stepX: this.stepXCarRed}, -this.speedCarRed, config.createAnimation('red', 3, 10, -1))
    this.createGroup('green', 'green1', this.repeatCarGreen, {x: 0.18,  y: 0.18},    { x: 100, y: config.height - 98, stepX: this.stepXCarGreen}, this.speedCarGreen, config.createAnimation('green', 3, 10, -1))
    this.createGroup('police', 'police1', this.repeatCarPolice, {x: 0.06,  y: 0.07}, {x: 100, y: config.height - 178, stepX: this.stepXCarPolice}, this.speedCarPolice, config.createAnimation('police', 3, 10, -1))
    this.createGroup('bus', 'bus1', this.repeatCarBus, {x: 0.18, y: 0.15},           {x: 220, y: config.height - 138, stepX: this.stepXCarBus}, -this.speedCarBus, config.createAnimation('bus', 3, 10, -1))
    this.createGroup('truck', 'truck1', this.repeatCarTruck, {x: 0.22, y: 0.20},     {x: 100, y: config.height - 218, stepX: this.stepXCarTruck}, -this.speedCarTruck, config.createAnimation('truck', 3, 10, -1))
    

    //---create platforms groups  
    this.createGroup('crocodile', 'crocodile1', this.repeatCrocodile, {x: 0.55, y: 0.60},       {x: 100, y: config.height - 458, stepX: this.stepXCrocodile}, this.speedCrocodile, config.createAnimation('crocodile', 3, 1, -1, 5))
    this.createGroup('smallTurtle', 'smallTurtle1', this.repeatSmallTurtle, {x: 0.26, y: 0.26}, {x: 80, y: 182, stepX: this.stepXSmallTurtle}, -this.speedSmallTurtle, config.createAnimation('smallTurtle', 3, 3, -1, 10))
    this.createGroup('smallLog', 'smallLog1', this.repeatSmallLog,  {x: 0.25, y: 0.40},         {x: 100, y: config.height - 378, stepX: this.stepXSmallLog}, this.speedSmallLog, config.createAnimation('smallLog', 3, 0.5, -1, 1))
    this.createGroup('bigTurtle', 'bigTurtle1', this.repeatBigTurtle, {x: 0.26, y: 0.26},       {x: 80, y: 262, stepX: this.stepXBigTurtle}, -this.speedBigTurtle, config.createAnimation('bigTurtle', 3, 3, -1, 10))
    this.createGroup('bigLog', 'bigLog1', this.repeatBigLog, {x: 0.50, y: 0.40},                {x: 0, y: config.height - 298, stepX: this.stepXBigLog}, this.speedBigLog, config.createAnimation('bigLog', 3, 0.3, -1, 5))
 

    //---create palm group
    this.createGroup('palm', 'palm', 6, {x: 0.80, y:0.80}, {x: this.socketCenterPosition[0]-2 , y: 89, stepX: 120}, 0, null)
    //---create bonus group
    this.createGroup('fly', 'fly1', 1, {x: 0.03, y: 0.03}, {x: this.socketCenterPosition[Math.floor(Math.random() * 6)], y: 110, stepX: 120}, 0, config.createAnimation('fly', 3, 6, -1))
    //---create targets group
    this.createGroup('target', 'target', 6, {x: 0, y: 0}, {x: this.socketCenterPosition[0], y: 104, stepX: 120}, 0, null)
   
   

    //create enemy emu
    this.enemyEmu = this.physics.add.sprite(config.width + 100, config.height - 260, 'emu1').setScale(0.5) // set position and pic player /Scale To
    config.createAnimation('emu', 6, 15, -1)

    //create enemy crab
    if (this.level > 5) {
      this.isCrab = true
      this.firstLogPos = this.multiPlatformGroup.getChildren()[3].children.entries[0].x / 2 - 35
      this.enemyCrab = this.physics.add.sprite(this.firstLogPos, config.height - 305, 'crab1').setScale(0.5) // set position and pic player /Scale To
      config.createAnimation('crab', 6, 5, -1)
      this.moveEnemyCrab() // call function Move Crab
    }


    //-------add setting animation if player move
    config.createAnimation('frog', 5, 40, 1)

  

    //---------------------------------- check collide objects

    // this.physics.add.collider(this.player, this.multiEnemyGroup);  // not used

    //--- check collide between cars and player  and call function 
    this.physics.add.overlap(this.player, this.multiEnemyGroup.children.entries, this.collidePlayerAndEnemy, null, this);

    //--- check collide between cars and player and platforms 
    this.physics.add.overlap(this.player, this.multiPlatformGroup.children.entries, this.collidePlayerAndPlatform, null, this);
    
    //--- check collide between player and bonus
    this.physics.add.overlap(this.player, this.multiBonusGroup.getChildren(), this.collidePlayerAndBonus, null, this)
    
    //--- check collide between player and socket
    this.physics.add.overlap(this.player, this.multiSocketGroup.getChildren(), this.collidePlayerAndSocket, null, this)
    
    //---check collide between player and enemy Emu
    this.physics.add.collider(this.player, this.enemyEmu, null, this.processCallbackCollidePlayerAndEmu, this)

   //---check collide between player and enemy Crab
   this.physics.add.collider(this.player, this.enemyCrab, null, this.processCallbackCollidePlayerAndCrab, this)

    //-----------------------------------create animation
    //--- death animation
    this.skullAnimation = config.createAnimation('skull', 3)


    //---------------------------- create Text
    this.textLevel =  this.add.text(10, 15, `LEVEL: ${this.level}`, {font: "15px Fantasy", fill: 'blue'})
    this.textScore =  this.add.text(140, 15, `SCORE: ${this.score}`, {font: "15px Fantasy", fill: 'white'})
    this.textHiScore = this.add.text(config.width / 2 - 50, 15, `HI-SCORE: ${this.hiScore}`, {font: "15px Fantasy",fill: 'red'})
    this.textTime =  this.add.text(config.width - 190, 15, `TIME: ${this.gameTime}`, {font: "15px Fantasy",fill: 'black'})
    this.textLife =  this.add.text(config.width - 56, 15, `LIFE: ${this.life}`, {font: "15px Fantasy",fill: 'green'})
   
    //---------------------------- create Sound
    //soundName, volume=1, loop=false,  delay=0, detune=50, rate=1, seek=0,
    
    this.soundMenuGame = () => config.createAudio('gameMusic', 0.4, true).play()
    this.soundMenuGame()
    
    this.soundMoveFrog = () =>     config.createAudio('moveFrog').play()
    this.soundInSocket = () =>     config.createAudio('inSocket').play()
    this.soundBonus = () =>        config.createAudio('bonus').play()
    this.soundDrowned = () =>      config.createAudio('drowned').play()
    this.soundCarHorn = () =>      config.createAudio('carHorn').play()
    this.soundEaten = () =>        config.createAudio('eaten').play()
    this.soundEatenFromEmu = () => config.createAudio('eatenFromEmu').play()
    this.soundEatenFromCrab = () => config.createAudio('eatenFromCrab').play()
    this.soundEatenVoice = () =>   config.createAudio('eatenVoice').play()
    this.soundEatenBird = () =>    config.createAudio('bird', 1).play()
    this.soundBusySocket = () =>   config.createAudio('busySocket').play() 
    this.soundAlarm = () =>        config.createAudio('alarm').play() 
    this.soundTimeOver = () =>     config.createAudio('timeOver').play() 
    

    //---------------------------------------- Time Counters
    //---level time
    this.levelTimeCounter = this.time.addEvent(
      { delay: 1000, callback: this.onEventLevelTimeCounter, callbackScope: this, loop: true })
  } 
  
 
  //================================== ((( UPDATE ))) ==========================================
  update(time, delta) {
    this.isCrab ? this.createNewEnemyCrab(): null
    this.movePlayer()
    this.moveEnemies()
    this.moveEnemyEmu()
    this.movePlatforms()
    this.onPlatform = false // always be false, if player not on platform   !!!Don't change position!!!
    !this.isTimeOver ? this.checkIsPlayerDrowned() : null // check if time on
    this.isInSocket = false // always be false, if player not in socket   !!!Don't change position!!!
    this.bgSky.tilePositionX += 0.5 // move background sky
    this.bgSea.tilePositionX -= 0.2 // move background sky

   
  }
  //======================================(((government functions)))

  //--------------------------------------- Time
  //---draw updated time
  onEventLevelTimeCounter() {
    //draw
    this.textTime.setText(`TIME: ${--this.gameTime}`)
    //play sound
    if (this.gameTime == 30) this.soundAlarm()
    //change color
    if (this.gameTime <= 30) this.textTime.setColor(this.gameTime & 1 ? 'red' : 'black')
    //time over
    if (this.gameTime == 0) {
      this.isDeath = true
      this.isTimeOver = true
      this.sound.removeByKey('alarm')  //stop sound 
      this.time.delayedCall(1200, () => this.levelTimeCounter.paused = false , null, this) //reset counter after delay time
      this.checkIsGameOver('timeOver')
    }
      
  } 
  
  //====================================== ((( custom functions ))) =========================================


  //------------------create groups
  createGroup(name, key, repeat, scaleObj, setXYObj, velocityXSpeed, animationFunction) {
    let group = this.physics.add.group({
      name: name, // name to find group
      key: key, // key must be real image,
      repeat: repeat -1, // add 3 time image to group
      setScale: scaleObj, // scale image  negative [x: -0.18] ,flip/ rotate image !!!
      setXY: setXYObj, // coordinate position, and increase step between group image    
      velocityX: velocityXSpeed, // set speed and direction  [* -1] rotation direction
      animation: animationFunction, // add function to set static animation
    })
    
    //activate animation
    if(animationFunction) group.playAnimation(name)
    
    
    //------------ add current group to parent his multi group
    if (['bigLog', 'smallLog', 'crocodile', 'bigTurtle', 'smallTurtle'].includes(name)) {
      this.multiPlatformGroup.add(group)
    } else if (['fly'].includes(name)) {
      this.multiBonusGroup.add(group)
    } else if (['target'].includes(name)) {
      this.multiSocketGroup.add(group)
    } else if (['palm'].includes(name)) {
      this.multiPalmGroup.add(group)
    } else {
        this.multiEnemyGroup.add(group)
    }
  }

  //--------------------------------------- Enemies

  moveEnemies = () => {
    for (const group of this.multiEnemyGroup.children.entries) {
      group.children.iterate(function (child) {
        const nameCurrentChild = child.texture.key.slice(0, -1)
        //-------reset car position
        if (['red', 'bus', 'truck',].includes(nameCurrentChild)) {
          if (child.x < -100) {
            child.x = config.width + 100
            // this.enemyPolice.destroy()
          }
        } else { //other cars
          if (child.x > config.width + 100) {
            child.x = -100
          }
        }

      })
    }
  }
  //----emu
  moveEnemyEmu() {
    const emu = this.enemyEmu.anims.play('emu', true)
    this.enemyEmu.x -= this.emuSpeed
    if (this.enemyEmu.x < -100) {
     this.enemyEmu.x = this.game.config.width +  Phaser.Math.Between(10,20) * 100  // random between 1 and 20 second
    }
    if (this.enemyEmu.x == this.game.config.width) {     
      this.soundEatenBird()
    } 
  }

  processCallbackCollidePlayerAndEmu() {
    this.isDeath = true
    this.checkIsGameOver('eatenFromEmu') 

  }

  //----crab
  moveEnemyCrab() {
    const crab = this.enemyCrab.anims.play('crab', true)
    let log = this.multiPlatformGroup.getChildren()[3].children.entries[0]
    this.enemyCrab.setVelocityX(this.speedBigLog + 0.01)
  }

  createNewEnemyCrab() {  
    this.physics.add.collider(this.player, this.enemyCrab, null, this.processCallbackCollidePlayerAndCrab, this)
    if (this.enemyCrab.x > config.width + 100) {
      this.enemyCrab = this.physics.add.sprite(-100, config.height - 305, 'crab1').setScale(0.5) // set position and pic player /Scale To
      this.moveEnemyCrab() 
      }
  }

  processCallbackCollidePlayerAndCrab() {
    console.log('crab kill you');
    this.scene.setActive(false); // stop game
    this.enemyCrab.destroy()     // kill crab
    this.isCrab = false   //stop update function
    this.isDeath = true
    this.checkIsGameOver('eatenFromCrab') 
  }


  //--------------------------------------- Platform

  collidePlayerAndPlatform(player, platform) {
    // check body is buffering border with start end platform
    if (player.body.right - 20 > platform.body.left && player.body.left < platform.body.right - 18) { 
       // check is crocodile platform
      if (platform.texture.key.slice(0, -1) == 'crocodile' && player.x > platform.body.right - 30) {
        this.isDeath = true
        this.scene.setActive(false) //stop all game
        this.checkIsGameOver('eaten')    
      }

    this.onPlatform = true // set player on platform
    let direction = 1
    platform.texture.key.includes('smallTurtle') ? direction = -1 : null //get children by name and change direction
    platform.texture.key.includes('bigTurtle') ? direction = -1 : null //get children by name and change direction
    player.setVelocityX(platform.body.speed * direction)    
   }
  }


  movePlatforms = () => {
    for (const group of this.multiPlatformGroup.getChildren()) {
      group.children.iterate(function (child) {
        const nameCurrentChild = child.texture.key.slice(0, -1)
        //--------reset platform position
        if (['bigLog', 'smallLog', 'crocodile'].includes(nameCurrentChild)) {
          if (child.x > config.width + 100) {
            child.x = -100
          }
        } else { //other
          if (child.x < -100) {
            child.x = config.width + 100
          }
        }

      })
    }
  }

  //---------------------------------------Player
  //---create player
  createPlayer(xPos = Number, yPos = Number, imgName = String) {
    const newPlayer = this.physics.add.sprite(xPos, yPos + 10, imgName).setScale(0.12) // set position and pic player /Scale To
    newPlayer.setCollideWorldBounds(true) // prevent out of screen
    //newPlayer.setBounce(0.2)  // - jump after down in the floor
    //newPlayer.setGravityY(300) // -  change default gravity for all in new setting

    //-------add setting animation if player move
    config.createAnimation('frog', 5, 40, 1)
    return newPlayer
  }

  //--- move player
  movePlayer() {
    // in plyer not in platform current velocity = 0
    if (!this.onPlatform) this.player.body.stop();

    if (!this.isKeyDown) {
      this.isKeyDown = true
      if (this.input.keyboard.checkDown(this.cursors.up, 300)) {
        this.player.y -= 40
        this.player.anims.play('frog', true).setAngle(0) //animation and rotate image
        this.soundMoveFrog()
      } else if (this.input.keyboard.checkDown(this.cursors.down, 300)) {
        this.player.y += 40
        this.player.anims.play('frog', true).setAngle(180)
        this.soundMoveFrog()
      } else if (this.input.keyboard.checkDown(this.cursors.left, 300)) {
        this.player.x -= 40
        this.player.anims.play('frog', true).setAngle(-90) //animation and rotate image
        this.soundMoveFrog()
      } else if (this.input.keyboard.checkDown(this.cursors.right, 300)) {
        this.player.x += 40
        this.player.anims.play('frog', true).setAngle(90) //animation and rotate image
        this.soundMoveFrog()
      }
   
      // }
      // else {  // stop move
      //   this.player.setMaxVelocity(0,0);
      //   this.player.anims.play('turn');
      // }

      // if (cursors.up.isDown && player.body.touching.down) {  // jump
      //   player.setVelocityY(-330);
   
      setTimeout(() => this.isKeyDown = false, 100)
    }

    if (this.player.getCenter().y >= 570) this.player.y = 582 // fix Y position
    if (this.player.x >= 790) this.player.x = 782 // fix X position if cross rightBorder
    if (this.player.x <= 10) this.player.x = 22 // fix X position if cross lefBorder
  }

  //---check player collide with enemy
  collidePlayerAndEnemy(player, enemy) { //player was death
    this.isDeath = true
    this.checkIsGameOver('hitCar')
  }

  
  checkIsPlayerDrowned() {
    if (this.player.y < 310 && this.player.y > 30 && this.player.body.velocity.x == 0 && !this.isInSocket) {
        setTimeout(() => {
          if (this.player.body.velocity.x == 0) {
            this.isDeath = true
            this.scene.setActive(false) //stop all game
            this.checkIsGameOver('drowned')
            this.player.body.velocity.x = 1
          }
        }, 100)  //don't change
    } 
  }


  collidePlayerAndBonus(player, fly) { //disable fly and set it to invisible and inactive mode
    fly.disableBody(true, true)
    this.soundBonus()
    this.score += 500
    this.textScore.setText(`SCORE: ${this.score}`) //increase score
    this.bonusChangePosition()
  
  }


  collidePlayerAndSocket(player, target) {
    this.sound.removeByKey('alarm')  //stop alarm sound if active 
    this.score += this.gameTime * 10  // add points from last time
    this.gameTime = 60
    this.isInSocket = true
    setTimeout(() =>  this.soundInSocket() , 200); // make sound
    target = this.add.image(target.x, target.y, 'socketFrogImg').setScale(0.17) // set new pic in socket
    this.score += 1000 * this.level
    this.textScore.setText(`SCORE: ${this.score}`) //increase score
    if (this.score >= this.hiScore) {
      this.textHiScore.setText(`HI-SCORE: ${this.score}`) //update hiScore
    }

    this.socketBusyPosition[target.x] = true  //fill socket  
    this.socketCurrentBusyPosition.push(target.x)
  
    if (this.socketCurrentBusyPosition.filter(x => x == target.x).length > 1) { // check is socket busy

      // this.isDeath = true
      this.checkIsGameOver('busySocket')
      return
    }
     
    if (Object.values(this.socketBusyPosition).every(x => x == true)) { // level complete all sockets are full
      //clear position
      this.socketBusyPosition = { 102: false, 222: false, 342: false, 462: false, 582: false, 702: false }
      console.log('Level Complete -----------');
      this.levelComplete()
      return
    } 

    this.resetPlayerPosition()
  }
  

  bonusChangePosition() {
      setTimeout(() => {     
        //get all free socket position
        let freeSocketPos = Object.keys(this.socketBusyPosition).filter(x => this.socketBusyPosition[x] == false)
        this.multiBonusGroup.clear(true, true) // clear all group children
        //create new fly
        this.createGroup('fly', 'fly1', 0, { x: 0.03, y: 0.03 },
          { x: Number(freeSocketPos[Phaser.Math.Between(0, freeSocketPos.length - 1)]), y: 110, }
          , 0, config.createAnimation('fly', 3, 6, -1))

    }, Phaser.Math.Between(5,20) * 1000);
  }
  
 
  checkIsGameOver(typeOfDeath) { 

    this.levelTimeCounter.paused = true //stop level timer
    this.input.keyboard.enabled = false // disable keyboard
    this.physics.pause() // stop game
    this.player.anims.play('skull', true).setScale(0.10).setAngle(0)  //play death animation

    if (this.isDeath) {
      this.life-- //decrease life
      this.textLife.setText(`LIFE: ${this.life}`) // print new update live
      // this.player.setTint('red') //change player color
      this.isDeath = false
    }

    if (typeOfDeath == 'drowned') {
       this.soundDrowned()    
    } else if (typeOfDeath == 'hitCar') {
      this.soundCarHorn() 
    } else if (typeOfDeath == 'eatenFromEmu') {
      this.soundEatenFromEmu()
    } else if (typeOfDeath == 'eaten') {
      this.soundEaten() 
      setTimeout(() => this.soundEatenVoice(), 500);
    } else if (typeOfDeath == 'busySocket') {
      this.soundBusySocket()
    } else if (typeOfDeath == 'timeOver') {
      this.soundTimeOver()
    } else if (typeOfDeath == 'eatenFromCrab') {
      this.soundEatenFromCrab()
    }
    
    setTimeout(() => {
      this.input.keyboard.enabled = true // disable keyboard
      this.player.anims.stop() // stop animation
      this.player.setTexture('frog1').setScale(0.12) // restore image frog
      this.physics.resume()  // restore game
      this.resetCurrentData()

      if (this.life > 0) {   
       this.resetPlayerPosition()
      } else {
        this.isGameOver = true
        console.log('You are death!');
        this.resetAllPlayerData()
        this.scene.start('GameOverScene')  // go to GameOverScene state
      }
      this.levelTimeCounter.paused = false //activate level timer again
    }, 2000);
  }

  
  levelComplete() {
    console.log('level Complete');
    this.level++   //increase level
    let obj = {
      'hiScore' :this.hiScore,
      'score' :this.score,
      'level' :this.level,
      'life' :this.life,
    }
    
    //save current progress to localStorage
    localStorage.setItem('gameData', JSON.stringify(obj));

    //reset current data to next level
    this.scene.restart()
    setTimeout(() => this.resetCurrentData(), 1500); 
    
    //load data saved progress data
    var values = localStorage.getItem('gameData');
    [this.hiScore, this.score, this.level, this.life] = Object.values(JSON.parse(values))

  }


  resetPlayerPosition() {
    this.textTime.setColor('black')
    this.sound.removeByKey('alarm')  //stop alarm sound if active 
    this.scene.setActive(false);
    this.player.disableBody(true, true) 
    this.input.keyboard.enabled = false
    
    setTimeout(() => {
      this.input.keyboard.enabled = true
      this.player.setAngle(0)
      this.player.enableBody(true, config.width / 2 - 18, config.height, true, true) 
      this.scene.setActive(true);
    },500)
  }

  
  resetCurrentData() {
    console.log('Reset Current Data DONE!');
    this.gameTime = 60
    this.isKeyDown = false
    this.onPlatform = false
    this.isInSocket = false
    this.isDrowned = false
    this.isDeath = false
    this.isTimeOver = false
    this.socketCurrentBusyPosition = []
  }

  resetAllPlayerData() {
    console.log('Reset All Data DONE!');
    this.isKeyDown = false
    this.onPlatform = false
    this.isInSocket = false
    this.isDrowned = false
    this.isDeath = false
    this.isGameOver = false
    this.isTimeOver = false
    this.carSpeed = 30            
    this.platformSpeed = 30 
    this.emuSpeed = 1
    //add crab , serena
    this.gameTime = 60
    this.level = 1
    this.life = 3
    this.hiScore = 6500
    this.score = 0
    this.socketCenterPosition = [102, 222, 342, 462, 582, 702]
    this.socketBusyPosition = { 102: false, 222: false, 342: false, 462: false, 582: false, 702: false }
    this.socketCurrentBusyPosition = []
  }

};