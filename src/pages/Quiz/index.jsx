import { useState } from "react";
import CheckBox from "../../components/checkbox-task";
import { QuizStyle } from "./style";
import CustomButton from "../../components/common/Button";
const Quiz =()=>{
    
    const [selected,setSelected] = useState (null);
    const correctAns = "hassan";
    const [submitted,setSubmitted]=useState(false);

    console.log(selected);
    console.log(submitted);
    return (

    <QuizStyle>
    <div className="head-style ">
        <h2>Test Your Knowledge</h2>
        <p>Answer the questions below and click Submit to check your score.</p>
    </div>
<div className="style-checkbox container">
    <section>
<h2>Choose the Correct Answer</h2>
<CheckBox Name="hh" Label="hassan" selected={selected} 
setSelected={setSelected} correctAns={correctAns} submitted={submitted}/>

<CheckBox Name="hh" Label="h" selected={selected}
 setSelected={setSelected} correctAns={correctAns} submitted={submitted}/>

<CheckBox Name="hh" Label="r" selected={selected}
 setSelected={setSelected} correctAns={correctAns} submitted={submitted}/>

<CheckBox Name="hh" Label="y" selected={selected} 
setSelected={setSelected} correctAns={correctAns} submitted={submitted}/>

<CheckBox Name="hh" Label="j" selected={selected} 
setSelected={setSelected} correctAns={correctAns} submitted={submitted}/>
</section>
    <CustomButton
    label="SUBMIT QUIZ"
    onClickFunction= {()=>setSubmitted(true)}
    />
    </div>
    </QuizStyle>
)

};
export default Quiz;
