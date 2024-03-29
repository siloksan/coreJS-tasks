function curryLogger (outerText) {
  return function (innerText) {
    return console.log(outerText,': ', innerText)
  }
}

const curry  = curryLogger('result');
curry('success')