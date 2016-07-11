
// Unary any -> any.
type uAnyAny = (x : any) => any;

// Invoke:
// Call f on getter of o.
function invoke (f : uAnyAny, g : uAnyAny) : uAnyAny
{
  return (o) => f(g(o));
}

// Get:
// Get property of object at p.
function get (p : string) : any
{
  return (o) => o[p];
}

// Compose:
function comp (f : uAnyAny, g : uAnyAny) : uAnyAny
{
  return (x) => f(g(x));
}

export { get, comp, invoke }
