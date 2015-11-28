# mongoose disable stack trace
Disables stack trace on Validation, Cast and Version errors in mongoose to prevent accidentally sending stack traces to consumers.

## Installation

``` bash
$ npm install mongoose-disable-stack-trace
```

## Usage
It is **highly recommended** to import this library after all model declarations.
``` javascript
require('mongoose-disable-stack-trace');
```

# License

[LGPL-3](LICENSE)

Copyright (c) 2015 Faleij <faleij@gmail.com>
