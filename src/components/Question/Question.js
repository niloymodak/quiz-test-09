import { EyeIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Singlequestion from "../Singlequestion/Singlequestion";
import "./Question.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = ({ questionss, serial }) => {
  const { question, options, correctAnswer } = questionss;
  let ques = question.replace(/(<([^>]+)>)/gi, "");
  const correctAns = () => {
    toast.success(`Correct Answer: ${correctAnswer}`, {
      toastId: "success1",
      position: "top-center",
    });
  };
  const handleAnswer = (event) => {
    const answer = event.target.value;

    if (answer === correctAnswer) {
      toast("Correct!", {
        position: "top-center",
      });
    } else {
      toast("Inorrect!", {
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <div className="question">
        <div className="card mb-5">
          <div className="card-title mb-3 mt-3">
            <div className="row">
              <div className="col-md-10">
                <h4>
                  Quiz {serial + 1}:{ques}
                </h4>
              </div>
              <div className="col-md-2">
                <EyeIcon onClick={correctAns} className="eye"></EyeIcon>
                {/* <ToastContainer></ToastContainer> */}
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              {options.map((option, index) => (
                <div className="col-md-6" key={index}>
                  <div className="d-flex align-items-center justify-content-between option w-100">
                    <label htmlFor={option}>
                      <input className="input-mod"
                        type="radio"
                        id={option}
                        name="fav_language"
                        onChange={handleAnswer}
                        value={option}
                      />

                      {option}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
