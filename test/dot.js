describe("getRandomBetween()", function() {
    it("must be in range", function() {
        for( let i = 0; i < 1000; i++ ) {
            let min = -50;
            let max = 123;
            let num = getRandomBetween(min, max);

            expect(num).not.toBeGreaterThan(max);
            expect(num).not.toBeLessThan(min);
        }
    });

    it("min/max equal", function() {
        let num = getRandomBetween(10, 10);

        expect(num).toEqual(10);
    });

    it("min > max", function() {
        var err = function() {
            getRandomBetween(1, 0);
        };

        expect(err).toThrowError(TypeError, "min > max");
    });
});

