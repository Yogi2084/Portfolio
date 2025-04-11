const About = () => {
    return (
      <div className="w-full  flex flex-col md:flex-row items-center md:items-start justify-center gap-7 max-w-screen-md mx-auto  px-4 ">
        <div>
          <h1 className="text-white md:w-35 md:sticky-10 font-medium text-start md:text-center">
            About
          </h1>
        </div>
        <div className="text-white flex-wrap flex flex-col gap-2  text-start ">
          <p> I'm Yogananda K S, a fullstack developer who loves building cool stuff for the web.</p>
<p>
  I enjoy creating responsive and user-friendly web apps using tools like React, Tailwind CSS,
  Node.js, and PostgreSQL.
</p>
<p>
  I'm all about writing clean code and building things that scale well and work smoothly.
</p>
<p>
  When I’m not coding, I’m usually learning something new, exploring ideas, or working on side projects.
  I’m always up for a good collaboration and growing with others.
</p>

          
        </div>
      </div>
    );
  };
  
  export default About;