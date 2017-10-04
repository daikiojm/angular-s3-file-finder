import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import * as AWS from 'aws-sdk';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  private bucketName: string;
  private bucketRegion: string;
  private accessKeyId: string;
  private secretAccessKey: string;
  public contents: any;
  private s3: any;

  public accessKeyIdForm = new FormControl();
  public secretAccessKeyForm = new FormControl();
  public bucketRegionForm = new FormControl();
  public bucketNameForm = new FormControl();

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
     AWS.config.update({
      accessKeyId: this.accessKeyIdForm.value,
      secretAccessKey: this.secretAccessKeyForm.value,
      region: this.bucketRegionForm.value
    });

    this.s3 = new AWS.S3({
      apiVersion: '2006-03-01',
      params: { Bucket: this.bucketName }
    });

    this.listObjectsPromise().then((data) => {
        console.log(data);
        this.contents = data.Contents;
      }).catch((err) => {
        console.log(err);
      });

  }

  listObjectsPromise(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.s3.listObjects({
        Bucket: this.bucketName}, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        }
      );
    });
  }
}
