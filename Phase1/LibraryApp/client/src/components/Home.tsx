import { Link, useNavigate, useOutlet } from "react-router-dom";

export default function Home() {
  const outlet = useOutlet();
  const navigate = useNavigate();

  const navToPublisherList = () => {
    navigate("/publishers");
  };

  return (
    <>
      <div>
        <h1>Home</h1>

        <div className="container">
          <div className="row">
            <div className="col">
              <button
                type="button"
                onClick={() => navigate("/books")}
                className="btn btn-success m-2"
              >
                Books
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                onClick={() => navigate("/authors")}
                className="btn btn-success m-2"
              >
                Authors
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                onClick={navToPublisherList}
                className="btn btn-success m-2"
              >
                Publishers
              </button>
            </div>
          </div>
        </div>

        <div className="container-sm">
          <hr />
          <h2>Welcome to Library USA</h2>

          <section>
            Brand USA, the nation's destination marketing organization, is
            committed to promoting the United States as a premier travel
            destination and providing international travelers with information
            about U.S. travel policies. The organization exists to enrich lives
            by welcoming the world to the USA and is dedicated to fostering
            community prosperity by uniting partners, showcasing innovative
            leadership, and inspiring travel to benefit the U.S. travel industry
            and the diverse communities across the United States.
          </section>
          <hr />

          <div className="container">
            <div className="row">
              <div className="col">
                <h3>Partner Engagement Interested in partnering</h3>
                with us as we strive to enrich lives by welcoming the world to
                the USA and foster community prosperity? Brand USA provides
                opportunities for exposure in global markets through new and
                evolving co-op marketing platforms, as well as a comprehensive
                range of resources and information.
              </div>
              <div className="col">
                <h3>GoUSA TV</h3>GoUSA TV is a global, multi-channel travel
                entertainment network featuring programming about the United
                States. Our mix of programming exposes authentic USA experiences
                in all locations, showcasing the people, places, culture and
                activities that make travel in the United States truly distinct.
              </div>
              <div className="col">
                <h3>This Week's Podcast:</h3>
                Chris Donahoe, Executive Vice President & Head of AI Strategy at
                Edelman Smithfield, discusses the current state of AI, including
                "invisible" technologies that already exist, case studies
                involving PR and ROI, and the ethics of using artificial
                intelligence.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
