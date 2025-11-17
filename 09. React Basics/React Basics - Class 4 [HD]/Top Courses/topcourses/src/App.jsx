
import React from "react";
import { Navbar } from "./components/Navbar";
import { Filter } from "./components/Filter";
import { Cards } from "./components/Cards"; // if Cards is a named export
import { Spinner } from "./components/Spinner";
import { apiUrl, filterData } from "./data";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      // Output ko save karna hai
      console.log(output);

      setCourses(output.data);
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div className="h-screen flex flex-col bg-[#40455D]">
      <div>
        <Navbar />
      </div>
      <div className="bg-[#40455D]">
        <div>
          <Filter 
          filterData={filterData}
          category={category}
          setCategory={setCategory} />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)
          }
        </div>
      </div>

    </div>
  );
}

export default App;
