import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { LoadingComponent } from "./loading/loading.component";
import { MessagesComponent } from "./messages/messages.component";
import { SafeUrlPipe } from "./pipes/safe-url.pipe";

@NgModule({
  declarations: [MessagesComponent, LoadingComponent, SafeUrlPipe],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [MessagesComponent, LoadingComponent, SafeUrlPipe],
})
export class SharedModule {}
