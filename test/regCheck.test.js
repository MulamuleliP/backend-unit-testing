import assert from "assert";
import regCheck from "../first_terminal_test/regCheck.js";

describe('The regCheck function', function() {

    it('should return true for DC 55 YU GP', function() {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });
    it('should return false for DC 55 YU GP', function() {
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });

    it('should return true for 5566 L', function() {
        assert.equal(regCheck('5566 L', 'L'), true);
    });
    it('should return false for 5566 L', function() {
        assert.equal(regCheck('5566 L', 'M'), false);
    });

    it('should return true for ERT 123 EC', function() {
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    });
    it('should return false for ERT 123 EC', function() {
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });

    it('should return true for FGT 123 MP', function() {
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    });
    it('should return false for FGT 123 MM', function() {
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });
});









