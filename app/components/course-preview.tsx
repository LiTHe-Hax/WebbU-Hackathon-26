export default function CoursePreview({code, name, isEditing}:{code:string, name:string, isEditing:boolean}) {
  return (
        <div style={{
            background: isEditing ? "#faf0f0" : "#f0f9fa",
            color: isEditing ? "red" : "black",
            borderTop: isEditing ? "1px solid #7c0303" : "1px solid #03787c",
            padding: "8px 16px",
            fontSize: "16px",
            fontWeight: "500",
            cursor: isEditing ? "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🗑️</text></svg>\") 16 0, auto" : "default"
        }}>
            <h3>{code} - {name}</h3>
        </div>
  );
}