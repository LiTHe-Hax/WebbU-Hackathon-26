export default function NewsArticle() {
  return <div style={{
        display: "flex",
        borderBottom: "1px solid #C7C7C7",
        paddingBottom: "8px",
        marginBottom: "8px",
        maxWidth: "531px"
    }}>
        <img src="https://liuonline.sharepoint.com/_vti_bin/afdcache.ashx/authitem/sites/LiUBildbank/Nyhetsbilder/Kalas%202024%20festival-7411.jpg?_oat_=1771681782_9f3782c582f1fc07fc1159bb89c60143e0985f413f1ccb401fb7f15efafac624&P1=1771629318&P2=-1492640334&P3=1&P4=HkVteXXnW%2f4WKqNci5pX2TwmElybp1AJ33aumTt2K7L0EaolHuVTYA7P9zvu8snK6831kdEYfJps4b%2bt1UeApNG7F3Mvz5F%2fh4klpII6gnDbCJoLbReBeGSt8O0yQ5Q51xiXDtMEKGPZJX2FXuN7PrufSYSrVavp8wVTeilGMz4WRv8pOGVhK4DWh0Y6n8%2fRpf0ZbFPDETRvUnl1Qd7r%2fZI6MeQu0v0W0%2fXE3O2lRGDdgUFloMIm7Svtqksx5OlhpylrqKy1OUnqsXAUWj%2fFucjxi%2f9ZQJYExsX6p4d1wcMZftomABahJzk%2fEcCKeCnnlDXAPbQDoSpjvh%2bg5vpQIA%3d%3d&width=400" style={{
            width: "150px",
            height: "112px",
            marginRight: "10px"
        }} />
        <div style={{
            color: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>
            <div style={{
                fontSize: "16px"
            }} >
                <h3 style={{ margin: "0", padding: "0" }} >title</h3>
                <p style={{ color: "#616161", margin: "0", padding: "0" }} >description</p>
            </div>
            <div style={{
                display: "flex",
                fontSize: "12px",
                gap: "8px"
            }}>
                <p style={{ color: "#616161" }}>02/10/2026</p>
                <p>Johanna Milsten in <span style={{ color: "rgb(3, 120, 124)" }}>Civilingenjör i mjukvaruteknik (6CMJ...</span></p>
            </div>
        </div>
    </div>;
}