import { data } from "../data/studentData";
// import EachStudent from './EachStudent.js'
import Scores from "./Scores";

function Students() {
  // const {data} = props
//   console.log(data[0].name);
  // const Score = {score}
// console.log(data[0].scores);
return (
    <div className ="student-bio">
      {data.map(({ name, bio}) => (
        <div key={name}>
          <h1>Name: {name}</h1>
          <h2>Bio: {bio}</h2>
          {/* <p>scores: {[score,date]}</p> */}
        </div>
      ))}
      <Scores />
    </div>
  );
}

export default Students;

