// require("./bundle-config");

const application = require("tns-core-modules/application");

// if (application.ios) {
//     GMSServices.provideAPIKey("AIzaSyBErqQxBYZtDEDr6IkdfaBkh2a7asZ3Ub4");
//   }

application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
