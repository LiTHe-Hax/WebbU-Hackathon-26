export default function NewsArticle({imageUrl, title, description, author}:{imageUrl:string, title:string, description:string, author:string}) {
  return <div style={{
        display: "flex",
        borderBottom: "1px solid #C7C7C7",
        paddingBottom: "8px",
        marginBottom: "8px",
        maxWidth: "531px"
    }}>
        <img src={imageUrl} style={{
            width: "150px",
            minWidth: "150px",
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
                <h3 style={{ margin: "0", padding: "0" }} >{title}</h3>
                <p style={{ color: "#616161", margin: "0", padding: "0", fontSize: "14px", paddingBottom: "14px"}} >{description}</p>
            </div>
            <div style={{
                display: "flex",
                fontSize: "12px",
                justifyContent: "space-between",
            }}>
                <p style={{ color: "#616161" }}>02/10/2026</p>
                <p>{author} in <span style={{ color: "rgb(3, 120, 124)" }}>Civilingenjör i mjukv...</span></p>
            </div>
        </div>
    </div>;
}