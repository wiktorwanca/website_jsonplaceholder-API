const assert = require('chai').assert;
const fetchUserFromJSONPLACEHOLDER = require('./fetchUser');

describe('fetchUserFromJSONPLACEHOLDER', () => {
    it('should return 1', () => {
        const result = fetchUserFromJSONPLACEHOLDER(0, 'firstCardTitle', 'firstCardImage', 'firstCardText');
        assert.strictEqual(result, 1);
    });
});

describe('fetchUserFromJSONPLACEHOLDER', () => {
    it('should return 1', () => {
        const result = fetchUserFromJSONPLACEHOLDER(1, 'secondCardTitle', 'secondCardImage', 'secondCardText');
        assert.strictEqual(result, 1);
    });
});


