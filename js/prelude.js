cast = function(xs) {
  // the same object, but Roy will now consider
  // its type to be Native instead of [a], which
  // doesn't support .push nor .length
  return xs;
};

value = function(x) {
  // in my opinion, (value x) looks better than (x ()).
  return x();
};
