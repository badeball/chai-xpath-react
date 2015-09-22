/* eslint-env mocha, node */

"use strict";

var Assert = require("assert");

/* eslint-disable no-unused-vars */
var React = require("react");
/* eslint-enable no-unused-vars */

var Chai = require("chai");

Chai.should();

Chai.use(require("../lib/chai_reactorist"));

var element = (
  <div>
    <ul>
      <li>foo</li>
      <li>bar</li>
    </ul>
  </div>
);

describe("chai-reactorist", function () {
  it("should throw when given something other than a React element", function () {
    Assert.throws(function () {
      "foo".should.have.xpath("bar");
    });
  });

  describe("positive", function () {
    it("should throw when given an unyielding expression", function () {

      Assert.throws(function () {
        element.should.have.xpath(".//li[contains(., 'this does not exist')]");
      });
    });

    it("should not throw when given a yielding expression", function () {
      Assert.doesNotThrow(function () {
        element.should.have.xpath(".//li[contains(., 'foo')]");
      });
    });
  });

  describe("negative", function () {
    it("should not throw when given an unyielding expression", function () {
      Assert.doesNotThrow(function () {
        element.should.not.have.xpath(".//li[contains(., 'this does not exist')]");
      });
    });

    it("should throw when given a yielding expression", function () {
      Assert.throws(function () {
        element.should.not.have.xpath(".//li[contains(., 'foo')]");
      });
    });
  });
});
