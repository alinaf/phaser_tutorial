const config = {
  type: Phaser.AUTO,
  width: 450,
  height: 500,

  backgroundColor:"C3D9E6", 
  
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
      enableBody: true,
    }
  },
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(config);

function preload() {
  // TO DO 2: Load assets (player, platform, pick a star)
  this.load.image('star', 'assets/blueStar.png');
  this.load.image('umbrella', 'assets/umbrella.png');
  this.load.image('platform', 'assets/platform.png');
}

// TO DO 3: Set up game state (score)
const gameState = {
  score: 0,
}

function create() {
  // TO DO 4: Make a player
  gameState.player = this.physics.add.sprite(200, 400, 'umbrella');
  gameState.cursors = this.input.keyboard.createCursorKeys();

  
  // TO DO 5: Set up platform
  const platforms = this.physics.add.staticGroup();
  platforms.create(225, 490, 'platform').setScale(1, .3).refreshBody();

  // TO DO 6: Add score text
  gameState.scoreText = 
  this.add.text(195, 480, 'Score: 0', { fontSize: '15px', fill: '#000000' });

  // TO DO 7: Add player/platform collision and cursors
  gameState.player.setCollideWorldBounds(true);

  this.physics.add.collider(gameState.player, platforms);

  // TO DO 8: Add star logic
  
  const stars = this.physics.add.group();

  function starGen () {
    const xCoord = Math.random() * 450;
    stars.create(xCoord, 10, 'star');
  }

  const starGenLoop = this.time.addEvent({
    delay: 300,
    callback: starGen,
    callbackScope: this,
    loop: true,
  });

  this.physics.add.collider(stars, platforms, function (star) {
    star.destroy();
    gameState.score += 3;
    gameState.scoreText.setText("score: " + gameState.score);

  //TO DO 9: Update score
  })
  
  this.physics.add.overlap(gameState.player, stars, () => {
    this.physics.pause();
    starGenLoop.destroy();
    this.add.text(195, 200, 'Game over', { fontSize: '15px', fill: '#000000' });
    this.add.text(195, 300, 'Click to restart', { fontSize: '15px', fill: '#000000' });

    this.input.on('pointerup', () =>{
      this.scene.restart();
    });
  });
}

function update() {
  //TO DO 7.5: update the update function
  if (gameState.cursors.left.isDown) {
    gameState.player.setVelocityX(-160);
  } 
  else if (gameState.cursors.right.isDown) {
    gameState.player.setVelocityX(160);
  }
   else if (gameState.cursors.up.isDown) {
    gameState.player.setVelocityY(-50);
  }
  else {
    gameState.player.setVelocityX(0);
  }
}
