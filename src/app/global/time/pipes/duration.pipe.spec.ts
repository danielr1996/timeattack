import { DurationPipe } from 'src/app/global/time/pipes/duration.pipe';

// FIXME: Write tests
describe('TimePipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });
});
