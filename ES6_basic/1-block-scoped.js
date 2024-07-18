export default function taskBlock(trueOrFalse) {
  let task = false;  // Change var to let
  let task2 = true;  // Change var to let

  if (trueOrFalse) {
    task = true;     // No need to redeclare with let, just assign
    task2 = false;    // No need to redeclare with let, just assign
  }

  return [task, task2];
}
