import assert from 'assert';
import countAllFromTown from '../first_terminal_test/countAllFromTown.js';

describe('The countAllFromTown function', function() {

    it('should return the correct count for town CL', function() {
        const fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
        assert.equal(fromStellies, 3);
    });

    it('should return the correct count for town cCF', function() {
        const fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF');
        assert.equal(fromKuilsriver, 1);
    });

});
