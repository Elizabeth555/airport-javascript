describe('Weather', function() {
  it('returns true if stormy', function() {
    weather = new Weather();
    spyOn(Math, 'random').and.returnValue(1);
    expect(weather.stormy()).toBe(true);
  });
});
