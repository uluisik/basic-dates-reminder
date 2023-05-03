import { useState } from "react";
import "./App.css";
import Data from "./Data";
function App() {
  const [holidays, setHolidays] = useState(Data);

  return (
    <main>
      <section className="container">
        <h3>National Holidays Dates</h3>
        {holidays.map((holiday) => {
          return (
            <div className="holiday" key={holiday.id}>
              <img src={holiday.img} alt="" />
              <div>
                <p>{holiday.title}</p>
                <p>{holiday.date}</p>
              </div>
            </div>
          );
        })}
        <button onClick={() => setHolidays([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
