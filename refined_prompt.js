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

