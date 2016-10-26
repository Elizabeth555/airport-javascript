describe('Airport', function() {
  function Plane() {  };
  var airport;
  var plane = new Plane();

  describe('land', function() {
    it('lands a plane', function() {
      spyOn(Math, 'random').and.returnValue(0);
      airport = new Airport();
      airport.land(plane);
      expect(airport.planes()).toContain(plane)
    });
    it('cannot land plane when stormy', function() {
      spyOn(Math, 'random').and.returnValue(1);
      airport = new Airport();
      expect(function() {airport.land(plane)}).toThrow("Plane cannot land in stormy weather");
    });
  });

  describe('take_off', function() {
    it('takes off a plane', function() {
      spyOn(Math, 'random').and.returnValue(0);
      airport = new Airport();
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes()).not.toContain(plane)
    });
    it('cannot take off plane when stormy', function() {
      spyOn(Math, 'random').and.returnValue(1);
      airport = new Airport();
      expect(function() {airport.takeOff()}).toThrow("Plane cannot take off in stormy weather");
    });
  });
});
