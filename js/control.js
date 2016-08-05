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

        states[machine.getState()](e, x, y, box);

        done(e, x, y, box);

    },

    states = {

        start : function () {},
        area : function (e, x, y, box) {

            var stack = area.getStack(),
            canvas = render.canvas,
            cellWidth = canvas.width / stack.w,
            cellHeight = canvas.height / stack.h,
            cellX = Math.floor(x / cellWidth),
            cellY = Math.floor(y / cellHeight),
            point = stack.getPoint(cellX, cellY, 0);

            if (point.val.building) {

                switch (point.val.building.type) {

                case 'shop':

				    console.log('shop');
				
                    machine.setState('shop');

                    break;

                }

            }


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
