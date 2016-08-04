var area = (function () {

    var areaCount = 1,
    current = 0,

    areas = [],

    Area = function (id) {

        this.id = id;
        this.livingWage = 10;
        this.minWage = 5;
        this.houseCount = 2;
        this.shopCount = 1;
        this.stack = new Stack({
                w : 16,
                h : 12,
                d : 1
            });
        this.workers = {

            current : [], // current total of workers
            startCount : 2,
            maxCount : 5

        }

    },

    Building = function (id, type) {

        this.id = id;
        this.type = type;

    },

    api = {

        createWorld : function () {

            // push Areas to the areas array
            var i = 0,
            b,
            w,
            newArea,
            options,
            buildIndex;
            while (i < areaCount) {

                newArea = new Area(i);
                options = newArea.stack.buildOptions();

                // houses
                b = 0;
                while (b < newArea.houseCount) {

                    buildIndex = options.splice(Math.floor(Math.random() * options.length), 1);
                    newArea.stack.points[buildIndex].val.building = new Building('a:' + i + 'h:' + b, 'house')

                        b += 1;

                }

                // shops
                b = 0;
                while (b < newArea.shopCount) {

                    buildIndex = options.splice(Math.floor(Math.random() * options.length), 1);
                    newArea.stack.points[buildIndex].val.building = new Building('a:' + i + 's:' + b, 'shop')

                        b += 1;

                }

                // workers
                w = 0;
                newArea.workers.current = [];
                while (w < newArea.workers.startCount) {

                    newArea.workers.current.push(new Worker(newArea, 5, 1, 1));

                    w += 1;

                }

                areas.push(newArea);

                i += 1;

            }

        },

        // get the stack of the current area
        getStack : function () {

            return areas[current].stack;

        }

    },

    proto = Area.prototype;

    // get all Area buildings of the given type
    proto.getBuildings = function (type) {

        buildings = [];

        this.stack.points.forEach(function (point) {

            if (point.val.building) {

                buildings.push(point.val.building);

            }

        });

        return buildings;

    }

    api.createWorld();

    console.log(areas);

    return api;

}
    ());
