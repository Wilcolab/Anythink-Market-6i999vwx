/**
 * Converts a given string to camelCase.
 * 
 * @param {string} str - The input string to convert.
 * @returns {string} - The camelCased version of the input string.
 * 
 * @example
 * // returns 'helloWorld'
 * toCamelCase('Hello World');
 * 
 * @example
 * // returns 'myVariableName'
 * toCamelCase('my_variable_name');
 */
function toCamelCase(str) {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => 
            index === 0 ? match.toLowerCase() : match.toUpperCase()
        )
        .replace(/\s+/g, '');
}