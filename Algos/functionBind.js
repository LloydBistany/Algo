// /** returns a function with a context bound to this
 
//  const mattObj = {
//   name: 'matt',
//   shout: function() {
//       console.log(this.name);
//   }
//  };
//  let boundShout = functionBind(mattObj.shout, mattObj); 
//  boundShout(); -> prints 'matt;
 
//  const kimObj = {
//   name: 'kim',
//   shout: function() {
//       console.log(this.name);
//   }
//  };
//  boundShout = functionBind(mattObj.shout, kimObj);
//  boundShout(); -> prints 'kim'
 
//  boundShout = functionBind(mattObj.shout, {name: 'bob'});
//  boundShout(); -> prints 'bob'
//  */
function functionBind(func, context) {
  context.boundFunc = func; //could call boundFunc anything else and still works
  return function() {
    return context.boundFunc();
  };
}
