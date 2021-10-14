// Task 3.
let i = 0;
for (;; i++) {
    if (i % 2 === 0) {
        console.log('четное', i);
    } else {
        console.log('не четное', i);
    }

    if (i >= 100) {
      break;
    }
}