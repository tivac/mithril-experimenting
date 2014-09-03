/*global m */

import layout from "../../layout";

export default {
    controller : function() {
        console.log("BROWSE CONTROLLER");
    },
    view : function() {
        console.log("BROWSE VIEW");
        
        return layout(function() { return m(".browse", "BROWSE"); });
    }
};
