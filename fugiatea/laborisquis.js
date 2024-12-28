/**
 * Object representing the version information.
 *
 * @typedef {Object} Version
 * @property {number} major - The major version number.
 * @property {number} minor - The minor version number.
 * @property {number} patch - The patch version number.
 * @property {number} build - The build number.
 * @property {function(): string} toString - Returns a string representation of the version.
 */

/** @type {Version} */
const VERSION = {
    major: 1,
    minor: 0,
    patch: 0,
    build: 1234,
    toString() {
        return `${this.major}.${this.minor}.${this.patch} (build ${this.build})`;
    }
};

// Example usage
console.log(`Current version: ${VERSION.toString()}`); // Output: Current version: 1.0.0 (build 1234)
