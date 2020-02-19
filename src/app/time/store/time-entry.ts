export class TimeEntry{
  id: string
  public start: PointInTime;
  public end: PointInTime;

}

export class PointInTime{
  public hour: number;
  public minute: number;
}
