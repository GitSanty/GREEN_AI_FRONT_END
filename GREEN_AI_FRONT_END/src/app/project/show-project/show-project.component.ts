import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GreenAiApiService } from 'src/app/green-ai-api.service';


@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css']
})
export class ShowProjectComponent implements OnInit {

  projectList$!: Observable<any[]>;
  countryList$!: Observable<any[]>;
  projectaccountingList$!: Observable<any[]>;
  projectstatusList$!: Observable<any[]>;
  providerList$!: Observable<any[]>;
  typeprojectList$!: Observable<any[]>;
  typeprojectList: any[] | undefined;

  // Map to display data with associate foreing key

  typeprojectMap: Map<number, string> = new Map();

  
  constructor(private service: GreenAiApiService) { }

  ngOnInit(): void {
    this.projectList$ = this.service.getProjectList();
  }

}
