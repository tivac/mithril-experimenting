/*global m*/
"use strict";

export default {
    controller : function() {
        this.categories = m.prop([
            { name : "Armor" },
            { name : "Weapons" },
            { name : "Crafting" },
            { name : "Other" },
            { name : "Bags" }
        ]);
    },
    
    view : function(ctrl) {
         return ctrl.categories().map(function(cat) {
            var name = cat.name.toLowerCase();
            
            return m(".category", { class : name }, [
                m("a[href=/browse/" + name + "]", { config : m.route }, cat.name)
            ]);
        });
    }
};
