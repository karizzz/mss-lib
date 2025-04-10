import React from "react";
import { Link } from "react-router-dom";
export default function LandingPage() {
  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "960px",
        margin: "0 auto",
        fontFamily: "Georgia, serif",
        color: "#333"
      }}
    >
      <Link to="/login" className="btn btn-light position-absolute" style={{ top: "20px", right: "20px", zIndex: 1000 }}>
  Sign In
</Link>
      <header className="mb-5 text-center text-white">
        <h1>Welcome to the MSS</h1>
        <h2 className="author">
          The Mathematical Sciences Society at the University of Alberta
        </h2>
      </header>

      <section className="mb-4 text-white">
        <h2>About</h2>
        <p>
          The University of Alberta Mathematical Sciences Society provides a
          welcoming, safe, and inclusive space for students of all areas of study
          to explore their mathematical interests and collaborate with their
          peers. Members of the MSS are encouraged to think creatively about math
          and explore topics beyond the scope of undergraduate coursework.
        </p>
      </section>

      <section className="mb-4 text-white">
        <h2>Becoming a Member</h2>
        <p>
          The best way you can support the MSS is to become a member. Doing so
          will also grant you the following privileges:
        </p>
        <ul>
          <li>Voting role at general meetings</li>
          <li>Ability to sign books out of the MSS Library</li>
          <li>Use of the MSS printer in the lounge</li>
          <li>Access to the members' channel in the MSS discord server</li>
        </ul>
        <p>
          Cost of membership is <strong>$5</strong> for the year. This can be
          paid in-person in the lounge or by e-transfer to
          <a href="mailto:mathmss@ualberta.ca" className="text-white text-decoration-underline"> mathmss@ualberta.ca</a>.
        </p>
        <p>
          Note that membership is <em>not</em> required to attend events or to
          use the lounge and library.
        </p>
      </section>

      <section className="mb-4 text-white">
        <h2>Events</h2>
        <h3>Board Game Night</h3>
        <p>
          Every Friday night, the MSS hosts a board game night in
          <strong> CAB 457 </strong>from <strong>5:00-7:00 PM</strong>. Come by to
          play games, hang out, and meet other students. Sometimes, pizza.
        </p>

        <h3>Reading Groups</h3>
        <p>
          The MSS runs various student-led reading groups throughout the year.
          These are a great way to meet like-minded students and learn about new
          topics outside of your coursework. Currently, we are running:
        </p>
        <ul>
          <li>
            <strong>Algebraic Geometry</strong> - Tuesdays 1:00 - 2:00 in CAB 457
          </li>
          <li>
            <strong>Algebraic Topology</strong> - Tuesdays 3:30 - 4:30 in CAB 415-B
          </li>
        </ul>
      </section>

      <section className="mb-4 text-white">
        <h2>Library</h2>
        <p>
          The MSS oversees a small collection of textbooks and notes available
          for students to use and borrow in <strong>CAB 453</strong>. Members can
          sign books out using the sheet beside the bookshelf. Everyone is welcome
          to browse and read in the lounge.
        </p>
      </section>

      <section className="text-white mb-4">
        <h2>Connect with Us</h2>
        <ul>
          <li>
          Join our: <a
              href="https://discord.gg/Jvb6dUZfx7"
              target="_blank"
              rel="noreferrer"
              className="text-white text-decoration-underline"
            >
              Discord :
            </a>
          </li>
          <li>
          Follow us : <a
              href="https://www.instagram.com/ualbertamss/"
              target="_blank"
              rel="noreferrer"
              className="text-white text-decoration-underline"
            >
               Instagram
            </a>
          </li>
          <li>
            Email us: <a href="mailto:mathmss@ualberta.ca" className="text-white text-decoration-underline">mathmss@ualberta.ca</a>
          </li>
        </ul>
      </section>

      <footer className="mt-5 text-center text-white">
        <p>© Mathematical Sciences Society, 2024</p>
        <p>
          453 Central Academic Building <br />
          University of Alberta <br />
          Edmonton, AB, T6G 2G1, Canada
        </p>
      </footer>
    </div>
  );
}
