import { isNumber } from './utils';

describe('isNumber', () => {
    it('check number if number', () => {
        expect(isNumber(1)).toEqual(true);
    });

    it('check string if number', () => {
        expect(isNumber('2')).toEqual(false);
    });

    it('check string+ if number', () => {
        expect(isNumber(+'3')).toEqual(true);
    });
});
