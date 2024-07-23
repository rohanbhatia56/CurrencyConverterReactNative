export const india = [
    { id: '1', type: 'USD', value: '$ ' },
    { id: '2', type: 'Euro', value: '€ ' },
    { id: '3', type: 'British Pound', value: '£ ' },
    { id: '4', type: 'Australian Dollar', value: 'A$ ' },
    { id: '5', type: 'Canadian Dollar', value: 'C$ ' },
  ];
  
  export const usa = [
    { id: '1', type: 'India rupees', value: 'Inr ' },
    { id: '2', type: 'Euro', value: '€ ' },
    { id: '3', type: 'British Pound', value: '£ ' },
    { id: '4', type: 'Australian Dollar', value: 'A$ ' },
    { id: '5', type: 'Canadian Dollar', value: 'C$ ' },
  ];
  
  export const canada = [
    { id: '1', type: 'USD', value: '$ ' },
    { id: '2', type: 'Euro', value: '€ ' },
    { id: '3', type: 'British Pound', value: '£ ' },
    { id: '4', type: 'Australian Dollar', value: 'A$ ' },
    { id: '5', type: 'India rupees', value: 'Inr ' },
  ];
  
  export const europe = [
    { id: '1', type: 'USD', value: '$ ' },
    { id: '2', type: 'India rupees', value: 'Inr ' },
    { id: '3', type: 'British Pound', value: '£ ' },
    { id: '4', type: 'Australian Dollar', value: 'A$ ' },
    { id: '5', type: 'Canadian Dollar', value: 'C$ ' },
  ];
  
  export const australia = [
    { id: '1', type: 'USD', value: '$ ' },
    { id: '2', type: 'Euro', value: '€ ' },
    { id: '3', type: 'British Pound', value: '£ ' },
    { id: '4', type: 'India rupees', value: 'Inr ' },
    { id: '5', type: 'Canadian Dollar', value: 'C$ ' },
  ];
  
  export const britain = [
    { id: '1', type: 'USD', value: '$ ' },
    { id: '2', type: 'Euro', value: '€ ' },
    { id: '3', type: 'India rupees', value: 'Inr ' },
    { id: '4', type: 'Australian Dollar', value: 'A$ ' },
    { id: '5', type: 'Canadian Dollar', value: 'C$ ' },
  ];
  
  export const populateCurrencyConversion = (defaultCountry, inputValue) => {
    switch (defaultCountry) {
      case 'IN':
        return india.map(currency => ({ ...currency, value: currency.value + (inputValue * getConversionRate(currency.type, 'IN')) }));
      case 'US':
        return usa.map(currency => ({ ...currency, value: currency.value + (inputValue * getConversionRate(currency.type, 'US')) }));
      case 'CA':
        return canada.map(currency => ({ ...currency, value: currency.value + (inputValue * getConversionRate(currency.type, 'CA')) }));
      case 'GB':
        return britain.map(currency => ({ ...currency, value: currency.value + (inputValue * getConversionRate(currency.type, 'GB')) }));
      case 'EU':
        return europe.map(currency => ({ ...currency, value: currency.value + (inputValue * getConversionRate(currency.type, 'EU')) }));
      case 'AU':
        return australia.map(currency => ({ ...currency, value: currency.value + (inputValue * getConversionRate(currency.type, 'AU')) }));
      default:
        return [];
    }
  };
  
 export const getConversionRate = (currencyType, country) => {
    // Define conversion rates based on the country and currency type
    const conversionRates = {
      IN: {
        'USD': 0.0122,
        'Euro': 0.011,
        'British Pound': 0.0095,
        'Australian Dollar': 0.018,
        'Canadian Dollar': 0.016,
      },
      US: {
        'India rupees': 82,
        'Euro': 0.90,
        'British Pound': 0.77,
        'Australian Dollar': 1.49,
        'Canadian Dollar': 1.32,
      },
      CA: {
        'USD': 0.76,
        'Euro': 0.68,
        'British Pound': 0.58,
        'Australian Dollar': 1.13,
        'India rupees': 62,
      },
      GB: {
        'USD': 1.30,
        'Euro': 1.18,
        'India rupees': 105,
        'Australian Dollar': 1.96,
        'Canadian Dollar': 1.72,
      },
      EU: {
        'USD': 1.11,
        'India rupees': 90,
        'British Pound': 0.85,
        'Australian Dollar': 1.66,
        'Canadian Dollar': 1.47,
      },
      AU: {
        'USD': 0.67,
        'Euro': 0.60,
        'British Pound': 0.51,
        'India rupees': 55,
        'Canadian Dollar': 0.88,
      },
    };
  
    return conversionRates[country][currencyType] || 1;
  };
  