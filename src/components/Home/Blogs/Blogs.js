import React from "react";
import BlogPost from "../BlogPost/BlogPost";
import wilson from "../../../images/wilson.png";
import "./Blogs.css";

const blogData = [
  {
    title: "Tips for Safe Driving With Pets In The Car",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Mr.Smith",
    authorImg: wilson,
    date: "23 April 2019",
  },
  {
    title: "Benefits Of The Online Maryland Driver Improvement Program",
    description:
      "There are a number of different reasons why you might consider attending an online driving school. In many cases, it is because doing so is ordered by the local courts. The judge might order you to take such a program because of a traffic conviction while you are on a…",
    author: "Admin",
    authorImg: wilson,
    date: "23 April 2019",
  },
  {
    title: "Vehicle Theft Protection Guidelines",
    description:
      "When buying a new car, you definitely want to score a great car for a great deal. However, dealing with push salespeople can leave you feeling frustrated, and sometimes it’s difficult to figure out how to negotiate a good price ",
    author: "Admin",
    authorImg: wilson,
    date: "23 April 2019",
  },
];

const Blogs = () => {
  return (
    <section className="blogs my-5">
      <div className="container">
        <div className="section-header text-center">
          <h5 className="text-primary text-uppercase">our blog</h5>
          <h1>From Our Blog News</h1>
        </div>
        <div className="card-deck mt-5">
          {blogData.map((blog) => (
            <BlogPost blog={blog} key={blog.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
