class Task{

    constructor(public id: number, public name: string, public child: Array<Task> = []){
        this.id = id;
        this.name = name;
        this.child = child;
    }

    public toRobot(tab: number): string{
        return `name: ${this.name}`
    }

    public clone():any {

        let cloneObj = Object.create(this);
       // var cloneObj = new (this.constructor() as any)(this.id, this.name);
        // cloneObj.id = id;
        // cloneObj.name = name;
        // for (var attribut in this) {
        // if (typeof this[attribut] === "object") {
        //     cloneObj[attribut] = this[attribut].clone();
        // } else {
        //     cloneObj[attribut] = this[attribut];
        // }
    
       return cloneObj;
    }   
}

class SeqTask extends Task{

    constructor(public id: number, public name: string, public child: Array<Task> = []){
        super(id, name, child);
    }

    public toRobot(tab: number): string{

        let childRobot = "";
        if(this.child){
            childRobot = this.child.reduce((childRobot, child)=> childRobot + "\n" + "                   ".substr(0, tab) + child.toRobot(tab + 1), "");
        }

        return `name: ${this.name}{\n${childRobot}\n}` 
    }
}

class ForTask extends SeqTask{


    public toRobot(tab: number): string{

        return super.toRobot(tab);
    }

}

class IfTask extends SeqTask{

    public toRobot(tab: number): string{

        return super.toRobot(tab);
    }

}

export{Task, SeqTask, ForTask, IfTask}