import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const Statistics = () => {
    const quizs = useLoaderData();
    const quizItems = quizs.data;
    const data = [];
    for (let i = 0; i < quizItems.length; i++) {
        data.push({
            name: quizItems[i].name,
            total: quizItems[i].total,

        });
    }
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className='col-md-6 offset-md-3 col-sm-12'>

                        <LineChart width={600} height={300} data={data}>
                            <Line type="monotone" dataKey="total" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                        </LineChart>

                    </div>
                    <h4 className="text-center mt-2 mb-5">Figure: Quiz Topics Chart</h4>
                </div>

            </div>
        </div>
    );
};

export default Statistics;