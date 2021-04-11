class PlayerCloud {
    constructor(x, y, widh, height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image=loadImage("images/playercloud.png")
    }

    falldeath(){
        if(PlayerCloud.y>770){
            textSize(50);
            fill("#e23b22")
            text("GAME OVER", camera.x, camera.y);
        }
    }

}