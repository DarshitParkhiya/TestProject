import { Component, OnInit } from '@angular/core';
import { RequestModel } from '../../models/requestModel';
import { RequestTypeService } from '../../services/request-type.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  request: RequestModel = new RequestModel();
  listData: object = new Object();
  todaDate: Date = new Date('dd/MM/yyyy');

  value: any;
  options = [
    {
      id: 'request1',
      value: '',
    },
    {
      id: 'request2',
      value: '',
    },
    {
      id: 'request3',
      value: '',
    },
    {
      id: 'request4',
      value: '',
    },
  ];

  list1 = [
    // { text: 'item 1', selected: false },
    // { text: 'item 2', selected: false },
    // { text: 'item 3', selected: false },
    // { text: 'item 4', selected: false },
    // { text: 'item 5', selected: false },
  ];
  list2 = [];

  constructor(
    private requestTypeService: RequestTypeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.requestTypeService.getAllRequestType().subscribe((res) => {
      console.log('********', res);
    });
  }

  public toggleSelection(item, list) {
    item.selected = !item.selected;
  }

  public moveSelected(direction) {
    if (direction === 'left') {
      this.list2.forEach((item) => {
        if (item.selected) {
          this.list1.push(item);
        }
      });
      this.list2 = this.list2.filter((i) => !i.selected);
    } else {
      this.list1.forEach((item) => {
        if (item.selected) {
          this.list2.push(item);
        }
      });
      this.list1 = this.list1.filter((i) => !i.selected);
    }
  }

  public moveAll(direction) {
    if (direction === 'left') {
      this.list1 = [...this.list1, ...this.list2];
      this.list2 = [];
    } else {
      this.list2 = [...this.list2, ...this.list1];
      this.list1 = [];
    }
  }

  onSumbit() {
    this.request.listItem = this.list2.map(function (value) {
      return value.text;
    });
    this.request.IsActive = true;
    console.log('***********', this.request);
    this.requestTypeService.createRequest(this.request).subscribe((res) => {
      console.log(res);
    });
    this.router.navigate(['./dashboard'], {
      relativeTo: this.route,
    });
  }

  onCancel() {}

  radioChange(val: string) {
    this.request.reqestType = val;
    this.list1 = [];
    this.list2 = [];
    if (this.listData[val]) {
    } else {
      this.requestTypeService.getRequestByType(val).subscribe((res) => {
        const list: any = [];
        res.listItem.forEach((ele) => {
          list.push({ text: ele, selected: false });
        });
        this.listData[res.type] = list;
        this.list1 = this.listData[res.type];
      });
    }
  }
}
