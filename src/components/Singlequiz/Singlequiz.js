import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Question from '../Question/Question';
import {toast,ToastContainer} from 'react-toastify';

const Singlequiz = () => {
    const quiz=useLoaderData();
    const singlequiz=quiz.data;
    // console.log(singlequiz);
    const {name,questions}=singlequiz;

    return (
        <div>
            <h3>Quiz of {name}</h3>
            {
                questions.map((question,index)=><Question key={question.id} questionss={question} serial={index}></Question>)
            }
                    <ToastContainer></ToastContainer>

        </div>
    );
};

export default Singlequiz;