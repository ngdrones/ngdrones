/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Ardrone', () => {
  let service;

  beforeEach(module('home'));

  beforeEach(inject((Ardrone) => {
    service = Ardrone;
  }));

  it('should equal Ardrone', () => {
    expect(service.get()).to.equal('Ardrone');
  });
});
