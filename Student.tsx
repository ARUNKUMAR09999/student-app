import type { Student as StudentType } from "./types";

interface StudentProps {
  student: StudentType;
}

function Student({ student }: StudentProps) {
  return (
    <div className="student-card">
      <h2>{student.name}</h2>
      <p>ID: {student.id}</p>
      <p>Age: {student.age}</p>
      <p>Email: {student.email}</p>
    </div>
  );
}

export default Student;