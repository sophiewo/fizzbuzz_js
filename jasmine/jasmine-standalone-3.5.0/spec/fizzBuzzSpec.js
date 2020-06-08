describe("FizzBuzz", function(){
  var fizzBuzz;

  beforeEach(function () {
    fizzBuzz = new FizzBuzz();
  });

  it("should return FizzBuzz", function() {
    expect(fizzBuzz.spin(15)).toEqual("FizzBuzz");
  });

  it("should return Fizz", function() {
    expect(fizzBuzz.spin(3)).toEqual("Fizz");
  });

  it("should return Buzz", function() {
    expect(fizzBuzz.spin(5)).toEqual("Buzz");
  });

});
