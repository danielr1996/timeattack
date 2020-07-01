import { DifferencePipe } from 'src/app/lib/time-fns/time-fns-ng/pipes/difference/difference.pipe';

describe('DifferencePipe', () => {
  it('create an instance', () => {
    const pipe = new DifferencePipe();
    expect(pipe).toBeTruthy();
  });
});
