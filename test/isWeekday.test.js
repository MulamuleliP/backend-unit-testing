import assert from "assert";
import isWeekday from "../first_terminal_test/isWeekday.js";

describe('The isWeekday function', function() {

    it('should return false for "Saturday"', function() {
        assert.equal(isWeekday('Saturday'), false);
    });

    it('should return false for "Sunday"', function() {
        assert.equal(isWeekday('Sunday'), false);
    });

    it('should return true for "Monday"', function() {
        assert.equal(isWeekday('Monday'), true);
    });

    it('should return true for "Tuesday"', function() {
        assert.equal(isWeekday('Tuesday'), true);
    });

    it('should return true for "Wednesday"', function() {
        assert.equal(isWeekday('Wednesday'), true);
    });

    it('should return true for "Thursday"', function() {
        assert.equal(isWeekday('Thursday'), true);
    });

    it('should return true for "Friday"', function() {
        assert.equal(isWeekday('Friday'), true);
    });
});


