/**
 * Converts a string to camelCase format.
 * 
 * This function takes a string with various delimiters (spaces, underscores, or hyphens)
 * and converts it to camelCase, where the first word is lowercase and subsequent words
 * have their first letter capitalized.
 * 
 * @function toCamelCase
 * @param {string} input - The string to convert to camelCase
 * @returns {string} The converted camelCase string
 * @throws {Error} If input is null or undefined
 * @throws {Error} If input is not a string
 * @throws {Error} If input is an empty string
 * 
 * @example
 * toCamelCase("first name");        // Returns: "firstName"
 * toCamelCase("user_id");           // Returns: "userId"
 * toCamelCase("SCREEN_NAME");       // Returns: "screenName"
 * toCamelCase("mobile-number");     // Returns: "mobileNumber"
 * 
 * @example
 * // Error handling
 * toCamelCase(null);                // Throws: Error - Input cannot be null or undefined
 * toCamelCase(1234);                // Throws: Error - Input must be a string
 * toCamelCase("");                  // Throws: Error - Input cannot be an empty string
 */

/**
 * Converts a string to dot.case format.
 * 
 * This function transforms a string into dot.case notation, where words are separated
 * by dots and all characters are lowercase. It handles multiple input formats including
 * spaces, underscores, hyphens, and camelCase boundaries.
 * 
 * @function toDotCase
 * @param {string} input - The string to convert to dot.case
 * @returns {string} The converted dot.case string (lowercase with dots as separators)
 * @throws {Error} If input is null or undefined
 * @throws {Error} If input is not a string
 * @throws {Error} If input is an empty string
 * 
 * @example
 * toDotCase("first name");          // Returns: "first.name"
 * toDotCase("user_id");             // Returns: "user.id"
 * toDotCase("SCREEN_NAME");         // Returns: "screen.name"
 * toDotCase("mobile-number");       // Returns: "mobile.number"
 * toDotCase("firstName");           // Returns: "first.name"
 * 
 * @example
 * // Error handling
 * toDotCase(undefined);             // Throws: Error - Input cannot be null or undefined
 * toDotCase(null);                  // Throws: Error - Input cannot be null or undefined
 * toDotCase(1234);                  // Throws: Error - Input must be a string
 * toDotCase("");                    // Throws: Error - Input cannot be an empty string
 */

function toCamelCase(input) {
    // Check for null or undefined
    if (input === null || input === undefined) {
        throw new Error('Input cannot be null or undefined');
    }

    // Check if input is a string
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Check if string is empty
    if (input.length === 0) {
        throw new Error('Input cannot be an empty string');
    }

    // Convert to camelCase by splitting on spaces, underscores, or hyphens
    return input
        .split(/[\s_-]+/) // Split on spaces, underscores, or hyphens
        .map((word, index) => {
            // Convert to lowercase
            const lowerWord = word.toLowerCase();
            // Capitalize first letter of each word except the first
            return index === 0
                ? lowerWord
                : lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        })
        .join('');
}

// Test cases
console.log(toCamelCase("first name"));      // firstName
console.log(toCamelCase("user_id"));         // userId
console.log(toCamelCase("SCREEN_NAME"));     // screenName
console.log(toCamelCase("mobile-number"));   // mobileNumber

// Error cases
try {
    toCamelCase(undefined);
} catch (e) {
    console.error(e.message);  // Input cannot be null or undefined
}

try {
    toCamelCase(null);
} catch (e) {
    console.error(e.message);  // Input cannot be null or undefined
}

try {
    toCamelCase(1234);
} catch (e) {
    console.error(e.message);  // Input must be a string
}

function toDotCase(input) {
    // Check for null or undefined
    if (input === null || input === undefined) {
        throw new Error('Input cannot be null or undefined');
    }

    // Check if input is a string
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Check if string is empty
    if (input.length === 0) {
        throw new Error('Input cannot be an empty string');
    }

    // Convert to dot.case by splitting on spaces, underscores, hyphens, or camelCase boundaries
    return input
        .replace(/([a-z])([A-Z])/g, '$1.$2') // Handle camelCase
        .split(/[\s_-]+/) // Split on spaces, underscores, or hyphens
        .join('.')
        .toLowerCase();
}

// Test cases
console.log(toDotCase("first name"));      // first.name
console.log(toDotCase("user_id"));         // user.id
console.log(toDotCase("SCREEN_NAME"));     // screen.name
console.log(toDotCase("mobile-number"));   // mobile.number
console.log(toDotCase("firstName"));       // first.name

// Error cases
try {
    toDotCase(undefined);
} catch (e) {
    console.error(e.message);
}

try {
    toDotCase(null);
} catch (e) {
    console.error(e.message);
}

try {
    toDotCase(1234);
} catch (e) {
    console.error(e.message);
}

