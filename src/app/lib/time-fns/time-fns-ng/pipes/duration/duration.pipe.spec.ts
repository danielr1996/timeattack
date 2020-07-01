import { DurationPipe } from 'src/app/lib/time-fns/time-fns-ng/pipes/duration/duration.pipe';

// FIXME: Write tests
describe('TimePipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });
});
