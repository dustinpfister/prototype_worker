var area = (function () {

    var areaCount = 1,
    workerCount = 2,

    areas = [],

    Area = function (id) {

        this.id = id;
        this.livingWage = 10;
        this.stack = new Stack({w:16,h:12,d:1,val:{}});
        this.workers = [];

    },

    api = {

        createWorld : function () {

            // push Areas to the areas array
            var i = 0, newArea;
            while (i < areaCount) {

                newArea = new Area(i);

                newArea.workers.push(new Worker(5,1,1));

                areas.push(newArea);

                i += 1;

            }

        }

    };

    api.createWorld();

    console.log(areas);

    return api;

}
    ());
