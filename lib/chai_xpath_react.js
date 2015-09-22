/* eslint-env node */

"use strict";

var Reactorist = require("reactorist");

module.exports = function (Chai) {
  Chai.Assertion.addMethod("xpath", function (expression) {
    /* eslint-disable no-underscore-dangle */
    var object = this._obj;
    /* eslint-enable no-underscore-dangle */

    if (!Reactorist.isElement(object)) {
      throw new Error("Expected a React element");
    }

    var result = Reactorist.find(object, expression);

    var expectedMessage = "Expected element to have xpath " + expression;
    var notExpectedMessage = "Expected element to not have xpath " + expression;

    this.assert(result, expectedMessage, notExpectedMessage);
  });
};
