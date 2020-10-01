// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
    it('should return the string "Hello, Alex!" when "Alex"', function() {
        expect(helloWorld("Jane")).toBe("Hello, Alex!");
    });
    it ('should return the string "Hello, Pat!" when "Pat"', function(){
        expect(helloWorld("Pat")).toBe("Hello, Pat!");
    });
    it('should return boolean true when passed true', function(){
        expect(helloWorld(true)).toBe("Hello, World!");
    });
    it('should return boolean false when passed false', function() {
        expect(helloWorld(false)).toBe("Hello,World!");
    });
});

describe ('isFive', function(){
    it('should be a defined function', function(){
    expect(typeof isFive).toBe('function');
    });
    it('should return true when passed 5', function(){
        expect (isFive(5)).toBe(true);
    });
    it('should return true when passed "5"', function(){
        expect (isFive("5")).toBe(true);
    });
    it('should return false when a string is passed', function(){
        expect (isFive("")).toBe(false);
    });
})

describe('isEven', function(){
    it('should return a boolean', function(){
    expect(isEven).toBeTruthy()
    })
    it('should return true when passed 2', function(){
        expect(isEven(2)).toBe(true);
    })
    it('should return false when passed 3', function(){
        expect(isEven(3)).toBe(false)
    })
    it('should return a false when passed "banana"', function(){
        expect(isEven("banana")).toBe(false)
    })
    it('should return true when passed "8"', function(){
        expect(isEven("8")).toBe(true)
    })
    it('should return false when passed Infinity', function(){
        expect(isEven(Infinity)).toBe(false)
    })
    it('should return false when passed true or false', function(){
        expect(isEven(true)).toBe(false)
    })
})
describe('isVowel', function(){
    it('should return a boolean', function(){
        expect(isVowel).toBeTruthy()
    })
    it('should return true when passed "a"', function(){
        expect(isVowel("a")).toBe(true);
    })
    it('should return true when passed "A"', function(){
        expect(isVowel("A")).toBe(true);
    })
    it('should return false when passed true or false', function(){
        expect(isVowel(true)).toBe(false);
    })
    it('should return true when passed "banana"', function(){
        expect(isVowel("banana")).toBe(false);
    })
    it('should return true when passed "a"', function(){
        expect(isVowel("a")).toBe(true);
    })
    it('should return true when passed ""', function(){
        expect(isVowel("")).toBe(false);
    })

})

