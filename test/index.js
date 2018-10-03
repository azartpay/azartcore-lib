"use strict";

var should = require("chai").should();
var azartcore = require("../");

describe('#versionGuard', function() {
  it('global._azartcore should be defined', function() {
    should.equal(global._azartcore, azartcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      azartcore.versionGuard('version');
    }).should.throw('More than one instance of azartcore');
  });
});
