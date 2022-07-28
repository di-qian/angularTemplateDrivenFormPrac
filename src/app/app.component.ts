import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") signupForm: NgForm;

  defaultQuestion = "basic";

  onSubmit() {
    console.log(this.signupForm);
    console.log(this.signupForm.value.email);
    console.log(this.signupForm.value.password);
    console.log(this.signupForm.value.subscriptionType);
  }
}
