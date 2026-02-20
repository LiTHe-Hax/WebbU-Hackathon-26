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
        fontSize: "14px",
        fontWeight: "400"
    }}>
        <div>
            <h4>Lisam-support</h4>
            <p>Inspiration</p>
            <p>Manuals & guides</p>
            <p>Contact & support</p>
        </div>
        <div>
            <h4>Liunet</h4>
            <p>Liunet for students</p>
        </div>
        <div>
            <h4>Studyinfo</h4>
            <p>Course- och programm...</p>
        </div>
        <div>
            <h4>Info Centre</h4>
            <p>Submit a question to Inf...</p>
            <p><Icon type="phone" /> 013-28 10 00</p>
        </div>
        <div>
            <h4>IT Helpdesk</h4>
            <p>Submit a question to IT...</p>
            <p><Icon type="phone" /> 013-28 28 28</p>
        </div>
    </div>
  </div>;
}