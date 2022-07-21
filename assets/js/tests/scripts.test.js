/**
 * @jest-environment jsdom
 */

 const buildQuestion = require("../assets/scripts");

 beforeAll(() => {
     let fs = require("fs");
     let fileContents = fs.readFileSync("index.html", "utf-8");
     document.open();
     document.write(fileContents);
     document.close();
 });
 


 describe("start button working set first question", () => {
     test("Expects content to change", () => {
        buildQuestion();
        expect(document.get("question")
            .innerHTML).toEqual("Which exercise boosts metabolism 24 hours a day, seven days a week?");
     });
    //  test("questions should exist", () => {
    //      expect(document.getElementsByTagName("questions").length).toBe(5);
    //  });
 });