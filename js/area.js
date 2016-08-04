var area = (function () {

    var areaCount = 1,
    current = 0,

    areas = [],

    Area = function (id) {

        this.id = id;
        this.livingWage = 10;
        this.minWage = 5;
        this.stack = new Stack({w:16,h:12,d:1,val:{}});
        this.workers = {

            current : [], // current total of workers
            startCount : 2,
            maxCount : 5

        }

    },

    api = {

        createWorld : function () {

            // push Areas to the areas array
            var i = 0, w, newArea;
            while (i < areaCount) {

                newArea = new Area(i);

                w = 0;
                newArea.workers.current = [];
                while(w < newArea.workers.startCount){

                    newArea.workers.current.push(new Worker(newArea, 5,1,1));

                    w += 1;

                }

                areas.push(newArea);

                i += 1;

            }

        },

        // get the stack of the current area
        getStack : function(){

            return areas[current].stack;

        }

    };

    api.createWorld();

    console.log(areas);

    return api;

}
    ());
