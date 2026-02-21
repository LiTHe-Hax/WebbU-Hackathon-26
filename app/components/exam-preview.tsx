import Icon from "./icon";

export default function ExamPreview({ code, name, date, isEditing }: { code: string, name: string, date: string, isEditing: boolean }) {
    return (
        <div style={{
            padding: "12px",
            borderTop: isEditing ? "1px solid #7c0303" : "1px solid #C7C7C7",
            background: isEditing ? "#faf0f0" : "white",
            display: "flex",
            justifyContent: "space-between",
            cursor: isEditing ? "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🗑️</text></svg>\") 16 0, auto" : "default"
        }}>
            <div>
                <div>
                    <h3 style={{
                        color: isEditing ? "#7c0303" : "#03787c",
                        fontWeight: "500"
                    }}>Signup for exam -&gt;</h3>
                </div>
                <p style={{
                    color: "#616161",
                    fontWeight: "300",
                    fontSize: "14px"
                }}>{code} - {name}</p>
                <p style={{
                    color: "#616161",
                    fontWeight: "300",
                    fontSize: "14px"
                }}>Deadline {date}, 2026</p>
            </div>
            <div style={{
                alignContent: "center"
            }}>
                <Icon type="xmark" />
            </div>
        </div>
    );
}