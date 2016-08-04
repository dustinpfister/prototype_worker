var render = (function () {

    var canvas,
    ctx;

    var api = {

        inject : function (id) {

            canvas = document.createElement('canvas')
                ctx = canvas.getContext('2d');

            canvas.width = 640;
            canvas.height = 480;

            ctx.fillStyle = '#00ffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            document.getElementById(id).appendChild(canvas);

        },

        draw : function (state) {}

    };

    return api;

}
    ());
