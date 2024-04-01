function customSetTimeout(code, delay, ...arg) {
  const now = Date.now();
  while (Date.now() < now + delay) continue;
  if (typeof code === 'function') code(...arg);
  else code;
}

function saySomething(text) {
  console.log(text);
}

customSetTimeout(23, 4000,);
