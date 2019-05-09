const observableModule = require("tns-core-modules/data/observable");

function HomeItemsViewModel() {
    const viewModel = observableModule.fromObject({
        items: [
            {
                name: "Provo",
                description: "300 W 600 S, Provo, UT 84601"
            },
            {
                name: "Orem Central",
                description: "1350 W. 900 S, Orem, UT 84058"
            },
            {
                name: "American Fork",
                description: "782 W. 200 S, American Fork, UT 84003"
            },
            {
                name: "Lehi",
                description: "3101 North Ashton Boulevard, Lehi, UT 84043"
            },
            {
                name: "Draper",
                description: "12997 S. FrontRunner Boulevard, Draper, UT 84020"
            },
            {
                name: "South Jordan",
                description: "10351 South Jordan Gateway, South Jordan, UT 84095"
            },
            {
                name: "Murray",
                description: "140 W Vine St, Murray, UT 84107"
            },
            {
                name: "Salt Lake",
                description: "340 600 W, Salt Lake City, UT 84101"
            },
            {
                name: "North Temple",
                description: "1940 West North Temple, Salt Lake City, UT 84103"
            },
            {
                name: "Woods Cross",
                description: "Woods Cross, UT 84087"
            }
        ]
    });

    return viewModel;
}

module.exports = HomeItemsViewModel;
