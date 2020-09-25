"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FabricMethod;
(function (FabricMethod) {
    //abstract creater
    var PizzaStore = /** @class */ (function () {
        function PizzaStore() {
        }
        PizzaStore.prototype.orderPizza = function () {
            return this.createPizza();
        };
        return PizzaStore;
    }());
    // pizza creater
    var NYPizzaStore = /** @class */ (function (_super) {
        __extends(NYPizzaStore, _super);
        function NYPizzaStore() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NYPizzaStore.prototype.createPizza = function () {
            return new NYPizza();
        };
        return NYPizzaStore;
    }(PizzaStore));
    var ChicagoPizzaStore = /** @class */ (function (_super) {
        __extends(ChicagoPizzaStore, _super);
        function ChicagoPizzaStore() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ChicagoPizzaStore.prototype.createPizza = function () {
            return new ChicagoPizza();
        };
        return ChicagoPizzaStore;
    }(PizzaStore));
    // =============================================================
    // main pizza
    var Pizza = /** @class */ (function () {
        function Pizza() {
            this.name = "";
            this.dough = "";
            this.sauce = "";
            this.topping = [];
        }
        Pizza.prototype.prepare = function () {
            console.log("preparing " + this.name);
        };
        Pizza.prototype.bake = function () {
            console.log("Bake for 25 minutes at 350");
        };
        Pizza.prototype.box = function () {
            console.log("“Place pizza in official PizzaStore box");
        };
        Pizza.prototype.getName = function () {
            return this.name;
        };
        return Pizza;
    }());
    // sub pizza
    var NYPizza = /** @class */ (function (_super) {
        __extends(NYPizza, _super);
        function NYPizza() {
            var _this = _super.call(this) || this;
            _this.name = "NY Style Sauce and Cheese Pizza";
            _this.dough = "Thin Crust Dough";
            _this.sauce = "Marinara Sauce";
            _this.topping.push("Grated Reggiano Cheese");
            return _this;
        }
        return NYPizza;
    }(Pizza));
    var ChicagoPizza = /** @class */ (function (_super) {
        __extends(ChicagoPizza, _super);
        function ChicagoPizza() {
            var _this = _super.call(this) || this;
            _this.name = "NY Style Sauce and Cheese Pizza";
            _this.dough = "Thin Crust Dough";
            _this.sauce = "Marinara Sauce";
            _this.topping.push("Grated Reggiano Cheese");
            return _this;
        }
        return ChicagoPizza;
    }(Pizza));
    var nyPizza = new NYPizzaStore().orderPizza();
    nyPizza.prepare();
    nyPizza.bake();
    nyPizza.box();
})(FabricMethod || (FabricMethod = {}));
