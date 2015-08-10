# react-as-event-mixin

An event mixin for React components

## Install

```bash
$ npm install --save react-mixin
$ npm install --save react-as-event-mixin
```

## Usage

```javascript
import React from 'react';
import ReactMixin from 'react-mixin';
import EventMixin from 'babel!react-as-event-mixin';

class Component extends React.Component {
  //blabla
}

ReactMixin(Component.prototype, EventMixin);

var instance = React.render(<Component/>, container);
instance.on('eventName1', callback1).on('eventName2', callback2).off('eventName1', callback1).fire('eventName1');
//....
```

## Methods

### on(string:name, function:callback)

Bind a callback to event.

### once(string:name, function:callback)

Bind a callback to event, the callback will run only once.

### off(string:name [, function:callback])

Unbind the callback from event.

Unbind all callbacks when no specific callback.

### fire(string:name, [data1, data2...])

Trigger an event, run all the callbacks which bind on this event.

### fireAll(string:name, [data1, data2...])

Trigger an event, and 'on' event will be trigger before the callbacks.

Just like this: `fireAll('change')` will also trigger the `onChange` function on `this.props`.

## Development

```bash
$ npm start
$ open http://127.0.0.1:3000/demo/demo.html
```

## License
The MIT License (MIT)

Copyright (c) 2015 天镶

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
