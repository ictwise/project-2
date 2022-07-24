/**
 * @jest-environment jsdom
 */

 const { questions } = require("../questions");

 describe("check that the number of questions in the array is equal to the length of the array", () => {
    test("number of questions", () => {
        expect("questions.length" in questions).toBe(10);
    });
});