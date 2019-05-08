const observableModule = require("tns-core-modules/data/observable");

function SettingsViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        items: [
            {
                name: "Sign-In / Create Account",
                description: "Description for Item 1"
            },
            {
                name: "Maps",
                description: "Description for Item 2"
            },
            {
                name: "Delays",
                description: "Description for Item 3"
            },
            {
                name: "Privacy",
                description: "Description for Item 4"
            },
            {
                name: "Notifications",
                description: "Description for Item 5"
            },
            {
                name: "Feedback",
                description: "Description for Item 6"
            }
        ]

    });

    return viewModel;
}

module.exports = SettingsViewModel;


