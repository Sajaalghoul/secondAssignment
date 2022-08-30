import { Injectable } from '@angular/core';
import { files } from '../FilesModel';


@Injectable({
  providedIn: 'root'
})

export class FilesService {
  files:files[]=[
    {id:1,name:"first file",description:"file 1"},
    {id:2,name:"second file",description:"file 2"},
    {id:3,name:"third file",description:"file 3"}
  ]
  constructor() { 

  }
  getFiles():files[]{
    return this.files;

  }
  
}
