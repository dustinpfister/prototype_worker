var render = (function () {

    var canvas,
    ctx,
    w = 640,
    h = 480,

    states = {

        start : function () {},

        area : function () {

            var stack,
            color;

            ctx.fillStyle = '#ffff00';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            stack = area.getStack();
            cellWidth = w / stack.w;
            cellHeight = h / stack.h;

            stack.points.forEach(function (point) {

                if (point.val.building) {

                    switch (point.val.building.type) {

                    case 'house':
                        color = '#ff0000';
                        break;
                    case 'shop':
                        color = '#0000ff';
                        break;
                    default:
                        color = '#000000';
                    }

                    ctx.fillStyle = color;
                    ctx.fillRect(point.x * cellWidth, point.y * cellHeight, cellWidth, cellHeight);

                }

            });

        },

        shop : function () {

            ctx.fillStyle = '#0000ff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

        }

    },

    api = {

        inject : function (id) {

            canvas = document.createElement('canvas')
                ctx = canvas.getContext('2d');

            canvas.width = w;
            canvas.height = h;

            ctx.fillStyle = '#00ffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            document.getElementById(id).appendChild(canvas);

            // attach events
            if (control) {

                control.attachToCanvas(canvas);

            }

        },

        draw : function (state) {

            states[state]();

        }

    };

    return api;

}
    ());
