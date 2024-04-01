function privateCounter() {
  let _count = 0;
  return {
    increaseCount() {
      _count += 1;
    },
    decreaseCount() {
      _count -= 1;
    },
    getCount() {
      console.log(_count);
    },
  };
}

const counter = privateCounter();

counter.increaseCount();
counter.getCount();
counter.decreaseCount()
counter.decreaseCount()
counter.getCount()