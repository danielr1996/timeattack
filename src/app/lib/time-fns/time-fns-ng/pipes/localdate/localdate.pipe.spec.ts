import { LocaldatePipe } from 'src/app/lib/time-fns/time-fns-ng/pipes/localdate/localdate.pipe';

describe('LocaldatePipe', () => {
  it('create an instance', () => {
    const pipe = new LocaldatePipe();
    expect(pipe).toBeTruthy();
  });
});
