import Student from "./Student";

type StudentType = {
  id: number;
  name: string;
  age: number;
  email: string;
};

const students: StudentType[] = [
  {
    id: 1,
    name: "Arun",
    age: 20,
    email: "arun@example.com",
  },
  {
    id: 2,
    name: "Rohit",
    age: 26,
    email: "rohit@example.com",
  },
  {
    id: 3,
    name: "Jony",
    age: 25,
    email: "jony@example.com",
  },
];

function App() {
  return (
    <div>
      <h1>Student List</h1>

      <div className="student-list">
        {students.map((student) => (
          <Student
            key={student.id}
            student={student}
          />
        ))}
      </div>
    </div>
  );
}

export default App;