var render = (function () {

    var canvas,
    ctx,
    w = 640,
    h = 480,

    states = {

        start : function () {},

        run : function () {

            var stack;

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

                    ctx.fillStyle = '#ff0000';
                    ctx.fillRect(point.x * cellWidth, point.y * cellHeight, cellWidth, cellHeight);

                }

            });

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

        },

        draw : function (state) {

            states[state]();

        }

    };

    return api;

}
    ());
