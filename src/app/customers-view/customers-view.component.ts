import { Component, OnInit } from "@angular/core";
import { Customer } from "../_models/customer";
import { Observable } from "rxjs";

@Component({
  selector: "app-customers-view",
  templateUrl: "./customers-view.component.html",
  styleUrls: ["./customers-view.component.css"]
})
export class CustomersViewComponent implements OnInit {
  customers: Observable<Customer[]>;
  constructor() {}

  ngOnInit() {}
}
