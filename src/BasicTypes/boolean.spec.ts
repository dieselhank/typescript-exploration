describe("explore boolean type", () => {
    it("can be set to true", () => {
        const val: boolean = true;
        expect(val).toBe(true);
    });
    it("can be set to false", () => {
        const val: boolean = false;
        expect(val).toBe(false);
    });
    describe("truthy and falsy values can be converted to boolean values", () => {
        it("can convert a non-empty string to a true value", () => {
            const val: boolean = !!"asdf";
            expect(val).toBe(true);
        });
        it("can convert an empty string to a false value", () => {
            const val: boolean = !!"";
            expect(val).toBe(false);
        });
        it("can convert a non-zero number to a true value", () => {
            const val: boolean = !!1.1;
            expect(val).toBe(true);
        });
        it("can convert a zero number to a false value", () => {
            const val: boolean = !!0;
            expect(val).toBe(false);
        });
        it("will always convert null to false", () => {
            const val: boolean = !!null;
            expect(val).toBe(false);
        });
        it("will always convert undefined to false", () => {
            const val: boolean = !!undefined;
            expect(val).toBe(false);
        });
        describe("all other obejcts are converted to true", () => {
            it("converts empty objects {}", () => {
                const val: boolean = !!{};
                expect(val).toBe(true);
            });
            it("converts complex objects {name: 'obj'}", () => {
                const val: boolean = !!{name: 'obj'};
                expect(val).toBe(true);
            });
            it("converts empty arrays []", () => {
                const val: boolean = !![];
                expect(val).toBe(true);
            });
            it("converts filled arrays ['123']", () => {
                const val: boolean = !!['123'];
                expect(val).toBe(true);
            });
        });
    });
    describe("logical operators", () => {
        it("can use the logical NOT operator to toggle the boolean value", () => {
            const val: boolean = !true;
            expect(val).toBe(false);
        });
        it("can perform a logical AND operation using &&", () => {
            let val: boolean = true && true;
            expect(val).toBe(true);

            val = true && false;
            expect(val).toBe(false);

            val = false && false;
            expect(val).toBe(false);
        });
        it("can perform a logical OR operation using &&", () => {
            let val: boolean = true || true;
            expect(val).toBe(true);

            val = true || false;
            expect(val).toBe(true);

            val = false || false;
            expect(val).toBe(false);
        });
    });
    describe("truthy comparison operators that typescript protects against", () => {
        // https://dorey.github.io/JavaScript-Equality-Table/
        // http://es5.github.io/#x11.9.1
        // http://es5.github.io/#x11.9.3
        it("can compare true == '1'", () => {
            const val: any = true;
            const equals: boolean = (val == "1");
            expect(equals).toBe(true);
        });
        it("can compare true == 'true'", () => {
            const val: any = true;
            // val is converted to Number(true) => 1 and Number('true') => NaN
            // 1 != NaN
            // console.log(Number(val));
            // console.log(Number('true'));
            const equals: boolean = (val == "true");
            expect(equals).toBe(false);
        });
        it("can compare true < '2'", () => {
            const val: any = true;
            const equals: boolean = (val < "2");
            expect(equals).toBe(true);
        });
        it("can compare true > 'true'", () => {
            const val: any = true;
            // val is converted to Number(true) => 1 and Number('true') => NaN
            // 1 >,<,>=,<= NaN => false
            // console.log(Number(val));
            // console.log(Number('true'));
            const greaterThan: boolean = (val > 'true');
            expect(greaterThan).toBe(false);
        });
    });
});
