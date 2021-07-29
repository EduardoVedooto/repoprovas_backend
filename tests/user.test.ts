import func from '@controllers/func';

describe('GET/TEST', () => {
  it('is a test', () => {
    func();
    expect(1).toBe(1);
  });
});
