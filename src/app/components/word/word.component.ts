import { Component, OnInit } from "@angular/core";
import { Packer } from "docx";
import { saveAs } from 'file-saver';

import { experiences, education, skills, achievements } from "../../cv-data";
import { DocumentCreator } from "../../cv-generator";

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public download(): void {
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create([
      experiences,
      education,
      skills,
      achievements
    ]);

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  }

}
