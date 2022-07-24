/**
 * @jest-environment jsdom
 */
 const { questions } = require("../questions");

 describe("check the length of the array", () => {
    test("number of questions", () => {
        expect(questions.length).toEqual(10);
    });
});