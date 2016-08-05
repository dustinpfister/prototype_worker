var control = (function () {

    var userMain = function (e, done) {

        var box = e.target.getBoundingClientRect(),
        x,
        y;

        e.preventDefault();

        if (e.touches) {

            x = e.touches[0].clientX;
            y = e.touches[0].clientY;

        } else {

            x = e.clientX;
            y = e.clientY;

        }

        x = Math.floor(x - box.left);
        y = Math.floor(y - box.top);

        states[machine.getState()](e,x,y,box);

        done(e, x, y, box);

    },

    states = {

        start : function () {},
        area : function (e,x,y,box) {

		    var stack = area.getStack(),
			canvas = render.canvas;
		
		    console.log(render);
		
            console.log('area');

        },
        shop : function () {

            console.log('shop');

        }

    };

    return {

        // attach events to the given canvas
        attachToCanvas : function (canvas) {

            canvas.addEventListener('mousedown', function (e) {

                userMain(e, function (e, x, y, box) {});

            });

        }

    }

}
    ());
