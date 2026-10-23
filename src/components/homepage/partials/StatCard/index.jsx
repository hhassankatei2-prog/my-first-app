import { DivStyle } from "./style";

const StatCard =({ value, label }) => {
    return(
    <DivStyle>
        <div className="stat-card">
    
            <h3>{value}</h3>
            <p>{label}</p>
            
        </div>
    </DivStyle>)
};
export default StatCard;