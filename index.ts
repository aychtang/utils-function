
function invoke (f : (x : any) => any, o : (x : any) => any) : (e : any) => any
{
  return (e) => f(o(e));
}

function get (p : string) : any
{
  return (o) => o[p];
}

function comp (f : (x) => any, g : (x) => any) : (x) => any
{
  return (x) => f(g(x));
}

export { get, comp, invoke }
