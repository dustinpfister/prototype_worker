var area = (function () {

    var areaCount = 1,
    workerCount = 2,

    areas = [],

    Area = function (id) {

        this.id = id;
        this.stack = new Stack(16, 12, {});

    },

    api = {

        createWorld : function () {

            var i = 0;
            while (i < areaCount) {

                areas.push(new Area(i));

                i += 1;

            }

        }

    };

    api.createWorld();

    return api;

}
    ());
