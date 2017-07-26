# React Aspectral
[HOC](https://facebook.github.io/react/docs/higher-order-components.html) that causes any component to 
dynamically resize to maintain a given aspect ratio.

## Installation
`npm install react-aspectral --save`

## Example usage
```javascript
import React from 'react';
import ReactDom from 'react-dom';
import Aspectral from 'react-aspectral'

const MyComp = props => {
  return (
    <div style={{width: '100%', height: '100%', background: 'red'}}>
      <p>This is my component</p>
    </div>
  );
};

// 16:9 ratio
const Widescreen = Aspectral(16, 9)(MyComp);

ReactDom.render(
  <Widescreen/>,
  document.getElementById('root')
);
```

## API
Provide Aspectral with the relative width and relative height as parameters:

```javascript
Aspectral(relWidth, relHeight)
```

This returns a function that you can pass your component into:
```javascript
Aspectral(relWidth, relHeight)(MyComp)
```

All props given to `MyComp` are passed through to it's children.