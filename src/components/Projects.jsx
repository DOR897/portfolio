export default function Projects() {
    return (
      <section id="projects" className="container my-5">
        <h2 className="text-info">Projects</h2>
        <div className="row">
          <div className="col-md-6">
            <h5>VacationRes</h5>
            <p>Backend reservation system for flight and hotel bookings using FastAPI, PostgreSQL, Docker.</p>
          </div>
          <div className="col-md-6">
            <h5>Places to Visit</h5>
            <p>Full-stack web app using FastAPI, Streamlit, Google Maps API to add/view places on a map.</p>
          </div>
        </div>
      </section>
    );
  }
  