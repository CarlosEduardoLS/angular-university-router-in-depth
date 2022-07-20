import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { LessonDetail } from "../model/lesson-detail";

@Component({
  selector: "lesson",
  templateUrl: "./lesson-detail.component.html",
  styleUrls: ["./lesson-detail.component.css"],
})
export class LessonDetailComponent implements OnInit {
  constructor(private readonly route: ActivatedRoute) {
    console.log("Created LessonDetailComponent...");
  }

  lesson: LessonDetail;

  ngOnInit() {
    this.lesson = this.route.snapshot.data["lesson"];
  }
}
