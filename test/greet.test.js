import assert from "assert";
import greet from "../first_terminal_test/greet.js";

describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
        assert.equal('Hello, Andre', greet('Andre'));
    });
    it('should greet Karen correctly', function(){
      
        assert.equal('Hello, Karen', greet('Karen'));
    });
});