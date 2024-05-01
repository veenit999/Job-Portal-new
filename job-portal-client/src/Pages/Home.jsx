import React, { useEffect } from "react";
import { useState } from "react";
import Banner from "../Components/Banner";
import Cards from "../Components/Cards";
import Jobs from "./Jobs";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/all-jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  //filter jobs by title
  const filteredItems = jobs.filter(
    (jobs) => jobs.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //main function
  const filteredData = (jobs, query) => {
    let filteredJobs = jobs;
    //filtering input items
    if (query) {
      filteredJobs = filteredItems;
    }
    return filteredJobs.map((data, i) =>  <Cards key={i} data={data}/>);
  };
  const result = filteredData(jobs, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      {/* main content */}
      <div> 
      <div className="bg-[#FAFAFA] md:grid grid-cols-1 gap-8 lg:px-24 px-4 py-12">
        <div className="col-span-2 bg-white p-4 rounded-sm">
          <Jobs result={result} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
