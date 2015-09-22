/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Ollie', () => {
  let service;

  beforeEach(module('home'));

  beforeEach(inject((Ollie) => {
    service = Ollie;
  }));

  it('should equal Ollie', () => {
    expect(service.get()).to.equal('Ollie');
  });
});
