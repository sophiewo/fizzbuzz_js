describe("FizzBuzz", function(){
  var fizzBuzz;

  beforeEach(function () {
    fizzBuzz = new FizzBuzz();
  });

  it("should return a integer", function() {
    expect(fizzBuzz.spin(5)).toEqual("Buzz");
  });

});