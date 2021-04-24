/*
 * escaping a string for regex Utility function
 * from https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
 */
export default function escapeRegExp (str) {
  return str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
}
