export default function CoursePreview({code, name}:{code:string, name:string}) {
  return (
        <div style={{
            background: "#f0f9fa",
            color: "black",
            borderTop: "1px solid #03787c",
            padding: "8px 16px",
            fontSize: "16px",
            fontWeight: "800"
        }}>
            <h3>{code} - {name}</h3>
        </div>
  );
}