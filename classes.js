class Animal{
    constructor(name, age){
        this.name= name;
        this.age= age;
    }
    speak(){
        console.log(`${this.name} is of age ${this.age}`)
        const Ramu=()=>{
            console.log("ramu is good Boy-----");
            console.log(this, "this--in---ramu-----");
        }
        Ramu();
        console.log(this,"this is--------")
    }
}


class Dog extends Animal{
    constructor()
}
const rubyDog= new Animal("ruby", 25);

rubyDog.speak()