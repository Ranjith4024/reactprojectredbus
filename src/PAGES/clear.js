class Main{
    constructor(){
       this.name = "names"
    }

    get = () => {
        console.log("aravindh");
    }

}


class Child extends Main{
    constructor(){
        super();
    }

    getData = () => {
       console.log( super.get);
    }

}
var obj = new Child()
obj.get()