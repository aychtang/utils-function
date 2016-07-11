
type unaryAny = (x : any) => any;

function invoke (f : unaryAny, o : unaryAny) : unaryAny
{
  return (e) => f(o(e));
}

function get (p : string) : any
{
  return (o) => o[p];
}

function comp (f : (x) => any, g : unaryAny) : unaryAny
{
  return (x) => f(g(x));
}

export { get, comp, invoke }
