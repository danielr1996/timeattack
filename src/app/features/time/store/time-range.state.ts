import {EntityState, EntityStore, QueryEntity, StoreConfig} from "@datorama/akita";
import {TimeRange} from "./time-range";
import {Injectable} from "@angular/core";
export interface TimeRangeState extends EntityState<TimeRange, string> { }
