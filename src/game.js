const config = {
  width: 800,
  height: 600,
  backgroundColor: 'rgb(0, 10, 50)', //'rgb(0,0,100)'
  backgroundText: (200, 200, 'Loading...', {font: "30px Arial" , fill: 'yellow'}),
  type: Phaser.AUTO,
  parent: 'game',
  scene: [IntroScene, GameScene, MenuScene,  CreditsScene, ControlsScene, GameOverScene, ],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false, //false default
      gravity: { y: 0 }, // default gravity
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  //add custom function to global use
    loadMultiImages,
    createAudio,
    createAnimation,
    transitionBetweenScene,  
    createText,
};


const game = new Phaser.Game(config)

//--------------------------- custom functions

function createAudio(soundName, volume = 1, loop = false, delay = 0, detune = 50, rate = 1, sek=0) {
   const musicConfig = { 
    volume,          //default 1
    loop,            //default false 
    delay,           //default 0
    detune,          //default 5
    rate,            //default 1
    sek,            //default 0  
    duration: 0
   }
  
  const music = game.sound.add(soundName, musicConfig)
  return music //.play()

}


function loadMultiImages(sceneName = String, imgName = String, imgPath = String, numPictures = Number,) {
  game.scene.scenes.map(x => x.scene).forEach(el => {  
      if (el.key == sceneName)
        for (let i = 1; i <= numPictures; i++) {
          el.scene.load.image(`${imgName + i}`, `${imgPath + i}.png`)
        }
    })
}


function createAnimation(key = String, numberOfFrames = Number, frameRate = 10, repeatOption = -1, duration = 0
  , yoyo = false, delay = 0 , repeatDelay=0) {
  
  //add frame animation objects
  let framesArray = []
  for (let i = 1; i <= numberOfFrames; i++) {
    framesArray.push({
      'key': key + i,
      'duration': 0
    })
  }

  const animation = game.anims.create({
    key: key, // name animation
    frames: framesArray,
    frameRate: frameRate,
    repeat: repeatOption,
    hideOnComplete: false,
    yoyo,        //default false 
    delay,       //default 0 
    repeatDelay, //default 0 
  })

  // console.log('animation     ' , animation);
  return animation
}


function createText(sceneName = String, x = 0, y = 0, text = 'Hello', fontSize = '46px', color = '#fff',
  backgroundColor = null, fontStyle = null, fontFamily = 'aAblasco',) {

  const textConfig = {
    fontFamily, // default 'Courier'
      fontSize,
      color,
      backgroundColor,
      fontStyle, 
      stroke: '#fff',
      strokeThickness: 0,
      shadow: {
          offsetX: '1',   //default 0
          offsetY:'1',    //default 0
          color: 'black',    //default #000
          blur: 'blur',           //0
          stroke: true,   // false
          fill: true      //false
      },
      align: 'left',  // 'left'|'center'|'right'|'justify'
      padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
      },
      maxLines: 0,
      lineSpacing: 0,
      fixedWidth: 0,
      fixedHeight: 0,
      rtl: false,
      testString: '|MÉqgy',
      wordWrap: {
          width: null,
          callback: null,
          callbackScope: null,
          useAdvancedWrap: false
      },
      metrics: false
      // metrics: {
      //     ascent: 0,
      //     descent: 0,
      //     fontSize: 0
      // }
  }

  let txt;
  game.scene.scenes.map(x => x.scene).forEach(el => {  
    if (el.key == sceneName)
      txt = el.scene.add.text(x, y, text , textConfig);
  })
  return txt
}


function transitionBetweenScene(sceneName) {
  let state;
  //get current scene

  game.scene.scenes.map(x => x.scene).forEach(el => el.key == sceneName ? state = el.scene : null)
  
  //circle
  let circle = state.add.circle(config.width / 2,config.height / 2, 0, 0x000000, 0.9)
  
  //circle tween
  state.tweens.add({
    targets: circle,
    radius: 500,
    duration: 400,
    yoyo: true,
    loop: 0,
    hold: 10,
  })

  return circle
}



