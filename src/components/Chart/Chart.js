import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const Chart = ({ quizitem }) => {
    const { name, total } = quizitem;
    let namej=[...name];
    let totalj=[...total];
    const data = [{ name: namej, uv: totalj }];


    return (
        <div>
            <div className="row">
                <div className='col-md-6 col-sm-12'>

                    <LineChart width={600} height={300} data={data}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                    </LineChart>

                </div>
            </div>
        </div>
    );
};

export default Chart;