import {Injectable} from '@angular/core';
import {compareDesc, differenceInMinutes, parse} from "date-fns";
import {map} from "rxjs/operators";
import {format} from "date-fns/fp";
import {Observable} from "rxjs";
import flow from 'lodash/fp/flow'
import {groupBy} from "lodash";
/**
 * @deprecated
 */
@Injectable({
  providedIn: 'root'
})
export class TimeCalculationService {

  // constructor(private timeRangeStore: TimeRangeStore, private timeRangeQuery: TimeRangeQuery) {
  // }


  // public groupByDays(): Observable<{ date: Date, timeRanges: TimeRange[] }[]> {
  //   return this.timeRangeQuery.selectAll().pipe(
  //     map(timeRanges => {
  //       timeRanges.sort((a, b) => compareDesc(new Date(a.start), new Date(b.start)));
  //       return Object.entries(groupBy(timeRanges, flow((timerange: TimeRange) => new Date(timerange.start), format("yyyy-MM-dd")))).map(([date, timeRanges]) => ({
  //         date: parse(date, 'yyyy-MM-dd', new Date()),
  //         timeRanges: timeRanges
  //       })) as { date: Date, timeRanges: TimeRange[] }[];
  //     }));
  // }
}

// export const defaultTime = differenceInMinutes(new Date(1960, 1, 1, 7, 42, 0, 0), new Date(1960, 1, 1, 0, 0, 0, 0))

// export function getTotalHours(timeRanges: TimeRange[]): number {
//   //FIXME: load date correctly from store so that new Date(...) isn't necessary
//   let totalHours = timeRanges.map((timeRange => differenceInMinutes(new Date(timeRange.end), new Date(timeRange.start)))).reduce((a, b) => a + b);
//   let pause = 0;
//   if (totalHours > 9 * 60) {
//     pause = 45;
//   } else if (totalHours > 6 * 60) {
//     pause = 30;
//   }
//   return totalHours - pause;
// }

// export function getOverTime(duration: number): number {
//   return duration - defaultTime;
// }

// export function getGroupedOverTime(timeRanges: { date: Date, timeRanges: TimeRange[] }[]): number {
//   if (timeRanges.length === 0) {
//     return 0;
//   } else {
//     return timeRanges.map(t => flow(t => t.timeRanges, getTotalHours, getOverTime)(t)).reduce((a, b) => a + b);
//   }
// }
