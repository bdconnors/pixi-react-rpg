class Keyboard{
    constructor() {
        this.key = null;
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
        this.confirm = false;
        this.enabled = true;
        this.pressed = false;
        this.released = false;
    }
    disable(){
        this.enabled = false;
    }
    enable(){
        this.enabled = true;
    }
    update(e){
        if(this.enabled) {
            this.key = e.key;
            this.confirm = this.key === "enter";
            this.up = this.key === "ArrowUp" || this.key === "w";
            this.down = this.key === "ArrowDown" || this.key === "s";
            this.left = this.key === "ArrowLeft" || this.key === "a";
            this.right = this.key === "ArrowRight" || this.key === "d";
            this.pressed = e.type === "keydown";
            this.released = e.type === "keyup";
        }
    }
}
export default Keyboard;