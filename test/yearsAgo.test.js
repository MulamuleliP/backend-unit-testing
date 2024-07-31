import assert from "assert";
import yearsAgo from "../first_terminal_test/yearsAgo.js";

describe('The yearsAgo function', function() {

    it('should return 1976 for yearsAgo', function() {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
    });

    it('should return 2000 for yearsAgo', function() {
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });

});
