/* eslint-env node */

"use strict";

var TestUtils = require("react/addons").addons.TestUtils;

var XPath = require("xpath-react/register");

module.exports = function (Chai) {
  Chai.Assertion.addMethod("xpath", function (expression) {
    /* eslint-disable no-underscore-dangle */
    var object = this._obj;
    /* eslint-enable no-underscore-dangle */

    if (!TestUtils.isElement(object)) {
      throw new Error("Expected a React element");
    }

    var result = XPath.evaluate(
        expression,
        object,
        null,
        XPath.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    var expectedMessage = "Expected element to have xpath " + expression;
    var notExpectedMessage = "Expected element to not have xpath " + expression;

    this.assert(result, expectedMessage, notExpectedMessage);
  });
};
