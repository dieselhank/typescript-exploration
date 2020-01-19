describe("explore string type", () => {
    it("can be defined with double quotes or single quotes", () => {
        const txt: string = "Hello!";

        expect(txt).toBe('Hello!');
    });
    it("can be defined using template strings", () => {
        const color = "black";
        const txt: string = `My favorite color is ${color}.`;

        expect(txt).toBe("My favorite color is black.");
    });
    describe("concatenation", () => {
        it("can be defined using simple string concatenation", () => {
            const color = "black";
            const txt: string = "My favorite color is " + color + ".";

            expect(txt).toBe("My favorite color is black.");
        });
        it("can be defined with concatenating non-string types", () => {
            const colorCount = 3;
            const txt: string = "I have " + colorCount + " favorite colors.";

            expect(txt).toBe("I have 3 favorite colors.");
        });
        it("coerces numbers to strings before concatenation", () => {
            const primaryColorCount = 3;
            const secondaryColorCount = 9;
            const txt: string = "I used " + primaryColorCount + secondaryColorCount + " colors for the drawing.";

            expect(txt).toBe("I used 39 colors for the drawing.");

            // force addition first
            const txt2: string = "I used " + (primaryColorCount + secondaryColorCount) + " colors for the drawing.";

            expect(txt2).toBe("I used 12 colors for the drawing.");
        });
    });
    describe("comparison operators", () => {
        it("determines which string is greater", () => {
            const a: string = "An explosion rang through my ears.";
            const b: string = "An explosion rang through the air.";

            let result = a < b;

            expect(result).toBe(true);

            result = a > b;

            expect(result).toBe(false);
        });
        it("determines which string is greater or equal", () => {
            const a: string = "An explosion rang through my ears.";
            let b: string = "An explosion rang through the air.";

            let result = a <= b;

            expect(result).toBe(true);

            result = a >= b;

            expect(result).toBe(false);

            b = "An explosion rang through my ears.";
            result = a <= b;

            expect(result).toBe(true);

            result = a >= b;

            expect(result).toBe(true);
        });
        it("determines equality", () => {
            const a: string = "An explosion rang through my ears.";
            let b: string = "An explosion rang through the air.";

            let result = a === b;

            expect(result).toBe(false);

            b = "An explosion rang through my ears.";
            result = a === b;

            expect(result).toBe(true);
        });
        it("determines inequality", () => {
            const a: string = "An explosion rang through my ears.";
            let b: string = "An explosion rang through the air.";

            let result = a !== b;

            expect(result).toBe(true);

            b = "An explosion rang through my ears.";
            result = a !== b;

            expect(result).toBe(false);
        });
    });
});
