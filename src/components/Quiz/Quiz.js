import React from 'react';
import './Quiz.css';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';


const Quiz = ({ quiz }) => {
    const { name, logo, id } = quiz;
    return (
        <div className="col-md-3 single-card">
            <div className='card'>
                <div className='card-img'>
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="card-body d-flex justify-content-between">
                    <h6>{name}</h6>


                    <Link to={`/quiz/${id}`}>
                        <button className='d-flex justify-content-around btn btn-primary'>
                            <ArrowRightIcon className='icon my-auto' />
                            Start Practice
                        </button>
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default Quiz;