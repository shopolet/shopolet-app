/**
 * @license
 * GNU GENERAL PUBLIC LICENSE
 * Version 3, 29 June 2007
 *
 * @module
 * @description
 *
 */
import {expect} from "chai";
import {ErrorGroup} from "./error-group";


describe("ErrorGroup Test Suite", () => {
    it("Errorgroup should have no errors", () => {
       let eg: ErrorGroup = new ErrorGroup("error group");
       expect(eg.errors.length).to.be.equal(0);
    });

    it("Errorgroup should have 2 errors", () => {
        let eg = new ErrorGroup();
        eg.add(new Error("1"));
        eg.add(new Error("2"));
        expect(eg.errors.length).to.be.equal(2);
    });
});
