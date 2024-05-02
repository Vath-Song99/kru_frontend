"use client"
import React, { useContext } from 'react'
import { CardTeachers } from '@/components/molecules';
import { CardTeachersTypes } from "@/@types";
import { Mycontext } from '@/context/CardContext';


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
const Favorite = () => {
    const { Data } = useContext(Mycontext);

    const favCart = Data.filter((item) => item.isFavorite === true)
    return (
        <div
            className="w-[100%]   flex justify-center lg:justify-between flex-wrap gap-4">
            {favCart.map((item, index) => (
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
    )
}

export { Favorite }