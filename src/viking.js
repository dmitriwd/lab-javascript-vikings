// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
    }
    
    receiveDamage(damage){
        this.health = this.health - damage;
    }
    attack (){
        return this.strength;
    };
}
// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    };
    
    receiveDamage(damage) {
        this.health > 0 ? `${this.name} has received ${this.damage} 
        points of damage` :
            `${this.name} has died in act of combat`;
    };

    battleCry() {
        return 'Odin Owns You All!';
    }
};
// Saxon
class Saxon extends Soldier {
    super();
    receiveDamage(damage) {
        this.health > 0 ? `${this.name} has received ${this.damage} 
        points of damage` :
            `${this.name} has died in act of combat`;
}

// War
class War {}
