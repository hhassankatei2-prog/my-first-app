import { StyleCheckbox } from "./style";

const CheckBox = ({ Name, Label, selected, setSelected,correctAns,submitted }) => {
    const isCorrect = Label === correctAns;
    const isWrong = selected === Label && !isCorrect;
    const showWrong = isWrong && submitted;
    const showCorrect = isCorrect && submitted;
    const statusClass = showCorrect ? "correct" : showWrong ? "wrong" : "";
return (
    <StyleCheckbox statusClass={statusClass} submitted={submitted}>
        <div className="class-border">
<label>
<input
type="radio"
name={Name}
checked={selected === Label}
onChange={() => setSelected(Label)} 
/>
{Label}
</label>
{showCorrect && <p>CORRECT</p>}
</div>
</StyleCheckbox>
);
};
export default CheckBox;