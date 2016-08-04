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

                b = 0;
                while (b < newArea.houseCount) {

                    buildIndex = options.splice(Math.floor(Math.random() * options.length), 1);
                    newArea.stack.points[buildIndex].val.building = new Building('a:'+i+'h:'+b, 'house')

                    b += 1;

                }

                b = 0;
                while (b < newArea.shopCount) {

                    buildIndex = options.splice(Math.floor(Math.random() * options.length), 1);
                    newArea.stack.points[buildIndex].val.building = new Building('a:'+i+'s:'+b, 'shop')

					console.log('well??');
					
                    b += 1;

                }

                //newArea.stack.points[0].val.house=true;

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

    };

    api.createWorld();

    console.log(areas);

    return api;

}
    ());
