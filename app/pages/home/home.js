/*global m */

import layout from "../../layout";

export default {
    controller : function() {
        console.log("HOME CONTROLLER");
    },
    view : function() {
        console.log("HOME VIEW");
        
        console.log(layout(function() { return m(".home", "HOME"); }));
        
        return layout(function() { return m(".home", "HOME"); });
    }
};
