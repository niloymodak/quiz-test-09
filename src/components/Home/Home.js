import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizs= useLoaderData();
    const quiztime=quizs.data;

    return (
        <div className="container">
            <div className="row mt-3 pb-5">
            {

             quiztime.map(quiz=><Quiz quiz={quiz} key={quiz.id}></Quiz>)
             }
            </div>

        </div>
    );
};

export default Home;