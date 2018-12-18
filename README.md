# deep-value-replacer

[![Version](https://img.shields.io/npm/v/deep-value-replacer.svg)](https://www.npmvjs.org/package/deep-value-replacer)
[![Try on RunKit](https://badge.runkitcdn.com/deep-value-replacer.svg)](https://runkit.com/npm/deep-value-replacer)

Replaces in an object they specified key with a new value without care how deeply is it.


## Installation

Install the package with:
### npm
    npm install deep-value-replacer --save
### yarn 
    yarn add deep-value-replacer --save
## Usage
### Usage with Javascript
``` js
const deeper = require("deep-value-replacer");

const multipleKeys = {
            'password': 'This is a password',
            'user': {
                'email': 'This is an email',
                'password': ['This is a second password'],
            }
        };
const response = deeper.replace(multipleKeys, 'password','REPLACED!');
```

### Usage with TypeScript


```ts
import * as deeper from 'deep-value-replacer';

const multipleKeys = {
            'password': 'This is a password',
            'user': {
                'email': 'This is an email',
                'password': ['This is a second password'],
            }
        };
const response = deeper.replace(multipleKeys, 'password','REPLACED!');
```
