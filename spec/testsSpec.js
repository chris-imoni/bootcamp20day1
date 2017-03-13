(function() {
  'use strict';

  describe("Data types tests ", function() {
    describe("Case for some falsy values", function() {

      it("should return 'no value' for null", function() {
        expect(dataTypes(null)).toEqual('no value');
      });

      it("should return 'no value' for undefined", function() {
        expect(dataTypes(undefined)).toEqual('no value');
      });

    });

    describe("Case for booleans", function() {

      it("should return true for `true`", function() {
        expect(dataTypes(true)).toBe(true);
      });

      it("should return false for `false`", function() {
        expect(dataTypes(false)).toBe(false);
      });

    });

    describe("Case for Numbers", function() {

      it("should return 'less than 100' for 44", function() {
        expect(dataTypes(44)).toBe('less than 100');
      });

      it("should return 'more than 100' for 144", function() {
        expect(dataTypes(144)).toBe('more than 100');
      });

      it("should return 'equal to 100' for 100", function() {
        expect(dataTypes(100)).toBe('equal to 100');
      });


    });

    describe("Case for Strings", function() {

      it("should return the length of `tergiversate`", function() {
        expect(dataTypes('tergiversate')).toBe(12);
      });

      it("should return the length of an empty string", function() {
        expect(dataTypes('')).toBe(0);
      });

      it("should return the length of `555`", function() {
        expect(dataTypes('555')).toEqual(3);
      });

    });

    describe("Case for arrays", function() {

      it("should return `2` for `[0, 1, 2]`", function() {
        expect(dataTypes([0, 1, 2])).toEqual(2);
      });

      it("should return `undefined` for `[]`", function() {
        expect(dataTypes([])).not.toBeDefined();
      });
      it("should return `undefined` for `[4, 9]`", function() {
        expect(dataTypes([4, 9])).not.toBeDefined();
      });
    });

    describe("Case for functions", function() {
      it("should call the `callback` function with argument true, and return `called callback`", function() {
        var callback = function(arg) {
          expect(arg).toBeTruthy();
          if(arg === true) {
            return 'called callback';
          }
        };
        expect(dataTypes(callback)).toBe('called callback');
      });
    });
  });

  describe("Get Prime tests", function() {
    describe("Case for some falsy or invalid values", function() {

      it("should return 'not a number' for null", function() {
        expect(getPrimes(null)).toEqual('not a number');
      });

      it("should return 'not a number' for undefined", function() {
        expect(getPrimes(undefined)).toEqual('not a number');
      });

      it("should return 'not a number' for object", function() {
        expect(getPrimes([2])).toEqual('not a number');
      });

      it("should return 'not a number' for string", function() {
        expect(getPrimes("5")).toEqual('not a number');
      });

      it("should return 'not a number' for no argument", function() {
        expect(getPrimes()).toEqual('not a number');
      });
    });

    describe("Return value should be an array", function() {

      it("should return an array", function() {
        expect(Array.isArray(getPrimes(9))).toBe(true);
      });

      it("should return [2, 3, 5] for 6", function() {
        expect(getPrimes(6)).toEqual([2, 3, 5]);
      });

      it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23] for 23", function() {
        expect(getPrimes(23)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23]);
      });

      it("should return [] for 1", function() {
        expect(getPrimes(1)).toEqual([ ]);
      });

    });

    describe("Case for zero (ie 0)", function() {
      it("should return 'input should be greater than 0' ", function() {
        expect(getPrimes(0)).toBe('input should be greater than 0');
      });
    });

  });

  
})();


