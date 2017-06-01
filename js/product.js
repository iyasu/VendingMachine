define(["require", "exports", "./productCategory"], function (require, exports, Categories) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Initial = (function () {
        function Initial() {
            this.name = "Please select a product";
            this.price = 0;
        }
        return Initial;
    }());
    exports.Initial = Initial;
    var CocaCola = (function () {
        function CocaCola() {
            this.name = "Coca-Cola";
            this.price = 2.30;
            this.category = new Categories.SodaCategory();
        }
        return CocaCola;
    }());
    exports.CocaCola = CocaCola;
    var Fanta = (function () {
        function Fanta() {
            this.name = "Fanta";
            this.price = 2;
            this.category = new Categories.SodaCategory();
        }
        return Fanta;
    }());
    exports.Fanta = Fanta;
    var Sprite = (function () {
        function Sprite() {
            this.name = "Sprite";
            this.price = 1.80;
            this.category = new Categories.SodaCategory();
        }
        return Sprite;
    }());
    exports.Sprite = Sprite;
    var Peanuts = (function () {
        function Peanuts() {
            this.name = "Peanuts";
            this.price = 1.50;
            this.category = new Categories.NutsCategory();
        }
        return Peanuts;
    }());
    exports.Peanuts = Peanuts;
    var Cashews = (function () {
        function Cashews() {
            this.name = "Cashews";
            this.price = 2.80;
            this.category = new Categories.NutsCategory();
        }
        return Cashews;
    }());
    exports.Cashews = Cashews;
    var Plain = (function () {
        function Plain() {
            this.name = "Plain";
            this.price = 2;
            this.category = new Categories.ChipsCategory();
        }
        return Plain;
    }());
    exports.Plain = Plain;
    var Cheddar = (function () {
        function Cheddar() {
            this.name = "Cheddar";
            this.price = 2;
            this.category = new Categories.ChipsCategory();
        }
        return Cheddar;
    }());
    exports.Cheddar = Cheddar;
    var Mints = (function () {
        function Mints() {
            this.name = "Mints";
            this.price = 1.30;
            this.category = new Categories.CandyCategory();
        }
        return Mints;
    }());
    exports.Mints = Mints;
    var Gummies = (function () {
        function Gummies() {
            this.name = "Gummies";
            this.price = 1.90;
            this.category = new Categories.CandyCategory();
        }
        return Gummies;
    }());
    exports.Gummies = Gummies;
    var Hersey = (function () {
        function Hersey() {
            this.name = "Hersey's";
            this.price = 1.30;
            this.category = new Categories.CandyBarCategory();
        }
        return Hersey;
    }());
    exports.Hersey = Hersey;
    var MilkyWay = (function () {
        function MilkyWay() {
            this.name = "Milky Way";
            this.price = 1.80;
            this.category = new Categories.CandyBarCategory();
        }
        return MilkyWay;
    }());
    exports.MilkyWay = MilkyWay;
});
//# sourceMappingURL=product.js.map