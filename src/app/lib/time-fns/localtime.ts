export class LocalTime {
  public hour?: number = 0;
  public minute?: number = 0;
  public second?: number = 0;
  public nano?: number = 0;

  static of(hour: number, minute: number): LocalTime {
    return {hour, minute};
  }
}

