
var Worker = (function(){

    var area = {

        livingWage : 10

    }

    Worker = function(rate, happyMulti, greedMulti){

        this.rate = rate;
        this.happy = 1;

        // profile
        this.happyMulti = happyMulti;    // how important being happy is to them
        this.greedMulti = greedMulti;    // how important money is to them.

        this.effort = 0;
        this.setEffort();

    },

    proto = Worker.prototype;

    // set effort based on current worker class values
    proto.setEffort = function(){

        var byPayRate = this.rate / area.livingWage * (this.greedMulti / this.happyMulti),
        byHappy = this.happy * this.happyMulti;

        console.log(byPayRate);

        this.effort = byPayRate + byHappy;

    };

    return Worker;


}());
