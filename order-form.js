// Models
var Item = function(data) {
    if(!data) {
        data = {};
    }
    
    this.name   = m.prop(data.name);
    this.vendor = m.prop(data.vendor);
    
    // Arrays of listings
    this.buys   = m.prop([]);
    this.sells  = m.prop([]);
};

var Listing = function(data) {
    this.quantity = m.prop(data.quantity);
    this.price    = m.prop(data.price);
};

// Module
var Controller = function() {
    this.item = new Item();
    
    this.valid = m.prop(false);
    
    this.coins    = m.prop(0);
    this.quantity = m.prop(0);
    
    this.gold   = m.prop(0);
    this.silver = m.prop(0);
    this.copper = m.prop(0);
};

Controller.prototype = {
    cancel : function() {
        console.error("cancel");
    },
    
    _onCoinChange : function(type, value) {
        var current = this[type](),
            coins;
        
        value = parseInt(value, 10);
        
        if(isNaN(value)) {
            return this.valid(false);
        }
        
        switch(type) {
            case "gold":
                coins   = value * 10000;
                current = current * 10000;
                break;
            
            case "silver":
                coins   = value * 100;
                current = current * 100;
                break;
            
            case "copper":
                coins = value;
                break;
        }
        
        this.coins(this.coins() - current + coins);
        
        this[type](value);
    },
    
    _onQuantityChange : function(value) {
        value = parseInt(value, 10);
        
        if(isNaN(value)) {
            return this.valid(false);
        }
        
        this.quantity(value);
    }
};

var form = {
    controller : Controller,

    view : function(ctrl) {
        var total = ctrl.quantity() * ctrl.coins();
        
        return m(".order", [
            m(".title", [
                m("h1.name", "Item " + ctrl.item.name()),
                m(".vendor", "Vendor Price: " + ctrl.item.vendor())
            ]),
            m(".inputs", [
                m(".price", [
                    m("input.gold",   { oninput : m.withAttr("value", ctrl._onCoinChange.bind(ctrl, "gold")) }),
                    m("input.silver", { oninput : m.withAttr("value", ctrl._onCoinChange.bind(ctrl, "silver")) }),
                    m("input.copper", { oninput : m.withAttr("value", ctrl._onCoinChange.bind(ctrl, "copper")) })
                ]),
                m(".quantity", [
                    m("input.quantity", { oninput : m.withAttr("value", ctrl._onQuantityChange.bind(ctrl)) })
                ]),
                m(".price", [
                    m("p", [
                        "Total price: ",
                        m("span.gold",   Math.floor(total / 10000) + "g "),
                        m("span.silver", Math.floor((total % 10000) / 100) + "s "),
                        m("span.copper", ((total % 10000) % 100) + "c")
                    ])
                ]),
                m(".actions", [
                    m("button[type='submit']", { disabled : ctrl.valid() ? "" : "disabled" }, "Buy"),
                    m("button[type='cancel']", { onclick : ctrl.cancel.bind(ctrl) }, "Cancel")
                ])
            ]),
            m(".listings", [
                m(".buy", [
                    m(".ol", ctrl.item.buys().map(function(listing) {
                        return m("li.listing", listing.quantity() + " for " + listing.price());
                    }))
                ]),
                m(".sell", [
                    m(".ol", ctrl.item.sells().map(function(listing) {
                        return m("li.listing", listing.quantity() + " for " + listing.price());
                    }))
                ])
            ])
        ]);
    }
};

m.module(document.body, form);
/*
var c = new form.controller();

m.render(document.body, form.view(c));

window.r = function() {
    m.render(document.body, form.view(c));
};
*/
