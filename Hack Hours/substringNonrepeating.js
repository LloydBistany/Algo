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

const substringNonrepeating = str => {
  let cache = new Set();
  let longest = 0

  let i = 0;
  let j = 0;

  while (j < str.length) {
    if (cache.has(str[j])) {
      cache.delete(str[i]);
      i++;
    }
    else {
      cache.add(str[j]);
      longest = Math.max(longest, cache.size);
      j++;
    }
  }
  return longest;
};

test = "pwwkew";

console.log(substringNonrepeating(test));
