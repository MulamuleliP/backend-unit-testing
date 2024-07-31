import assert from 'assert';
import countAllPaarl from '../first_terminal_test/countAllPaarl.js';

describe('The countAllPaarl function', function() {

    it('should return 3 for the string "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"', function() {
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });

    it('should return 2 for the string "CJ 345 123, CK 345, CJ 123"', function() {
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });

});
