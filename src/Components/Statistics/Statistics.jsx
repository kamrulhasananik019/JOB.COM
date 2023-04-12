import React from 'react';
import '../Header/Header'
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import PageHeader from '../PageHeader/PageHeader';

const data = [

    { "id": 1, "assignmentName": "HTML & CSS", "assignment_mark": 60 },
    { "id": 2, "assignmentName": "Responsive Website", "assignment_mark": 58 },
    { "id": 3, "assignmentName": "CSS Framework", "assignment_mark": 60 },
    { "id": 4, "assignmentName": "JavaScript", "assignment_mark": 53 },
    { "id": 5, "assignmentName": "JavaScript Relations", "assignment_mark": 46 },
    { "id": 6, "assignmentName": "API", "assignment_mark": 60 },
    { "id": 7, "assignmentName": "Browser and Debug", "assignment_mark": 60 },
    { "id": 8, "assignmentName": "React", "assignment_mark": 60 }
];

const Statistics = () => {
    return (
        <div>
            <PageHeader title={'Statistics'}></PageHeader>
            
            <div>
                <ResponsiveContainer width="100%" height={400}>
                    <ComposedChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 80,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="assignmentName" label={{ value: 'Pages', position: 'insideBottomRight', offset: 0 }} scale="band" />
                        <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="assignment_mark" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="assignment_mark" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="assignment_mark" stroke="#ff7300" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;
