# cheapcopy
[![Build Status](https://travis-ci.org/theinfamousrj/CheapCopy.svg?branch=master)](https://travis-ci.org/theinfamousrj/CheapCopy)
[![Coverage Status](https://coveralls.io/repos/github/theinfamousrj/CheapCopy/badge.svg?branch=master)](https://coveralls.io/github/theinfamousrj/CheapCopy?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/theinfamousrj/cheapcopy/badge.svg)](https://snyk.io/test/github/theinfamousrj/cheapcopy)
[![Bless](https://cdn.rawgit.com/LunaGao/BlessYourCodeTag/master/tags/ramen.svg)](http://lunagao.github.io/BlessYourCodeTag/)

This node module is a super small deep copy for objects.

# Install

```{r, engine='bash'}
$ npm install cheapcopy
```

# Use

Super simple to use, newObject becomes a deep copy of objectToCopy.

```javascript
const CopyMachine = require('cheapcopy');

let objectToCopy = { someString: "Certainly a string.", horse: true, potion: 1 };

let newObject = CopyMachine.copy(objectToCopy);
```

# License
MIT License

Copyright (c) 2017 [Raymond John Hill](http://www.raymondjohnhill.com)

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
