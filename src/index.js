var slice = Array.prototype.slice,
  noop = () => {};

function word(str) {
  return str && (str[0].toUpperCase() + str.slice(1));
}

function onName(name) {
  return 'on' + name.split(/[^a-zA-Z0-9]/).reduce((rst, w) => {
    rst += word(w) || '';
    return rst;
  }, '');
}

module.exports = {
  _events: {},
  on: function(name, cb) {
    (this._events[name] = this._events[name] || []).push(cb || noop);
    return this;
  },
  off: function(name, cb) {
    var queue,
      index;
    if (!(queue = this._events[name]))
      return this;
    if (typeof cb === 'function')
      ((index = queue.indexOf(cb)) !== -1) && (queue[index] = noop);
    else
      this._events[name] = queue.map(() => noop);
    return this;
  },
  once: function(name, cb) {
    var tmp = () => {
      cb.apply(this, slice.call(arguments));
      this.off(name, tmp);
    };
    this.on(name, tmp);
    return this;
  },
  fire: function(name) {
    var queue;
    if (!(queue = this._events[name]))
      return this;
    var data = slice.call(arguments, 1);
    queue.forEach((cb) => cb.apply(this, data));
    queue = this._events[name];
    (queue = queue.filter(cb => cb !== noop)).length === 0 ? delete this._events[name] : (this._events[name] = queue);
    return this;
  },
  fireAll: function() {
    var args = slice.call(arguments);
    var name = onName(args[0]);
    this.props[name] && this.props[name].apply(this, args.slice(1));
    return this.fire.apply(this, args);
  }
};
