import { Select } from './select';
/**
 * Created by Rex on 03/01/2017.
 */
type SelectItem = {
    id: string,
    value: string
}

describe('Select', () => {
    let select: Select<SelectItem>;
    let items: SelectItem[];
    beforeEach(() => {
        items = [
            {
                id: '1',
                value: '10'
            },
            {
                id: '2',
                value: '20'
            },
            {
                id: '3',
                value: '30'
            },
            {
                id: '4',
                value: '40'
            }
        ];
        select = new Select(items);
    });
    it('should test', () => {
        expect(true).toBe(true);
    });
    
    it('should return default item', () => {

    });
    
    it('should return true if checked item is selected', () => {
        
    });
    
    it('should return false if checked item is not selected', () => {
        
    });
});