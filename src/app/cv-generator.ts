import {
    AlignmentType,
    Document,
    HeadingLevel,
    Packer,
    Paragraph,
    ShadingType,
    TabStopPosition,
    TabStopType,
    TextRun
  } from "docx";
  import { experiences, education, skills, achievements } from "./cv-data";
  const PHONE_NUMBER = "07534563401";
  const PROFILE_URL = "https://www.linkedin.com/in/dolan1";
  const EMAIL = "docx@docx.com";
  
  export class DocumentCreator {
    // tslint:disable-next-line: typedef
    public create([experiences, educations, skills, achivements]: any): Document {
      const document = new Document({
        sections: [
          {
            children: [
              new Paragraph({
                text: "COMISIÓN NACIONAL DE CULTURA FÍSICA Y DEPORTE",
                heading: HeadingLevel.HEADING_6,
                children: [
                    new TextRun({
                        bold: true,
                        color: "FFFFFF"
                    })
                ]
              }),
              this.createContactInfo(PHONE_NUMBER, PROFILE_URL, EMAIL),
              this.createHeading("Education"),
              ...educations
                .map((education: { schoolName: string; startDate: { year: any; }; endDate: { year: any; }; fieldOfStudy: any; degree: any; notes: string; }) => {
                  const arr: Paragraph[] = [];
                  arr.push(
                    this.createInstitutionHeader(
                      education.schoolName,
                      `${education.startDate.year} - ${education.endDate.year}`
                    )
                  );
                  arr.push(
                    this.createRoleText(
                      `${education.fieldOfStudy} - ${education.degree}`
                    )
                  );
  
                  const bulletPoints = this.splitParagraphIntoBullets(
                    education.notes
                  );
                  bulletPoints.forEach(bulletPoint => {
                    arr.push(this.createBullet(bulletPoint));
                  });
  
                  return arr;
                })
                .reduce((prev: string | any[], curr: any) => prev.concat(curr), []),
              this.createHeading("Experience"),
              ...experiences
                .map((position: { company: { name: string; }; startDate: any; endDate: any; isCurrent: boolean; title: string; summary: string; }) => {
                  const arr: Paragraph[] = [];
  
                  arr.push(
                    this.createInstitutionHeader(
                      position.company.name,
                      this.createPositionDateText(
                        position.startDate,
                        position.endDate,
                        position.isCurrent
                      )
                    )
                  );
                  arr.push(this.createRoleText(position.title));
  
                  const bulletPoints = this.splitParagraphIntoBullets(
                    position.summary
                  );
  
                  bulletPoints.forEach(bulletPoint => {
                    arr.push(this.createBullet(bulletPoint));
                  });
  
                  return arr;
                })
                .reduce((prev: string | any[], curr: any) => prev.concat(curr), []),
              this.createHeading("Skills, Achievements and Interests"),
              this.createSubHeading("Skills"),
              this.createSkillList(skills),
              this.createSubHeading("Achievements"),
              ...this.createAchivementsList(achivements),
              this.createSubHeading("Interests"),
              this.createInterests(
                "Programming, Technology, Music Production, Web Design, 3D Modelling, Dancing."
              ),
              this.createHeading("References"),
              new Paragraph(
                "Dr. Dean Mohamedally Director of Postgraduate Studies Department of Computer Science, University College London Malet Place, Bloomsbury, London WC1E d.mohamedally@ucl.ac.uk"
              ),
              new Paragraph("More references upon request"),
              new Paragraph({
                text:
                  "This CV was generated in real-time based on my Linked-In profile from my personal website www.dolan.bio.",
                alignment: AlignmentType.CENTER
              })
            ]
          }
        ]
      });
  
      return document;
    }
  
    public createContactInfo(
      phoneNumber: string,
      profileUrl: string,
      email: string
    ): Paragraph {
      return new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun(
            `Mobile: ${phoneNumber} | LinkedIn: ${profileUrl} | Email: ${email}`
          ),
          new TextRun({
            text: "Address: 58 Elm Avenue, Kent ME4 6ER, UK",
            break: 1
          })
        ]
      });
    }
  
    public createHeading(text: string): Paragraph {
      return new Paragraph({
        text: text,
        heading: HeadingLevel.HEADING_1,
        thematicBreak: true,
      });
    }
  
    public createSubHeading(text: string): Paragraph {
      return new Paragraph({
        text: text,
        heading: HeadingLevel.HEADING_2
      });
    }
  
    public createInstitutionHeader(
      institutionName: string,
      dateText: string
    ): Paragraph {
      return new Paragraph({
        tabStops: [
          {
            type: TabStopType.RIGHT,
            position: TabStopPosition.MAX
          }
        ],
        children: [
          new TextRun({
            text: institutionName,
            bold: true
          }),
          new TextRun({
            text: `\t${dateText}`,
            bold: true
          })
        ]
      });
    }
  
    public createRoleText(roleText: string): Paragraph {
      return new Paragraph({
        children: [
          new TextRun({
            text: roleText,
            italics: true
          })
        ]
      });
    }
  
    public createBullet(text: string): Paragraph {
      return new Paragraph({
        text: text,
        bullet: {
          level: 0
        }
      });
    }
  
    // tslint:disable-next-line:no-any
    public createSkillList(skills: any[]): Paragraph {
      return new Paragraph({
        children: [new TextRun(skills.map(skill => skill.name).join(", ") + ".")]
      });
    }
  
    // tslint:disable-next-line:no-any
    public createAchivementsList(achivements: any[]): Paragraph[] {
      return achivements.map(
        achievement =>
          new Paragraph({
            text: achievement.name,
            bullet: {
              level: 0
            }
          })
      );
    }
  
    public createInterests(interests: string): Paragraph {
      return new Paragraph({
        children: [new TextRun(interests)]
      });
    }
  
    public splitParagraphIntoBullets(text: string): string[] {
      return text.split("\n\n");
    }
  
    // tslint:disable-next-line:no-any
    public createPositionDateText(
      startDate: any,
      endDate: any,
      isCurrent: boolean
    ): string {
      const startDateText =
        this.getMonthFromInt(startDate.month) + ". " + startDate.year;
      const endDateText = isCurrent
        ? "Present"
        : `${this.getMonthFromInt(endDate.month)}. ${endDate.year}`;
  
      return `${startDateText} - ${endDateText}`;
    }
  
    public getMonthFromInt(value: number): string {
      switch (value) {
        case 1:
          return "Jan";
        case 2:
          return "Feb";
        case 3:
          return "Mar";
        case 4:
          return "Apr";
        case 5:
          return "May";
        case 6:
          return "Jun";
        case 7:
          return "Jul";
        case 8:
          return "Aug";
        case 9:
          return "Sept";
        case 10:
          return "Oct";
        case 11:
          return "Nov";
        case 12:
          return "Dec";
        default:
          return "N/A";
      }
    }
  }