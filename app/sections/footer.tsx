import Icon from "~/components/icon";

export default function Footer() {
  return <div style={{
    background: "rgb(3, 120, 124)",
    padding: "14px 24px 8px"
  }}>
    <img style={{
        maxHeight: "32px",
    }} src="https://liuonline.sharepoint.com/sites/Lisam/SiteAssets/__footerlogo__Liu-Regular-White-256x64%20(1).png"/>
    <div style={{
        display: "flex",
        marginTop: "24px",
        paddingBottom: "24px",
        fontSize: "14px",
        fontWeight: "400",
        gap: "24px"
    }}>
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px"
        }}>
            <h4 style={{ fontWeight: "400" }}>Lisam-support</h4>
            <p style={{ fontWeight: "300" }}>Inspiration</p>
            <p style={{ fontWeight: "300" }}>Manuals & guides</p>
            <p style={{ fontWeight: "300" }}>Contact & support</p>
        </div>
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px"
        }}>
            <h4 style={{ fontWeight: "400" }}>Liunet</h4>
            <p style={{ fontWeight: "300" }}>Liunet for students</p>
        </div>
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px"
        }}>
            <h4 style={{ fontWeight: "400" }}>Studyinfo</h4>
            <p style={{ fontWeight: "300" }}>Course- och programm...</p>
        </div>
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px"
        }}>
            <h4 style={{ fontWeight: "400" }}>Info Centre</h4>
            <p style={{ fontWeight: "300" }}>Submit a question to Inf...</p>
            <p style={{ fontWeight: "300" }}><Icon type="phone" /> 013-28 10 00</p>
        </div>
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px"
        }}>
            <h4 style={{ fontWeight: "400" }}>IT Helpdesk</h4>
            <p style={{ fontWeight: "300" }}>Submit a question to IT...</p>
            <p style={{ fontWeight: "300" }}><Icon type="phone" /> 013-28 28 28</p>
        </div>
    </div>
  </div>;
}