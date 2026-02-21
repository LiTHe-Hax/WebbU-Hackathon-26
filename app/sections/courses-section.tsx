import CoursePreview from "~/components/course-preview";
import ExamPreview from "~/components/exam-preview";

export default function CoursesSection() {
  return (
    <div style={{
        display: "flex",
        flexDirection: "row",
        background: "white",
        margin: "24px 0"
    }}>
        <div style={{
            flexGrow: "2",
            padding: "0 16px"
        }}>
            <div style={{
                display: "flex",
                background: "white",
                justifyContent: "space-between",
                color: "black",
                margin: "0 0 8px 0"
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "20px",
                    fontWeight: "600",
                    gap: "4px"
                }}>
                    <h2>Courses and programs</h2>
                    <svg width="1em" height="1em" viewBox="0 0 32 32"
                    style={{
                    color: "rgb(3, 120, 124)"
                }}><path d="M16 29c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16s5.82 13 13 13zm-3.5-18.016c1.677-3.326 7-2.113 7 1.004s-3.496 2.649-3.496 5.335M15.842 23a1.001 1.001 0 10-.002-2.007A1.001 1.001 0 0015.842 23z" stroke="currentColor" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <a style={{
                    color: "rgb(3, 120, 124)",
                    fontSize: "14px"
                }}>Show all</a>
            </div>
            <div style={{
                borderBottom: "1px solid #03787c"
            }}>
                <CoursePreview code="6CMJU" name="Computer Science and Software Engineering, M Sc in Engineering" />
                <CoursePreview code="IDAGENUS" name="Gender-awareness course for teaching assistants (IDA)"/>
                <CoursePreview code="FU2020" name="Fadderutbildning"/>
            </div>
        </div>
        <div style={{
            background: "white",
            color: "black",
            flexGrow: "1",
            padding: "0 16px"
        }}>
            <div style={{
                display: "flex",
                background: "white",
                justifyContent: "space-between",
                color: "black",
                margin: "0 0 8px 0"
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "20px",
                    fontWeight: "600",
                    gap: "4px"
                }}>
                    <h2>Upcoming for you</h2>
                    <svg width="1em" height="1em" viewBox="0 0 32 32"
                    style={{
                    color: "rgb(3, 120, 124)"
                }}><path d="M16 29c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16s5.82 13 13 13zm-3.5-18.016c1.677-3.326 7-2.113 7 1.004s-3.496 2.649-3.496 5.335M15.842 23a1.001 1.001 0 10-.002-2.007A1.001 1.001 0 0015.842 23z" stroke="currentColor" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <a style={{
                    color: "rgb(3, 120, 124)",
                    fontSize: "14px"
                }}>Show all</a>
            </div>
            <ExamPreview code="TATB04" name="Introductory Course in Calculus (TEN3)" date="March 10" />
            <ExamPreview code="TFYA87" name="Physics and Mechanics (TEN1)" date="March 7"/>
            <ExamPreview code="TSRT19" name="Automatic Control (TEN1)" date="March 6"/>
        </div>
    </div>
  );
}