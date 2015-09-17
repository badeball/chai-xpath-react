# chai-xpath-react

XPath matchers for [React][react] elements. It is recommended that you use
[shallow rendering][shallow-rendering] of components and make your assertion on
its output.

[react]: http://facebook.github.io/react/
[shallow-rendering]: https://facebook.github.io/react/docs/test-utils.html#shallow-rendering

## Usage

```javascript
Chai.use(require("chai-xpath-react"));
```

```javascript
var element = (
  <div>
    <ul>
      <li>foo</li>
      <li>bar</li>
    </ul>
  </div>
);

element.should.have.xpath(".//li[contains(., 'foo')]");
```
