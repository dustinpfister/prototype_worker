

var machine = (function () {

    var current = 'start',

    states = {

        start : {
			
			tick: function () {

            render.inject('gamearea');
            current = 'area';

			}
			
        },

        area : {tick:function () {}},

        shop : {tick:function(){

        }}

    },

    loop = function () {

        requestAnimationFrame(loop);

        states[current].tick();
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
