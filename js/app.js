var collision_limit = 40; // distance (in pixel) required to declare a colision

//enemy class definition
var Enemy = function() {
    this.x = 0 
    this.y = RandomPositionOnRoute();
    this.speed = RandomSpeed(); 
    this.sprite = 'images/enemy-bug.png';
}

//returns a random position on the route: it can be either on the 1st row, 2nd row or 3rd row. Useful for enemies appearance
var RandomPositionOnRoute = function() {
    return 50 + 85*(Math.floor(Math.random()*3));
}

//returns a random speed for the enemies
var RandomSpeed = function() {
    return 1+Math.random()*3
}

// Update the enemy's position after dt
Enemy.prototype.update = function(dt) {
    this.x = this.x + 100*dt*this.speed;
    this.render();
    if(this.x > 420){
        this.restart();  
    }
}

//restart the enemy (for when it has fully crossed the road) 
Enemy.prototype.restart = function() {
    this.x = 0;
    this.y = RandomPositionOnRoute();
    this.speed = RandomSpeed(); 
    this.sprite = 'images/enemy-bug.png';
}

// Draws the enemy on the screen
 Enemy.prototype.render = function() {
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
 }

//Player class definition
 var Player = function(){
     this.x = 200;
     this.y = 400;
     this.death_toll = 0; // number of times the player died
}

//Render the player on the screen
 Player.prototype.render = function() {
     ctx.drawImage(Resources.get(this.sprite),this.x, this.y)
 }

//update the player's position
 Player.prototype.update = function() {
    this.checkcollision();
    this.render();
 }

//check if the player isn't colliding with anyone
Player.prototype.checkcollision = function(){
    for (const enemy of allEnemies){
        if((Math.abs(this.x - enemy.x) < collision_limit) & (Math.abs(this.y - enemy.y) < collision_limit)){
             console.log("collision!");
             this.collision();
        }
    }
}


//restart the player position
Player.prototype.collision = function() {
    this.x = 200;
    this.y = 400;
    player.death_toll = player.death_toll+1;
    document.getElementById("title").innerHTML = "Number of Deaths:" + this.death_toll;
}

//handles the keyboard pressing to move the player
Player.prototype.handleInput = function(turn) {
    console.log(this.y);
    if(turn === 'up' & this.y === 60){
        this.declarevictory();
    }
    if(turn === 'left' & this.x > 0){
        this.x = this.x - 100; 
    }
    if(turn === 'right' & this.x < 400){
        this.x = this.x + 100; 
    }
    if(turn === 'up' & this.y > 45){
        this.y = this.y - 85; 
    }
    if(turn === 'down' & this.y < 385){
        this.y = this.y + 85; 
    }
}

//handles the event of a victory (when the players reaches the top layer of the game); restart the death toll counter and restart game
Player.prototype.declarevictory = function() {
    console.log("victory");
    confirm("Victory! You died " + this.death_toll + "times.");
    this.death_toll = 0;
    this.x = 200;
    this.y = 400;
    restart_game();
}

//declare the enemies and the player

enemy1 = new Enemy;
enemy2 = new Enemy;
enemy3 = new Enemy;
enemy4 = new Enemy;

allEnemies = [enemy1, enemy2, enemy3, enemy4];
player = new Player();