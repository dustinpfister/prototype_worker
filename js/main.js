

var machine = (function () {

    var current = 'start',

    states = {

        start : function () {

            render.inject('gamearea');
            current = 'area';

        },

        area : function () {},

        shop : function(){

        }

    },

    loop = function () {

        //requestAnimationFrame(loop);

        states[current]();
        render.draw(current);

    };

    // hold on to yuor butts...
    loop();

    return {

        setState : function (state) {

            current = state;

        },

        getState : function () {

            return current;

        }

    }

}
    ());
