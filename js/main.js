

var machine = (function () {

    var current = 'start',

    states = {

        start : {
            params : {},
            tick : function () {

                render.inject('gamearea');
                current = 'area';

            }

        },

        area : {
            params : {},
            tick : function () {}

        },

        shop : {
            params : {},
            tick : function () {}

        }

    },

    loop = function () {

        requestAnimationFrame(loop);

        states[current].tick();
        render.draw(current);

    };

    // hold on to yuor butts...
    loop();

    return {

        setState : function (newState, params) {

            current = newState;
            states[newState].params = params;

        },

        getParams : function (state) {

            state = state === undefined ? current : state;

            return states[state].params;

        },

        getState : function () {

            return current;

        }

    }

}
    ());
