import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LessonSummary } from "../model/lesson-summary";

@Component({
  selector: "lessons-list",
  templateUrl: "./lessons-list.component.html",
  styleUrls: ["./lessons-list.component.css"],
})
export class LessonsListComponent implements OnInit {
  constructor(private readonly route: ActivatedRoute) {}

  lessons: LessonSummary[];

  ngOnInit() {
    this.lessons = this.route.snapshot.data["lessons"];
  }
}
