
import React, { useState, useEffect } from 'react';
import './App.css';

const QuestionMenu = (props) => {
  const [selected, setSelected] = useState(false);

  const setTypeText = () => {
    setSelected("text");
  }
  const setTypeMS = () => {
    setSelected("MS");
  }
  const setTypeCheckBox = () => {
    setSelected("Checkbox");
  }
  return (
    <div className="button-question-menu-main-container">
      {selected ?
        <FormBuilder type={selected} setQuestionsCount={props.setQuestionsCount} questionsCount={props.questionsCount}></FormBuilder> :
        <div className="button-question-menu-container">
          <button onClick={setTypeText}>Text</button>
          <button onClick={setTypeMS}>Multiple Choice</button>
          <button onClick={setTypeCheckBox}>Checkbox</button>
        </div>
      }
    </div>
  )
}

const AddNewButton = (props) => {
  const [showQuestions, setQuestions] = useState(false);

  const onClicked = () => {
    setQuestions(true)
    props.setQuestionsCount(props.questionsCount.concat(props.questionsCount.length + 1))
  }

  return (
    <div className="new-button-container">
      {
        !showQuestions ?
          <button className="button-main" onClick={onClicked}>New Question</button> :
          null
      }
      { showQuestions ? (
        <QuestionMenu setQuestionsCount={props.setQuestionsCount} questionsCount={props.questionsCount}></QuestionMenu>
      ) :
        null
      }
    </div>
  )
}

const FormBuilder = (props) => {
  const [options, setOptions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const addOneOption = () => {
    setOptions(options.concat(options.length + 3))
  }

  return (
    <div className="">
      <form action="">
        {
          props.type === "text" ?
            <div>

              <input className="text-input" type="text" placeholder="Question" />
              <AddNewButton setQuestionsCount={props.setQuestionsCount} questionsCount={props.questionsCount}></AddNewButton>
            </div> :
            props.type === "MS" ?
              <div>

                <input className="question-input" type="text" placeholder="Question" />
                <div className="radio-input-group">
                  <input type="radio" disabled />
                  <input type="text" placeholder="Option 1" />
                </div>
                <div className="radio-input-group">
                  <input type="radio" disabled />
                  <input type="text" placeholder="Option 2" />
                </div>
                {options.map(option =>
                  <div>
                    <input type="radio" disabled />
                    <input type="text" placeholder={"Option " + option}></input>
                  </div>)}
                <button className="addoption-button" type="button" onClick={addOneOption}>Add new option +</button>
                <AddNewButton setQuestionsCount={props.setQuestionsCount} questionsCount={props.questionsCount}></AddNewButton>
              </div>
              : props.type === "Checkbox" ?
                <div>

                  <input className="question-input" type="text" placeholder="Question" />
                  <div className="radio-input-group">
                    <input type="checkbox" disabled />
                    <input type="text" placeholder="Option 1" />
                  </div>
                  <div className="radio-input-group">
                    <input type="checkbox" disabled></input>
                    <input type="text" placeholder="Option 2" />
                  </div>
                  {options.map(option => {
                    return (<div>
                      <input type="checkbox" disabled />
                      <input type="text" placeholder={"Option " + option}></input>
                    </div>)
                  })}
                  <button className="addoption-button" type="button" onClick={addOneOption}>Add new option</button>
                  <AddNewButton setQuestionsCount={props.setQuestionsCount} questionsCount={props.questionsCount}></AddNewButton>
                </div> : null

        }
      </form>
    </div>
  )
}


function App() {
  const [questionsCount, setQuestionsCount] = useState([]);
  return (
    <div className="main-container">
      <input className="form-name-input" type="text" placeholder="Form name" />
      <AddNewButton setQuestionsCount={setQuestionsCount} questionsCount={questionsCount}></AddNewButton>
    </div>
  );
}

export default App;
