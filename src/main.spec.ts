import { add, hocDouble } from './main';

describe("add", () => {
    it("adds 1 and 1", () => {
        const result = add(1, 1);
        expect(result).toBe(2);
    });
    describe("hocDouble", () => {
        it("doubles inputs and calls wrapped function", () => {
            const doubleAdd = hocDouble(add);
            const result = doubleAdd(2, 3);
            expect(result).toBe(10);
        });
    });
    describe("TS Exploration", () => {
        // it("won't complie with invalid parameter types", () => {
        //     const result = add("a", "b");
        // });
    });
});