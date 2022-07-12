import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { LessonDetail } from "../model/lesson-detail";

@Component({
  selector: "lesson",
  templateUrl: "./lesson-detail.component.html",
  styleUrls: ["./lesson-detail.component.css"],
})
export class LessonDetailComponent implements OnInit {
  lesson$: Observable<LessonDetail>;

  constructor() {
    console.log("Created LessonDetailComponent...");
  }

  ngOnInit() {}
}
