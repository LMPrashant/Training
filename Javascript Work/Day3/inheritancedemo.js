class Mobile{
    Processor;
    Camera;
    Speaker;

    constructor(Processor,Camera,Speaker){
        this.Camera= Camera,
        this.Processor = Processor,
        this.Speaker = Speaker
    }
}

class Iphone extends Mobile{
    Model;
    constructor(pros,cam,speak,model){
        super(pros,cam,speak);
        this.Model=model
    }

    show(){
        console.log(this.Camera+" "+this.Processor+" "+this.Speaker+" "+this.Model+" ");
    }
}

class Android extends Mobile{
    version;
    constructor(pros,cam,speak,ver){
        super(pros,cam,speak);
        this.version=ver
    }
    show(){
        console.log(this.Camera+" "+this.Processor+" "+this.Speaker+" "+this.version+" ");
    }
}

let mob = new Iphone("M2","Triple","Dual Dolby","Iphone 14pro");
mob.show();

let mob2 = new Android("Snapdragon","Quad","Dolby Atom","Note 23 Ultra");
mob2.show();