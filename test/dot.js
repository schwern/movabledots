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

    it("is ok when min & max are equal", function() {
        let num = getRandomBetween(10, 10);

        expect(num).toEqual(10);
    });

    it("throws when min > max", function() {
        var err = function() {
            getRandomBetween(1, 0);
        };

        expect(err).toThrowError(TypeError, "min > max");
    });
});


describe("moveDot()", function() {
    it("sets top and left", function() {
        var node = document.createElement("div");
        node.appendChild(document.createTextNode("foo"));
        document.body.appendChild(node);

        node.style.top  = "-10px";
        node.style.left = "-20px";

        moveDot.apply(node);

        // Get the number without the px.
        var firstNumRe = /^-?\d+/;
        var top  = firstNumRe.exec(node.style.top)[0];
        var left = firstNumRe.exec(node.style.left)[0];
        
        expect(top).toBeGreaterThan(-1);
        expect(left).toBeGreaterThan(-1);

        expect(top).toBeLessThan( window.innerHeight );
        expect(left).toBeLessThan( window.innerWidth );

        expect(top).toBeLessThan( window.innerHeight - node.clientHeight );
        expect(left).toBeLessThan( window.innerWidth - node.clientWidth );
    });
});
