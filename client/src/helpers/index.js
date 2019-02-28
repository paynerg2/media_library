// String helper methods
export const capitalize = s => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
};

export const pluralize = word => {
    // Meant to only deal with simple, regular nouns
    return word ? word + 's' : '';
};
