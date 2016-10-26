'use strict';

function Plane() {

};

Plane.prototype.airport = function() {
  return this._airport;
};

Plane.prototype.land = function(airport) {
  if (this._airport === undefined) {
    this._airport = airport;
  } else {
    throw "Plane cannot land: Plane already landed";
  }
};

Plane.prototype.takeOff = function() {
  if (this._airport !== undefined) {
    this._airport = undefined;
  } else {
    throw "Plane cannot take off: Plane already flying";
  }
};
