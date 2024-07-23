// CurrencyHelper.test.js
// import { populateCurrencyConversion } from './CurrencyHelper';

const { populateCurrencyConversion } = require('../components/CurrencyHelper');
const { getConversionRate } = require('../components/CurrencyHelper');

describe('CurrencyHelper', () => {
  test('populateCurrencyConversion - should return correct conversions for India', () => {
    const defaultCountry = 'IN';
    const inputValue = 100;

    const expectedData = [
      { id: '1', type: 'USD', value: '$ ' + (inputValue * 0.0122) },
      { id: '2', type: 'Euro', value: '€ ' + (inputValue * 0.011) },
      { id: '3', type: 'British Pound', value: '£ ' + (inputValue * 0.0095) },
      { id: '4', type: 'Australian Dollar', value: 'A$ ' + (inputValue * 0.018) },
      { id: '5', type: 'Canadian Dollar', value: 'C$ ' + (inputValue * 0.016) },
    ];

    const result = populateCurrencyConversion(defaultCountry, inputValue);

    expect(result).toEqual(expectedData);
  });

  test('populateCurrencyConversion - should return correct conversions for USA', () => {
    const defaultCountry = 'US';
    const inputValue = 100;
    const expectedData = [
      { id: '1', type: 'India rupees', value: 'Inr ' + (inputValue * 82) },
      { id: '2', type: 'Euro', value: '€ ' + (inputValue * 0.90) },
      { id: '3', type: 'British Pound', value: '£ ' + (inputValue * 0.77) },
      { id: '4', type: 'Australian Dollar', value: 'A$ ' + (inputValue * 1.49) },
      { id: '5', type: 'Canadian Dollar', value: 'C$ ' + (inputValue * 1.32) },
    ];

    const result = populateCurrencyConversion(defaultCountry, inputValue);

    expect(result).toEqual(expectedData);
  });

  test('populateCurrencyConversion - should return correct conversions for CA', () => {
    const defaultCountry = 'CA';
    const inputValue = 100;

    const expectedData = [
      { id: '1', type: 'USD', value: '$ ' + (inputValue * 0.76) },
      { id: '2', type: 'Euro', value: '€ ' + (inputValue * 0.68) },
      { id: '3', type: 'British Pound', value: '£ ' + (inputValue * 0.58) },
      { id: '4', type: 'Australian Dollar', value: 'A$ ' + (inputValue * 1.13) },
      { id: '5', type: 'India rupees', value: 'Inr ' + (inputValue * 62) },
    ];

    const result = populateCurrencyConversion(defaultCountry, inputValue);

    expect(result).toEqual(expectedData);
  });

  test('populateCurrencyConversion - should return empty array for unknown country', () => {
    const defaultCountry = 'XX';
    const inputValue = 100;

    const result = populateCurrencyConversion(defaultCountry, inputValue);

    expect(result).toEqual([]);
  });

  test('getConversionRate - should return correct conversion rates', () => {
    // const getConversionRate = require('./CurrencyHelper').getConversionRate;
    
    expect(getConversionRate('USD', 'IN')).toBe(0.0122);
    expect(getConversionRate('Euro', 'US')).toBe(0.90);
    expect(getConversionRate('British Pound', 'CA')).toBe(0.58);
    expect(getConversionRate('Australian Dollar', 'GB')).toBe(1.96);
    expect(getConversionRate('Canadian Dollar', 'AU')).toBe(0.88);
    expect(getConversionRate('Non-existent Currency', 'AU')).toBe(1);
  });
});
