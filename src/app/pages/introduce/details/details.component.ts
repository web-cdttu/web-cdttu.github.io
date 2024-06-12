import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MENU } from 'src/app/shared/constant/menu.constant';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  breadcrumb: any;
  type: any;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((query) => {
      this.breadcrumb = [
        {
          path: 'gioi-thieu',
          label: 'GIỚI THIỆU'
        }
      ]
      if (query['type']) {
        this.type = query['type']
        const foundPage = MENU.find((item: any) => item.path == '/gioi-thieu').children.find((item: any) => location.pathname.includes(item.path))
        this.breadcrumb = [
          {
            path: 'gioi-thieu',
            label: 'GIỚI THIỆU'
          },
          {
            path: foundPage?.path,
            label: foundPage?.label
          }
        ]
      }
    })
  }
}
