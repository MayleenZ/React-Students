import { data } from "../data/studentData";

function Scores() {
  return (

    <div className="students">


      {data.map(({ name, scores }) => (
        <div key={name}>
          <h1>{name}'s scores:</h1>

          <ul>
            {scores.map(({ score, date }, indx) => (
              <li key={indx}>
                <h2>Score: {score}</h2>
                <h3>Date: {date}</h3>
              </li>
            ))}
          </ul>
        </div>
      ))}




    </div>


  );
}

export default Scores;

