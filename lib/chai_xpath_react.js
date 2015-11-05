/* eslint-env node */

"use strict";

var TestUtils = require("react-addons-test-utils");

var XPathUtils = require("xpath-react/utils");

module.exports = function (Chai) {
  Chai.Assertion.addMethod("xpath", function (expression) {
    /* eslint-disable no-underscore-dangle */
    var object = this._obj;
    /* eslint-enable no-underscore-dangle */

    if (!TestUtils.isElement(object)) {
      throw new Error("Expected a React element");
    }

    var result = XPathUtils.find(object, expression);

    var expectedMessage = "Expected element to have xpath " + expression;
    var notExpectedMessage = "Expected element to not have xpath " + expression;

    this.assert(result, expectedMessage, notExpectedMessage);
  });
};
