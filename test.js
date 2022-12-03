let obj = {}
Object.defineProperty(obj, 'a', {
  value: 1,
  writable: true,
  configurable: false
});
delete obj.a
console.log(obj)