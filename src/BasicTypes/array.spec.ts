describe("explore string type", () => {
    it("can be defined with square brackets", () => {
        const arr: number[] = [1, 2, 3];

        expect(arr instanceof Array).toBe(true);
    });
    it("can be defined generic notation", () => {
        const arr: Array<number> = [1, 2, 3];

        expect(arr instanceof Array).toBe(true);
    });
    it("you can defined an array of strings", () => {
        const arr: string[] = ["The", "yellow", "quick"];

        expect(arr instanceof Array).toBe(true);
        expect(arr[0]).toBe("The");
    });
});