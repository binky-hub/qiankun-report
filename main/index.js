import { registerMicroApps, setDefaultMountApp, start } from "qiankun";

registerMicroApps([
    {
        name: "subapp",
        entry: "//localhost:8081",
        container: "#subapp-container",
        activeRule: "/",
    },
]);

setDefaultMountApp("/");
start();
