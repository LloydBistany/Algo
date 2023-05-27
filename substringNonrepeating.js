/*

Given a string, find the length of the longest substring without repeating characters.
Just return the length of the substring, not the substring itself.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The longest substring is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The longest substring is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The longest substring is "wke", with the length of 3.
Note that the longest substring must actually be a substring, as "pwke" is a
subsequence and not a substring.

Example 4:
Input: ""
Output: 0
Explanation: an empty string has length 0

Hint: think about the largest valid "window" of a substring without repeating
characters. How do we keep track of this "window"?

*/

const substringNonrepeating = (str, highest = 0, counter = 0, cache = {}) => {
  if (str[0] === undefined) {
    return highest;
  }
  if (cache[str[0]]) {
    console.log("resetting counter")
    counter = 1;
  } else {
    console.log("incrementing and caching")
    counter++;
    cache[str[0]] = true;
  }
  if (counter > highest) {
    highest = counter;
  }
  return substringNonrepeating(str.slice(1), highest, counter, cache);
};

test = "abcabcbb";

console.log(substringNonrepeating(test));
