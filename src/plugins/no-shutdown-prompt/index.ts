"use strict";

import { PluginDescription } from "../../plugin";

export default (<PluginDescription>{
    name: "no-shutdown-prompt",
    version: "1.0.0",
    description: "Disables the default 'Are you sure you want to exit?' prompt, allowing you to exit the client immediately.",
    builtinDependencies: {
        "rcp-fe-app-controls": "~0.0.384"
    },
    setup() {
        this.postinit("rcp-fe-app-controls", plugin => {
            plugin.api.setExitConfirmEnabled(false);
        });
    }
});