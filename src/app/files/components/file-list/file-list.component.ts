import { FilesService } from './../../services/files.service';
import { Component, OnInit } from '@angular/core';
import { files } from '../../FilesModel';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {
  filesArray:files[]=[];

  constructor(private filesService:FilesService) { }

  ngOnInit(): void {
    this.filesArray=this.filesService.getFiles();
  }

}
