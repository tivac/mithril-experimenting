/*global m */
"use strict";

import page from "../../structure";
import sidebar from "../../components/browse-sidebar";

var home = {
    controller : function() {
        this.recent = m.prop([ 1, 2, 3 ]);
        this.trades = m.prop([ 1, 2, 3 ]);
    },
    
    view : function(ctrl) {
        return page(
            sidebar.view(new sidebar.controller()),
            home.content(ctrl)
        );
    },
    
    content : function(ctrl) {
        return m(".home", [
            m("h1", "Welcome to the Trading Post"),
            m("p", "Here you can buy things, yo"),
            m(".home-items", [
                m(".recent", [
                    m("h2", "Recent Items"),
                    m(".items", ctrl.recent().map(function(item) {
                        return m(".item", [
                            m(".icon", [
                                m("img[src=http://placekitten.com/g/55/55]")
                            ]),
                            m("p", "Item Title " + item)
                        ]);
                    }))
                ]),
                m(".trades", [
                    m("h2", "Recent Trades"),
                    m(".items", ctrl.trades().map(function(item) {
                        return m(".item", [
                            m(".icon", [
                                m("img[src=http://placekitten.com/g/55/55]")
                            ]),
                            m("p", "Item Title " + item)
                        ]);
                    }))
                ])
            ])
        ]);
    }
};

export default home;
