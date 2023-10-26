import React,{useEffect, useState} from 'react';
import Sidebar from '../components/Sidebar';
import html_logo from '../assets/html_pic.png';
import trophy from '../assets/trophy.png';
import percentile from '../assets/percentage.png';
import correctAns from '../assets/correctAns.png';
import {LineChart,Line,XAxis,YAxis, CartesianGrid,
        Tooltip,ReferenceLine } from "recharts";
import { Chart as ChartJS, ArcElement, Tooltip as toolTip, Legend as chatjsLegend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import './Dashboard.css';
import Modal from '../components/Modal/Modal';

ChartJS.register(ArcElement, toolTip);

const data = [
    {
      studentNumber: 10,
      score: 0
    },
    {
        studentNumber: 900,
        score: 37
    },
    {
      studentNumber: 50,
      score: 40
    },
    {
      studentNumber: 1000,
      score: 60
    },
    {
        studentNumber: 300,
        score: 72
    },
    {
      studentNumber: 200,
      score: 80
    },
    {
        studentNumber: 2,
        score: 100
    }
];


const options = {
    aspectRatio: 2,
    responsive: true,
    maintainAspectRatio: false,
    height: 500,
};
function Dashboard() {
    
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rank, setRank] = useState(12980);
    const [score,setScore] = useState(7);
    const [ScorePercentile, setPercentile] = useState(37);
    const [currentPercentile, setCurrenPercentile] = useState(37);

    let your_percentile = 37;
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    const handleRankChange =(e)=> {
        setRank(e.target.value);
    }

    const handleScoreChange =(e)=> {
        setScore(e.target.value); 
    }

    const handlePercentileChange =(e)=> {
        setPercentile(e.target.value);
    }

    const dataPieChart = {
        labels: ['Correct', 'Wrong or Unattempted'],
        datasets: [
          {
            data: [score, 15-score],
            backgroundColor: [
                'rgba(67, 138, 246, 1)',
               'rgba(67, 138, 246, 0.1)',
            ],
            borderWidth: 1,
          },
        ],
    };

    useEffect(()=>{
        if(score > 7){
            setCurrenPercentile(60);
        }else{
            setCurrenPercentile(37)
        }
    },[rank,score,ScorePercentile,currentPercentile]);

    return (
        <div className='main-dashboard'>
            <Sidebar />
            <div className='dashboard-area'>
                <Modal isOpen={isModalOpen} onClose={closeModal} 
                rank={rank} handleRankChange={handleRankChange}
                score={score} handleScoreChange={handleScoreChange}
                percentile={ScorePercentile} handlePercentileChange={handlePercentileChange}
                />
                <h4>Skill Test</h4>
                <div className='dashboard-area-container'>
                    <div className='area-1'>
                        <div className='html-block'>
                            <img className='html-img' src={html_logo} />
                            <div className='html-block-desc'>
                                <h3>Hypertext Markup Language</h3>
                                <p>Questions: 15 | Duration: 15 mins | Submitted on 5 June 2021</p>
                            </div>
                            <button className='html-block-button' onClick={openModal}>Update</button>
                        </div>
                        <div className='quick-statistics'>
                            <h3 style={{margin:0,padding:0}}>Quick Statistics</h3>
                            <div className='quick-statistics-content'>
                                <div className='stats-content'>
                                    <img className='stats-img' src={trophy}/>
                                    <div className='stats-content-info'>
                                        <h2>{rank}</h2>
                                        <p>YOUR RANK</p>
                                    </div>
                                </div>
                                <div className='stats-content'>
                                    <img className='stats-img' src={percentile}/>
                                    <div className='stats-content-info'>
                                        <h2>{ScorePercentile}%</h2>
                                        <p>PERCENTILE</p>
                                    </div>
                                </div>
                                <div className='stats-content-1'>
                                    <img className='stats-img' src={correctAns}/>
                                    <div className='stats-content-info'>
                                        <h2>{score} / 15</h2>
                                        <p>CORRECT ANSWERS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='comparison-graph'>
                            <h3>Comparison Graph</h3>
                            <p style={{margin:0,padding:0}}><span style={{fontWeight:'bold'}}>You scored 37% percentile</span> which is lower than the</p>
                            <p style={{margin:0,padding:0}}>average percentile 80% of all the engineers who took this assessment</p>
                            <LineChart
                                width={700}
                                height={500}
                                data={data}
                                
                                >
                                <XAxis dataKey="score" />
                                <Tooltip />
                                <Line
                                    strokeWidth={3}
                                    type="monotone"
                                    dataKey="studentNumber"
                                    activeDot={{ r: 8 }}
                                />
                                <ReferenceLine x={80} stroke="orange" strokeDasharray="3 3" label="Average Percentile" />
                                <ReferenceLine
                                    x={currentPercentile}
                                    stroke="green"
                                    strokeDasharray="3 3"
                                    label={`Your Percentile: ${currentPercentile}`}
                                />
                            </LineChart>
                        </div>
                    </div>
                    <div className='area-2'>
                        <div className='syllabus-analysis'>
                            <h3>Syllabus wise Analysis</h3>
                            <div className='progress'>
                                <h4>HTML Tools, Forms, History</h4>
                                <div className='p-bar-container'>
                                    <div class="container">    
                                        <div class="progress2 progress-moved-1">
                                            <div class="progress-bar2" >
                                            </div>                       
                                        </div> 
                                    </div>
                                    <p className='p-bar-meta' style={{color:'#438AF6'}}>80%</p>
                                </div>
                            </div>
                            <div className='progress'>
                                <h4>Tags & References in HTML</h4>
                                <div className='p-bar-container'>
                                    <div class="container">    
                                        <div class="progress3 progress-moved-2">
                                            <div class="progress-bar2" >
                                            </div>                       
                                        </div> 
                                    </div>
                                    <p className='p-bar-meta' style={{color:'#FF9142'}}>60%</p>
                                </div>
                            </div>
                            <div className='progress'>
                                <h4>Tables & CSS Basics</h4>
                                <div className='p-bar-container'>
                                    <div class="container">    
                                        <div class="progress4 progress-moved-3">
                                            <div class="progress-bar2" >
                                            </div>                       
                                        </div> 
                                    </div>
                                    <p className='p-bar-meta' style={{color:'#FB5E5E'}}>24%</p>
                                </div>
                            </div>
                            <div className='progress'>
                                <h4>React JS</h4>
                                <div className='p-bar-container'>
                                    <div class="container">    
                                        <div class="progress5 progress-moved-4">
                                            <div class="progress-bar2" >
                                            </div>                       
                                        </div> 
                                    </div>
                                    <p className='p-bar-meta' style={{color:'#2EC971'}}>96%</p>
                                </div>
                            </div>
                        </div>
                        <div className='question-analysis'>
                            <div className='q-ana-upper'>
                                <h3>Question Analysis</h3>
                                <p>{score}/ 15</p>
                            </div>
                            <p><span style={{fontWeight: 'bold'}}>You scored {score} question correct out of 15.</span> However it still needs some improvements</p>
                            <div className='pie-chart'>
                                <Doughnut style={{height:300}} data={dataPieChart} options={options}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;