class LoadBar{
    constructor(
        view,
        animated = false,
        color = "success",
        scale = {
            h:.15,
            w:.25
        },
        position = {
            position:"absolute",
            top:(view.height-(view.height * scale.h)) / 2,
            left:(view.width-(view.width-(view.width * scale.w))) / 2,
            bottom:(view.height-(view.height * scale.h)) / 2,
            right:(view.width-(view.width-(view.width * scale.w))) / 2
        },
        progress={
            min:0,
            max:100,
            current:0
        }){
        this.view = view;
        this.animated = animated;
        this.color = color;
        this.position = position;
        this.progress = progress;
    }

}
export default LoadBar