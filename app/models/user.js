/*global m*/

var User;

User = function() {};

User.prototype = {
    balance : function() {
        return Math.round(Math.random() * 100000);
    }
}

export default (new User());
