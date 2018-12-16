import * as depper from '../index'
describe('Test of deep-replace-value:', () => {
    it('Subsitute simple key', () => {
        const simpleObject = {
            'key1': 'This is a boring string'
        }
        expect(depper.replace(simpleObject, 'key1', 'REPLACED!')).toMatchSnapshot();
    });

    it('Substitute nested keys', () => {
        const deepObject = {
            'composedKey':{
                'key1': 'This is the first string',
                'key2': 'This is the second string'
            }
        };
        expect(depper.replace(deepObject, 'key1', 'REPLACED!')).toMatchSnapshot();
    });

    it('Substitute multiple times the value of the key without care how deeply is it', () => {
        const multipleKeys = {
            'password': 'This is a password',
            'user': {
                'email': 'This is an email',
                'password': ['This is a second password'],
            }
        };
        expect(depper.replace(multipleKeys, 'password', 'REPLACED!')).toMatchSnapshot();
    });

    it(`Changes the value of the key without case sensitive`, () => {
        const multipleKeys = {
            'PASSWORD': 'This is a password',
            'user': {
                'email': 'This is an email',
                'passWorD': ['This is a second password'],
            }
        };
        expect(depper.replaceWithoutCaseSensitive(multipleKeys, 'password', 'REPLACED!')).toMatchSnapshot();
    })
});
