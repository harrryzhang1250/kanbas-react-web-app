import { Link } from "react-router-dom";

const courses = [
  { id: 'CS1234', name: 'React JS', description: 'Full Stack software developer' },
  { id: 'CS2345', name: 'Node JS', description: 'Backend development with Node.js' },
  { id: 'CS3456', name: 'Database Design', description: 'Learn SQL and database management' },
  { id: 'CS4567', name: 'DevOps', description: 'Learn CI/CD, Docker, and Kubernetes' },
  { id: 'CS5678', name: 'Machine Learning', description: 'Introduction to AI and ML' },
  { id: 'CS6789', name: 'Cybersecurity', description: 'Learn about securing software systems' },
  { id: 'CS7890', name: 'Cloud Computing', description: 'Introduction to AWS, Azure, and GCP' },
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        {courses.map(course => (
          <div className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link"
                  to={`/Kanbas/Courses/${course.id}/Home`}>
              <img src="/images/reactjs.jpg" width={200}/>
              <div>
                <h5>
                  {course.id} {course.name}
                </h5>
                <p className="wd-dashboard-course-title">
                  {course.description}
                </p>
                <button> Go</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

