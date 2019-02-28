import { pluralize, capitalize } from '../index';

describe('pluralize', () => {
    it('adds an s to the end of a string', () => {
        const s = 'asdfjkl;';
        expect(pluralize(s)).toEqual('asdfjkl;s');
    });

    it('returns an empty string when passed empty string', () => {
        const emptyString = '';
        expect(pluralize(emptyString)).toEqual('');
    });

    it('returns an empty string when passed null or undefined', () => {
        const n = null;
        const u = undefined;

        expect(pluralize(n)).toEqual('');
        expect(pluralize(u)).toEqual('');
    });
});

describe('capitalize', () => {
    it('changes the first letter of a string to uppercase', () => {
        const s = 'word';
        expect(capitalize(s)).toEqual('Word');
    });

    it('returns an empty string when passed an empty string', () => {
        const emptyString = '';
        expect(capitalize(emptyString)).toEqual('');
    });

    it('returns the same string if the first character is not alphanumeric', () => {
        const s = '#word';
        const t = '2word';
        const w = ' word';
        const v = '_word';

        expect(capitalize(s)).toEqual('#word');
        expect(capitalize(t)).toEqual('2word');
        expect(capitalize(w)).toEqual(' word');
        expect(capitalize(v)).toEqual('_word');
    });

    it('only capitalizes the first letter of the first word in a sentence', () => {
        const s = 'this is a sentence';
        expect(capitalize(s)).toEqual('This is a sentence');
    });

    it('returns an empty string when passed null or undefined', () => {
        const n = null;
        const u = undefined;
        expect(capitalize(n)).toEqual('');
        expect(capitalize(u)).toEqual('');
    });
});
