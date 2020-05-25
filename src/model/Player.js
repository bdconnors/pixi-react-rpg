class Player{
    constructor(x = 100,y = 100,direction = "right",spritesheet = null){
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.spritesheet = spritesheet;
        this.onScreen = false;
        this.moving = false;
    }
    setPosition(x,y){
        this.x = x;
        this.y = y;
    }
    update(keys){
        let x = this.x;
        let y = this.y;
        let direction = this.direction;
        if(keys.up){
            y -= 5;
            direction = "back";
        }else if(keys.down){
            y += 5;
            direction = "fwd";
        }else if(keys.left){
            x -= 5;
            direction = "left";
        }else if(keys.right){
            x += 5;
            direction = "right";
        }
        if(keys.event === "keydown"){

        }
        this.setPosition(x,y);
        this.setDirection(direction);
        this.setMoving(keys.pressed);
    }
    setMoving(moving){
        this.moving = moving;
    }
    getTexture(){
        return this.spritesheet.animations[`walk-${this.direction}`]
    }
    setDirection(dir){
        this.direction = dir;
    }
    setSpritesheet(spritesheet){
        this.spritesheet = spritesheet;
    }
}
export default Player;