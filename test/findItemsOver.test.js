import assert from 'assert';
import findItemsOver from '../first_terminal_test/findItemsOver.js';

const itemList = [
    {name: 'apples', qty: 10},
    {name: 'pears', qty: 37},
    {name: 'bananas', qty: 27},
    {name: 'apples', qty: 3},
];

const results = [
    {name: 'pears', qty: 37},
    {name: 'bananas', qty: 27},
];

const itemList2 = [
    {name: 'apples', qty: 10},
    {name: 'pears', qty: 19},
    {name: 'bananas', qty: 17},
    {name: 'apples', qty: 3},
];

const results2 = [];

const itemList3 = [
    {name: 'apples', qty: 40},
    {name: 'pears', qty: 20},
    {name: 'bananas', qty: 23},
    {name: 'apples', qty: 37}
];

const results3 = [
    {name: 'apples', qty: 40},
    {name: 'bananas', qty: 23},
    {name: 'apples', qty: 37}
];

describe('The findItemsOver function', function() {

    it('should return the correct items for itemList', function() {
        assert.deepEqual(results, findItemsOver(itemList, 20));
    });

    it('should return the correct items for itemList2', function() {
        assert.deepEqual(results2, findItemsOver(itemList2, 20));
    });

    it('should return the correct items for itemList3', function() {
        assert.deepEqual(results3, findItemsOver(itemList3, 20));
    });

});
