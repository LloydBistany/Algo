/**
 * returns every sequence of throws a single player could throw over a n-round game of rock-paper-scissors
 * rockPaperScissors(1); -> [['rock'],['paper'],['scissors']]
 * rockPaperScissors(2); ->
 * [['rock','rock'],['rock','paper'],['rock','scissors'],
 * ['paper','paper'],['paper','scissors'],['paper','rock'],
 * ['scissors','scissors'],['scissors','paper'],['scissors','rock']]
 */


function rockPaperScissors(num) {
  //edge case 
  if (num === 0) return [];
  //helper function to populate outcomes array
  function rps(num, throws) {
    if (num === 0) {
      return outcomes.push(throws);
    }
    rps(num - 1, throws.concat('rock'));
    rps(num - 1, throws.concat('paper'));
    rps(num - 1, throws.concat('scissors'));
  }


  const outcomes = [];
  //helper function is called
  rps(num, []);
  return outcomes;
}

console.log(rockPaperScissors(2));