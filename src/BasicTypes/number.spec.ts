describe("explore number type", () => {
    it("can be set using an integer value", () => {
        const val: number = 1;
        expect(val).toBe(1);
    });
    it("can be set using a float value", () => {
        const val: number = 1.33;
        expect(val).toBe(1.33);
    });
    it("can be set using a hex value", () => {
        const val: number = 0xf00d;
        expect(val).toBe(61453);
    });
    it("can be set using a binary value", () => {
        const val: number = 0b001100;
        expect(val).toBe(12);
    });
    it("can be set using an octal value", () => {
        const val: number = 0o744;
        expect(val).toBe(484);
    });
    describe("arithmetic operators", () => {
        it("can add two numbers", () => {
            const a: number = 2;
            const b: number = a + 1;
            expect(b).toBe(3);

            let c: number = 2;
            c += 1;
            expect(c).toBe(3);
        });
        it("can subtract two numbers", () => {
            const a: number = 2;
            const b: number = a - 1;
            expect(b).toBe(1);

            let c: number = 2;
            c -= 1;
            expect(c).toBe(1);
        });
        it("can multiply two numbers", () => {
            const a: number = 3;
            const b: number = a * 2;
            expect(b).toBe(6);

            let c: number = 3;
            c *= 2;
            expect(c).toBe(6);
        });
        it("can divide two numbers", () => {
            const a: number = 6;
            const b: number = a / 2;
            expect(b).toBe(3);

            let c: number = 6;
            c /= 2;
            expect(c).toBe(3);
        });
        it("can find modulus of two numbers", () => {
            const a: number = 7;
            const b: number = a % 2;
            expect(b).toBe(1);
        });
        it("can increment a number", () => {
            let a: number = 1;
            ++a;
            expect(a).toBe(2);
        });
        it("can decrement a number", () => {
            let a: number = 1;
            --a;
            expect(a).toBe(0);
        });
    });
    describe("comparison operators", () => {
        it("determines which number is greater", () => {
            const a: number = 1;
            const b: number = 2;
            let result = a > b;

            expect(result).toBe(false);

            result = a < b;

            expect(result).toBe(true);
        });
        it("determines which number is greater or equal", () => {
            let a: number = 2;
            let b: number = 2;
            let result = a >= b;

            expect(result).toBe(true);

            a = 1;
            result = a >= b;

            expect(result).toBe(false);

            a = 2;
            result = a <= b;

            expect(result).toBe(true);

            a = 1;
            result = a <= b;

            expect(result).toBe(true);
        });
        it("determines equality", () => {
            let a: number = 2;
            let b: number = 2;
            let result = a === b;

            expect(result).toBe(true);

            a = 1;
            result = a === b;

            expect(result).toBe(false);
        });
        it("determines inequality", () => {
            let a: number = 2;
            let b: number = 2;
            let result = a !== b;

            expect(result).toBe(false);

            a = 1;
            result = a !== b;

            expect(result).toBe(true);
        });
    });
    describe("bitwise operators", () => {
        it("supports bitwise AND", () => {
            const a: number = 7;
            const b: number = 3;
            const result = a & b;
            expect(result).toBe(3);

            let c: number = 7;
            c &= 3;
            expect(c).toBe(3);
        });
        it("supports bitwise OR", () => {
            const a: number = 4;
            const b: number = 3;
            const result = a | b;
            expect(result).toBe(7);

            let c: number = 4;
            c |= b;
            expect(c).toBe(7);
        });
        it("supports bitwise XOR", () => {
            const a: number = 11;
            const b: number = 3;
            const result = a ^ b;
            expect(result).toBe(8);

            let c: number = 11;
            c ^= b;
            expect(c).toBe(8);
        });
        it("supports bitwise NOT", () => {
            const a: number = 12;
            const result = ~a;
            expect(result).toBe(-13);
        });
        it("supports bitwise Left Shift", () => {
            const a: number = 13;
            const result = a << 1;
            expect(result).toBe(26);

            let c: number = 13;
            c <<= 1;
            expect(c).toBe(26);
        });
        it("supports bitwise Right Shift Sign-propagating", () => {
            const a: number = -10;
            const result = a >> 1;
            expect(result).toBe(-5);

            let c: number = -10;
            c >>= 1;
            expect(c).toBe(-5);
        });
        it("supports bitwise Right Shift Zero-fill", () => {
            const a: number = -2147483648;
            const result = a >>> 1;
            expect(result).toBe(1073741824);

            let c: number = -2147483648;
            c >>>= 1;
            expect(c).toBe(1073741824);
        });
    });
});

// it("can subtract two numbers", () => {
//     const a: number = 1.33;
//     const b: number = a - 1;
//     expect(b).toBeCloseTo(0.33);
// });
