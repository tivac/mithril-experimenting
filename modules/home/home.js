/*global m */

export default {
    controller : function() {
        console.log("HOME CONTROLLER");
    },
    view : function() {
        console.log("HOME VIEW");
        
        return m(".home", "HOME");
    }
};
