import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EventEmmiterService {
  public event = new EventEmitter()

  sendEvent(value: any) {
    this.event.emit(value)
  }
}
