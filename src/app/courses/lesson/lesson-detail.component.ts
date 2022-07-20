import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { LessonDetail } from "../model/lesson-detail";

@Component({
  selector: "lesson",
  templateUrl: "./lesson-detail.component.html",
  styleUrls: ["./lesson-detail.component.css"],
})
export class LessonDetailComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    console.log("Created LessonDetailComponent...");
  }

  lesson$: Observable<LessonDetail>;

  ngOnInit() {
    this.lesson$ = this.route.data.pipe(map((data) => data["lesson"]));
  }

  previous(lesson: LessonDetail) {
    this.router.navigate(["lessons", lesson.seqNo - 1], {
      relativeTo: this.route.parent,
    });
  }

  next(lesson: LessonDetail) {
    this.router.navigate(["lessons", lesson.seqNo + 1], {
      relativeTo: this.route.parent,
    });
  }
}
