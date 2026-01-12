/**
 * Converts a string to kebab case, preserving acronyms.
 * 
 * @param {string} input - The string to convert to kebab case
 * @returns {string} The input converted to kebab case
 * @throws {TypeError} If input is not a string
 * @throws {Error} If input is null or undefined
 * 
 * @example
 * toKebabCase("first name"); // "first-name"
 * toKebabCase("mobileNumber"); // "mobile-number"
 * toKebabCase("SQL Tutorial"); // "SQL-tutorial"
 * toKebabCase("SCREEN_NAME"); // "screen-name"
 * toKebabCase("SQL computer DB_Language"); // "SQL-computer-DB-language"
 * 
 * @throws
 * toKebabCase(undefined); // Error: Input cannot be undefined or null.
 * toKebabCase(null); // Error: Input cannot be undefined or null.
 * toKebabCase(1234); // TypeError: Input must be a string.
 */
function toKebabCase(input) {
    // Check for null or undefined
    if (input === null || input === undefined) {
        throw new Error("Input cannot be undefined or null.");
    }

    // Check if input is a string
    if (typeof input !== "string") {
        throw new TypeError("Input must be a string.");
    }

    // Replace underscores with hyphens
    let result = input.replace(/_/g, "-");

    // Insert hyphens before uppercase letters that follow lowercase letters
    result = result.replace(/([a-z])([A-Z])/g, "$1-$2");

    // Insert hyphens before uppercase letters followed by lowercase letters
    // (to separate acronyms from regular words)
    result = result.replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2");

    // Replace spaces with hyphens
    result = result.replace(/\s+/g, "-");

    // Convert to lowercase
    result = result.toLowerCase();

    // Remove duplicate hyphens
    result = result.replace(/-+/g, "-");

    return result;
}

module.exports = toKebabCase;