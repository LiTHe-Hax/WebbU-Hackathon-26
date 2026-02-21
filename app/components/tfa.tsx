import background from "~/images/background.png";

export default function TwoFactorAuthentication() {
    return (
        <div style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: `url(${background})`,
            backgroundSize: "100%"
        }}>
            <div style={{
                color: "black",
                background: "white",
                maxWidth: "512px",
                height: "512px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                fontFamily: "Times New Roman",
                gap: "16px"
            }}>
                <img src="https://liuonline.sharepoint.com/sites/Lisam/SiteAssets/__footerlogo__Liu-Regular-White-256x64%20(1).png" style={{
                    filter: "brightness(0%)",
                    maxWidth: "196px"
                }} />
                <p style={{
                    fontSize: "24px"
                }}>tysho1337@student.liu.se</p>
                <h2 style={{
                    fontWeight: "600",
                    fontSize: "32px"
                }}>Enter code</h2>
                <div style={{
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <p style={{
                        border: "2px solid black",
                        height: "fit-content",
                        fontSize: "10px",
                        fontWeight: "600",
                        marginRight: "16px",
                        marginTop: "8px",
                        padding: "2px 4px",
                    }}>123</p>
                    <p style={{
                        fontSize: "20px",
                        margin: "0",
                        padding: "0"
                    }}>Enter the code displayed in the authenticator app on your mobile device</p>
                </div>
                <input type="text" placeholder="Code" style={{
                    fontSize: "20px",
                    margin: "0",
                    padding: "0",
                    paddingBottom: "8px",
                    borderBottom: "2px solid black"
                }} />
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px"
                }}>
                    <input type="checkbox" checked style={{
                        width: "32px"
                    }} />
                    <p style={{
                        fontSize: "20px",
                        margin: "0",
                        padding: "0"
                    }}>Ask again every 10 seconds</p>
                </div>
                <a style={{
                    color: "#0067b8"
                }}>More information</a>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: "auto",
                    gap: "4px"
                }}>
                    <div style={{
                        background: "#cccccc",
                        width: "128px",
                        height: "42px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <p style={{
                            fontSize: "20px",
                            margin: "0",
                            padding: "0"
                        }}>Cancel</p>
                    </div>
                    <div style={{
                        background: "#0067b8",
                        width: "128px",
                        height: "42px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white"
                    }}>
                        <p style={{
                            fontSize: "20px",
                            margin: "0",
                            padding: "0"
                        }}>Verify</p>
                    </div>
                </div>
            </div>
        </div>
    );
}