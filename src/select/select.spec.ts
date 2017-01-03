import { Select } from './select';
/**
 * Created by Rex on 03/01/2017.
 */

describe('Select', () => {
    let select: Select;
    beforeEach(() => {
       select = new Select();
    });
    it('should test', () => {
        expect(true).toBe(true);
    });
    it('should initialize', () => {
        expect(select).toBeTruthy();
    });
});