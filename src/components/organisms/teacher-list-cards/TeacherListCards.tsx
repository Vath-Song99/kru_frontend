import { CardTeachers } from "@/components/molecules";
import React, { useState } from "react";
import { CardTeachersTypes } from "@/@types";
import Link from "next/link";

const TeacherInfo: Array<CardTeachersTypes> = [
  {
    imageUrl: "Profiles/EnglishTeacher.jpg",
    nameSubject: "Physics",
    teacherName: "Chan Tareak",
    rateStars: 4.3,
    reviews: 532,
    students: 120,
    description:
      "TEFL | TESOL | IELTS | 6 years' experience I'm Aimee graduated in 2017 from Batangas.",
    pricing: 50000,
  },
  {
    imageUrl: "Profiles/example1.jpg",
    nameSubject: "English",
    teacherName: "Chan Tareak",
    rateStars: 4.3,
    reviews: 532,
    students: 120,
    description:
      "TEFL | TESOL | IELTS | 6 years' experience I'm Aimee graduated in 2017 from Batangas.",
    pricing: 50000,
  },
  {
    imageUrl: "Profiles/teacher1.avif",
    nameSubject: "Physics",
    teacherName: "Chan Tareak",
    rateStars: 4.3,
    reviews: 532,
    students: 120,
    description:
      "TEFL | TESOL | IELTS | 6 years' experience I'm Aimee graduated in 2017 from Batangas.",
    pricing: 50000,
  },
  {
    imageUrl: "Profiles/EnglishTeacher.jpg",
    nameSubject: "Physics",
    teacherName: "Chan Tareak",
    rateStars: 4.3,
    reviews: 532,
    students: 120,
    description:
      "TEFL | TESOL | IELTS | 6 years' experience I'm Aimee graduated in 2017 from Batangas.",
    pricing: 50000,
  },
  {
    imageUrl: "Profiles/EnglishTeacher.jpg",
    nameSubject: "Physics",
    teacherName: "Chan Tareak",
    rateStars: 4.3,
    reviews: 532,
    students: 120,
    description:
      "TEFL | TESOL | IELTS | 6 years' experience I'm Aimee graduated in 2017 from Batangas.",
    pricing: 50000,
  },
  {
    imageUrl: "Profiles/EnglishTeacher.jpg",
    nameSubject: "Physics",
    teacherName: "Chan Tareak",
    rateStars: 4.3,
    reviews: 532,
    students: 120,
    description:
      "TEFL | TESOL | IELTS | 6 years' experience I'm Aimee graduated in 2017 from Batangas.",
    pricing: 50000,
  },
  {
    imageUrl: "Profiles/EnglishTeacher.jpg",
    nameSubject: "Physics",
    teacherName: "Chan Tareak",
    rateStars: 4.3,
    reviews: 532,
    students: 120,
    description:
      "TEFL | TESOL | IELTS | 6 years' experience I'm Aimee graduated in 2017 from Batangas.",
    pricing: 50000,
  },
  {
    imageUrl: "Profiles/EnglishTeacher.jpg",
    nameSubject: "Physics",
    teacherName: "Chan Tareak",
    rateStars: 4,
    reviews: 532,
    students: 120,
    description:
      "TEFL | TESOL | IELTS | 6 years' experience I'm Aimee graduated in 2017 from Batangas.",
    pricing: 50000,
  },
];


const TeacherListCards = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[80%] flex justify-center lg:justify-between flex-wrap gap-4">
        {TeacherInfo.map((item, index) => (
          <CardTeachers
            key={index}
            imageUrl={item.imageUrl}
            nameSubject={item.nameSubject}
            rateStars={item.rateStars}
            students={item.students}
            reviews={item.reviews}
            teacherName={item.teacherName}
            description={item.description}
            pricing={item.pricing}
          />
        ))}
      </div>
    </div>
  );
};

export { TeacherListCards };
