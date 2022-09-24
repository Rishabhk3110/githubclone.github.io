import React from "react";
import Profile from "./Components/Profile";
import ReactPaginate from "react-paginate";
import { MdLink } from "react-icons/md";
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";
import "./App.css";

import img from "./Components/profile2.jpg";
import RepoCard from "./Components/RepoCard";

function App() {
  const tech_arry_1 = ["javascript", "angular", "angularjs", "Angular 2+"];

  const tech_arry_2 = ["javascript", "angular", "angularjs"];

  const repoArrays = [
    {
      id: 0,
      title: "Heroes",
      subtitle: "Heroes description goes here",
      technologies: tech_arry_1,
    },
    {
      id: 1,
      title: "Heroes",
      subtitle: "Heroes description goes here",
      technologies: tech_arry_2,
    },
    {
      id: 2,
      title: "Heroes",
      subtitle: "Heroes description goes here",
      technologies: tech_arry_2,
    },
    {
      id: 3,
      title: "Heroes",
      subtitle: "Heroes description goes here",
      technologies: tech_arry_1,
    },
    {
      id: 4,
      title: "Heroes",
      subtitle: "Heroes description goes here",
      technologies: tech_arry_1,
    },
    {
      id: 5,
      title: "Heroes",
      subtitle: "Heroes description goes here",
      technologies: tech_arry_2,
    },
  ];


  const handlePageClick = async (data) => {
    console.log(data.selected);

    // let currentPage = data.selected + 1;

    // const commentsFormServer = await fetchComments(currentPage);

    // setItems(commentsFormServer);
    // scroll to the top
    //window.scrollTo(0, 0)
  };


  return (
    <div className="main">
      <Profile
        imgUrl={img}
        title="John Doe"
        subtitle={"Bio goes here"}
        socialLinks={
          "Twitter: https://twitter.com/john_doe"
        }
        location="Orlando"
      />

      <a href="https://github.com/john_doe" className="link">
        <MdLink /> https://github.com/john_doe
      </a>

      <br/>

      <div className="main__repoContainer">
        {repoArrays.map((r, index) => (
          <RepoCard
            key={index}
            title={r.title}
            subtitle={r.subtitle}
            technologies={r.technologies}
          />
        ))}
      </div>

      <br/>

      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={9}
        marginPagesDisplayed={9}
        // pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />

      <div className="Button">
      <button className="left_button"><AiOutlineArrowLeft/>Older</button>
      <button className="right_button" >Newer<AiOutlineArrowRight/></button>
      </div>

    </div>
  );
}
export default App;