import React, { useState } from "react";

const [data, setData] = useState([
  {
    key: "1",
    image: require("../../assets/programs/team.png"),
    title: "Management",
  subDetails: [
      {
        course: "Post Graduate Certificate in Finance",
        subCourses: [
          {
            subCourse: "Strategic Management",
            overview:
              "Today businesses are operating in highly dynamic marketplace. Therefore, it is important to consider not only business projects but also organizations vision and policies.
PGP in Strategic Management fosters the ability to factor the unique facets of an organization, build and recommend a strategy to capitalize on them. It also prepares you to effectively analyze business operations, identifying competition, evolve operations and survive volatile markets in a rapidly growing business environment.
",
            careerOpp:
              "Content Editor / Reviewer, Content Writer, Instructional Designer, Technical Writer, Instructional Writer, etc.",
            eligibility: [
              {
                point: "1",
                content:
                  "Bachelor degree holder / Graduate in any discipline from a recognised University.",
              },
              {
                point: "2",
                content:
                  "International / SAARC Graduate from a recognised / accredited University /Institution.",
              },
              {
                point: "3",
                content:
                  "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
              },
            ],
            durationValidity: [
              {
                point: "1",
                content: "The duration of the program is one year.",
              },
              {
                point: "2",
                content:
                  "The registration period is valid for two academic years.",
              },
            ],
            programStruct: {
              credit: "80",
              semester: [
                {
                  sem: "1",
                  subjects: [
                    "Principles and Practices of Management",
                    "Instructional Design",
                    "Effective Communication",
                  ],
                },
              ],
            },
            curriculum:
              "http://scdl.net/pdf/curriculumPDF/PGDID2020.pdf#toolbar=0&navpanes=0&scrollbar=0",
          },
          {
            subCourse: "Instructional Design",
          },
        ],
      },
    ],
  },
  {
    key: "4",
    image: require("../../assets/programs/user.png"),
    title: "Education, Humanities",
  },
  ]);


