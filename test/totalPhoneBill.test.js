import assert from 'assert';
import totalPhoneBill from '../first_terminal_test/totalPhoneBill.js';

describe('The totalPhoneBill function', function() {

    it('should return the correct total for "call, sms, call, sms, sms"', function() {
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });

    it('should return the correct total for "call, sms"', function() {
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });

    it('should return the correct total for "sms, sms"', function() {
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });

});
