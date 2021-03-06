/* eslint-env jasmine */
/* global jest */

jest.dontMock('../get-state.js');

var getState = require('../get-state.js');

describe('getState', function () {
  it('throws on unknown value', function () {
    expect(function () {
      getState({}, null, 'unknown');
    }).toThrow();
  });
});
