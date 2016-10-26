'use strict';

function Airport() {
  this._planes = [];
  this._weather = new Weather();
  };

  Airport.prototype.planes = function() {
    return this._planes;
  };

  Airport.prototype.land = function(plane) {
    if (this._weather.stormy()) {
      throw "Plane cannot land in stormy weather";
    } else {
      this._planes.push(plane);
    }
  };

  Airport.prototype.takeOff = function(plane) {
    if (this._weather.stormy()) {
      throw "Plane cannot take off in stormy weather";
    } else {
      var index = this._planes.indexOf(plane);
      this._planes.splice(index);
    }
  };
