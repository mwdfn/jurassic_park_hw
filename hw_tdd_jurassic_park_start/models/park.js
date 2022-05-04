const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinoCollection = [];
};

Park.prototype.addDino = function (dinosaur) {
    this.dinoCollection.push(dinosaur);
};

Park.prototype.removeDino = function (dinosaur) {
    const indexDinoCollection = this.dinoCollection.indexOf(dinosaur);
    this.dinoCollection.splice(indexDinoCollection, 1)
};
//  In splice, 'indexDinoCollection' is the starting index position, '1' is the number of things to be deleted.

module.exports = Park;

