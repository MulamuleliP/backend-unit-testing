import assert from "assert";
import countRegNumber from "../first_terminal_test/countRegNumber.js";



describe('The countRegNumber function', function() {

    it('should return 3 for "CA 182736,CY 523519,CJ 812328"', function() {
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328');
        assert.equal(regCount, 3);
    });

    it('should return 1 for "CA 182736"', function() {
        var regCount = countRegNumber('CA 182736');
        assert.equal(regCount, 1);
    });
});


