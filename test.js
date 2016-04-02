var assert = require("assert");
var format = require("./");

it('substitutes {\d} with remaning args', function () {

    assert.equal(format('foo {0} bar {1} qux {2}', 'corge', 'span', 'quux'), 'foo corge bar span qux quux');

});

it('substitutes {\w} with given context object', function () {

    assert.equal(format('foo {corge} bar {qux}', {corge: 3, qux: 14}), 'foo 3 bar 14');

});

it('calls functions passed within context', function () {

    assert.equal(format('foo {corge} bar {qux}', {
        corge: function () {
            return 3
        }, qux: 14
    }), 'foo 3 bar 14');

});

it('can be escaped by doubling: {{ and }}', function () {

    assert.equal(format('foo {0}, bar {{1}}', 3, 14), 'foo 3, bar {1}');

});
