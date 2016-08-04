
var Worker = (function(){

    var area = {

        livingWage : 10

    }

    Worker = function(area, rate, happyMulti, greedMulti){

        this.rate = area.minWage;
        this.happy = 1;

        // profile
        // how important being happy is to them
        this.happyMulti = 1 + Number(  (Math.random() * 2).toFixed(2) );

        // how important money is to them.
        this.greedMulti = 1 + Number(  (Math.random() * 2).toFixed(2) );

        this.effort = 0;
        this.setEffort();

        // where do they live?
        var options = area.getBuildings('house');

        // place in random house
        this.home = options[ Math.floor( Math.random() * options.length )].id;

    },

    proto = Worker.prototype;

    // set effort based on current worker class values
    proto.setEffort = function(){

        var byPayRate = this.rate / area.livingWage * (this.greedMulti / this.happyMulti),
        byHappy = this.happy * this.happyMulti;

        this.effort = Number((byPayRate + byHappy).toFixed(2));

    };

    return Worker;


}());
