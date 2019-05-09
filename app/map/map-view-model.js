const observableModule = require("tns-core-modules/data/observable");

// This is THE ADDED CHANGES
// const observable = require("tns-core-modules/data/observable");
// const HelloWorldModel = (function (_super) {
//     __extends(HelloWorldModel, _super);
//     function HelloWorldModel() {
//         _super.call(this);
//         this.set("latitude", -33.86);
//         this.set("longitude", 151.20);
//         this.set("zoom", 8);
//         this.set("minZoom", 0);
//         this.set("maxZoom", 22);
//         this.set("bearing", 180);
//         this.set("tilt", 35);
//         this.set("padding", [80, 40, 40, 40]);
//         this.set("mapAnimationsEnabled", true);
//     }

//     return HelloWorldModel;
// })(observable.Observable);


function MapViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
    });

    return viewModel;
}

module.exports = MapViewModel;

// THIS IS NEW ADDED CHANGES
// exports.HelloWorldModel = HelloWorldModel;
// exports.mainViewModel = new HelloWorldModel();