const config = {
  type: Phaser.AUTO,
  // TO DO 1: Have something show up
  // width: ?,
  // height: ?,

  // backgroundColor: ?, 
  // colors: https://www.design-seeds.com/
  // use this for now: "C3D9E6"
  
  // physics: {
  //   default: 'arcade',
  //   arcade: {
  //     gravity: { y: 200 },
  //     enableBody: true,
  //   }
  // },
  // scene: {
  //   preload,
  //   create,
  //   update
  // }
};

const game = new Phaser.Game(config);

function preload() {
  // TO DO 2: Load assets (player, platform, pick a star)
}

// TO DO 3: Set up game state (score)

function create() {
  // TO DO 4: Make a player
  
  // TO DO 5: Set up platform
  // const platforms = this.physics.add.staticGroup();
  // platforms.create(225, 490, 'platform').setScale(1, .3).refreshBody();

  // TO DO 6: Add score text

  // TO DO 7: Add player/platform collision and cursors

  // TO DO 8: Add star logic
  
  // const stars = this.physics.add.group();

  // function starGen () {
  //   const xCoord = ?;
  //   stars.create(xCoord, 10, 'star');
  // }

  // const starGenLoop = this.time.addEvent({
  //   delay: ?,
  //   callback: starGen,
  //   callbackScope: this,
  //   loop: true,
  // });

  // this.physics.add.collider(stars, platforms, function (star) {
  //   star.destroy();
  // TO DO 9: Update score
  // })
  
  // TO DO 10: Add game over logic
  // this.physics.add.overlap(gameState.player, stars, () => {
    
  //   this.input.on('pointerup', () =>{

  //   });
  // });
}

function update() {
  //TO DO 7.5: update the update function
  // if (gameState.cursors.left.isDown) {
  //   gameState.player.setVelocityX(-160);
  // } 

  // what else?

  // else {
  //   gameState.player.setVelocityX(0);
  // }
}
