"use client"
import React, { Children, createContext, useContext, useState } from 'react';
interface CardTeachersTypes {

    className?: string;
    imageUrl?: any;
    nameSubject?: string;
    teacherName?: string;
    rateStars?: number;
    reviews?: number;
    students?: number;
    description?: string;
    pricing?: number;
    isFavorite?: boolean
}
interface ContextProps {
    Data: CardTeachersTypes[],
    setData: React.Dispatch<React.SetStateAction<CardTeachersTypes[]>>
}
export const Mycontext = createContext<ContextProps>({
    Data: [],
    setData: () => { }
});


const CardContext = ({ children }: { children: any }) => {

    const [Data, setData] = useState<CardTeachersTypes[]>([
        {
            imageUrl: "Profiles/EnglishTeacher.jpg",
            nameSubject: "Physics",
            teacherName: "Chang Sichi",
            rateStars: 4.3,
            reviews: 532,
            students: 120,
            description:
                "TEFL | TESOL | IELTS | 6 years' experience I'm Aimee graduated in 2017 from Batangas.",
            pricing: 50000,
            isFavorite: true,

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
            isFavorite: true,

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
            isFavorite: true,

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
            isFavorite: true,

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
            isFavorite: true,

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
            isFavorite: true,

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
            isFavorite: true,

        },
        {
            imageUrl: "Profiles/EnglishTeacher.jpg",
            nameSubject: "Physics",
            teacherName: "Chan Tareak  ",
            rateStars: 4,
            reviews: 532,
            students: 120,
            description:
                "TEFL | TESOL | IELTS | 6 years' experience I'm Aimee graduated in 2017 from Batangas.",
            pricing: 50000,
            isFavorite: true,

        },
    ])
    const toggleVerification = (item: CardTeachersTypes) => {
        setData((prevData) => {
            const index = prevData.findIndex((d) => d === item);
            if (index === -1) {
                return prevData;
            }

            const newData = [...prevData];
            // Toggle isFavorite property
            newData[index].isFavorite = !newData[index].isFavorite;
            return newData;
        });
    };
    const contextvalue = {
        Data,
        setData,
        toggleVerification
    }
    return (
        <Mycontext.Provider value={contextvalue}> {children} </Mycontext.Provider>
    )
}

export default CardContext;