class Observable{
    constructor(){
        this.observers=[]
    }
    register(observer){
        this.observers.push(observer);
    }
    unregister(observer){
        this.observers=this.observers.filter((obs)=> obs !== observer);
    }
    notify(message){
        this.observers.forEach((observer)=> {
            observer(message);
        });
    }
}
const observable= new Observable();

function observer1(message){
    console.log(`First observer ${(message)}`)
}
function observer2(message){
    console.log(`Second observer ${(message)}`)
}

observable.register(observer1);
observable.register(observer2);

observable.notify("Hello Devs")

observable.unregister(observer2);

observable.notify("Observing the observer");
