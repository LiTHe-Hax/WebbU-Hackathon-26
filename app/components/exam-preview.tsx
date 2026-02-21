export default function ExamPreview({code, name, date}:{code:string, name:string, date:string}) {
  return (
        <div style={{
                padding: "12px",
                borderTop: "1px solid #C7C7C7"
            }}>
                <div>
                    <h3 style={{
                        color: "#03787c"
                    }}>Signup for exam -&gt;</h3>
                </div>
                <p style={{
                    color: "#616161"
                }}>{code} - {name}</p>
                <p style={{
                    color: "#616161"
                }}>Deadline {date}, 2026</p>
            </div>
  );
}