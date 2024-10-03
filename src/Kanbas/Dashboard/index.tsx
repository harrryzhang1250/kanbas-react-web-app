import { Link } from "react-router-dom";

const courses = [
  { id: 'CS1234', name: 'Web Development', description: 'Full Stack software developer' },
  { id: 'CS2345', name: 'Node JS', description: 'Backend development with Node.js' },
  { id: 'CS3456', name: 'Database Design', description: 'Learn SQL and database management' },
  { id: 'CS4567', name: 'DevOps', description: 'Learn CI/CD, Docker, and Kubernetes' },
  { id: 'CS5678', name: 'Machine Learning', description: 'Introduction to AI and ML' },
  { id: 'CS6789', name: 'Cybersecurity', description: 'Learn about securing software systems' },
  { id: 'CS1234', name: 'React JS', description: 'Full Stack software developer' },
  { id: 'CS2345', name: 'Node JS', description: 'Backend development with Node.js' },
  { id: 'CS3456', name: 'Database Design', description: 'Learn SQL and database management' },
  { id: 'CS4567', name: 'DevOps', description: 'Learn CI/CD, Docker, and Kubernetes' },
  { id: 'CS5678', name: 'Machine Learning', description: 'Introduction to AI and ML' },
  { id: 'CS6789', name: 'Cybersecurity', description: 'Learn about securing software systems' },
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map(course => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to={`/Kanbas/Courses/${course.id}/Home`}>
                  <img src="/images/reactjs.jpg" width="100%" height={160}/>
                  <div className="card-body" >
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.id} {course.name}
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      {course.description}
                    </p>
                    <button className="btn btn-primary"> Go</button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

