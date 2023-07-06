/**
 * returns every sequence of throws a single player could throw over a three-round game of rock-paper-scissors
 * rockPaperScissors(1); -> [['rock'],['paper'],['scissors']]
 * rockPaperScissors(2); ->
 * [['rock','rock'],['rock','paper'],['rock','scissors'],
 * ['paper','paper'],['paper','scissors'],['paper','rock'],
 * ['scissors','scissors'],['scissors','paper'],['scissors','rock']]
 */


function rockPaperScissors(num) {
  if (num === 0) return [];

  function rps(num, path){
    if (num === 0) {
      return outcomes.push(path);
    }
    rps(num - 1, path.concat('rock'));
    rps(num - 1, path.concat('paper'));
    rps(num - 1, path.concat('scissors'));
  }

  const outcomes = [];
  rps(num, []);
  return outcomes;
}