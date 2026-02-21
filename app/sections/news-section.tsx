import Icon from "~/components/icon";
import NewsArticle from "~/components/news-article";
import kalas from "~/images/kalas.jpg";
import valla_vinter from "~/images/valla_vinter.jpg";
import valla from "~/images/valla.jpg";
import oom from "~/images/oom.png";
import panic from "~/images/panic.png";
import raccoon from "~/images/raccoon.jpg";
import { useState, useEffect } from "react";

export default function NewsSection({memeifyNews}: {memeifyNews: boolean}) {
    const [string1, setString1] = useState("Vill du ta emot nya studenter och samtidigt tjäna extra pengar?")
    const [string2, setString2] = useState("Föreläsning med Magdalena Andersson")
    const [string3, setString3] = useState("Säkerhetsövning på Campus Valla")

    const [desc1, setDesc1] = useState("Vill du ta emot nya studenter och samtidigt tjäna extra pengar? Vill du vara en del i årets mottagning av nya studenter 2026? Sök klassföreståndare till höstens mottagning! Vi söker nu ca 55 klassföreståndare till samtliga program inom tekni...")
    const [desc2, setDesc2] = useState("Inbjudan till öppen föreläsning om Ledarskap med Magdalena Andersson, partiledare Vi har fått möjlighet att välkomna Socialdemokraternas partiledare Magdalena Andersson till Linköpings universitet för en föreläsning om Ledarskap. Föreläsning...")
    const [desc3, setDesc3] = useState("Under fyra dagar i vecka 7 genomförs en simulerad övning om pågående dödligt våld (PDV) i samarbete med polis och räddningstjänst. Övningen ska stärka LiU:s beredskap och säkerhet.")

    const [img1, setImg1] = useState(kalas)
    const [img2, setImg2] = useState(valla_vinter)
    const [img3, setImg3] = useState(valla)

    const [author1, setAuthor1] = useState("Johanna Milsten")
    const [author2, setAuthor2] = useState("Johanna Milsten")
    const [author3, setAuthor3] = useState("Johanna Milsten")

    function memify() {
        setString1("WARNING! Lisam has been hacked!")
        setString2("New study results posted")
        setString3("Lost Ljungsbro raccoon found!")
        
        setDesc1("An unknown hacker-group has infiltrated the Lisam web app! Beware your account is no longer secure!")
        setDesc2("A new indenpen-tent study was just published on IEEE! The results suggest that LiTHe Hax should be crowned the winner of the Hackathon!");        
        setDesc3("The rogue raccoon that has been roaming around Ljungsbro has finally been found and shall now be brought to justice. (ps: he is also to be married, congratulations!)")

        setImg1(panic)
        setImg2(oom)
        setImg3(raccoon)
        
        setAuthor1("Resigned lisam-admin")
        setAuthor2("Definetly not LiTHe Hax...")
        setAuthor3("Newly married police officer")
    }

    useEffect(() => {
        if (memeifyNews) {
            memify();
        }
    }, [memeifyNews])

  return <div style={{
    background: "rgb(240, 240, 240)",
    padding: "24px 16px",
  }}>
    <div style={{
        paddingTop: "10px",
        paddingBottom: "10px",
        textAlign: "end"
    }}>
        <a style={{
            color: "rgb(3, 120, 124)",
            fontSize: "14px"
        }}>Show all</a>
    </div>
    <h2 style={{
        background: "#026d70",
        fontSize: "16px",
        width: "fit-content",
        marginTop: "8px",
        marginBottom: "10px",
        padding: "5px"
    }}>News from course and program rooms</h2>
    <NewsArticle imageUrl={img1} title={string1} description={desc1} author={author1} />
    <NewsArticle imageUrl={img2} title={string2} description={desc2} author={author2} />
    <NewsArticle imageUrl={img3} title={string3} description={desc3} author={author3} />
    <div style={{ height: "32px", background: "rgb(240, 240, 240)", maxWidth: "531px", textAlign: "center",  }}>
        <Icon type="anglesdown" />
    </div>
  </div>;
}