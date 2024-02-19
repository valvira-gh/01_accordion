import React, { useState } from "react";
import data from "./data";
import './styles.css';

// single selection
// multiple selection

const Accordian: React.FC = () => {
    // 1. Luodaan tila, joka tallettaa kulloinkin valitun elementin 'id'-attribuutin arvon.
    const [selected, setSelected] = useState<string | null>(null);

    function handleSingleSelection(dataId: string) {
        // 5. Funktio saa parametrina 'dataItem.id':n arvon, joka on jokaisen 'data' taulukon alkion uniikki arvo.
        // 6. Nimetään se argumentiksi 'dataId' hyvän nimeämiskäytännön mukaisesti. 
        
        // 7a. Kirjataan konsoliin 'dataId':n arvo, jotta nähdään mikä alkio on valittu.
        console.log('dataId:', dataId)

        // 8a. Asetetaan 'selected'-tilan arvoksi 'dataId':n arvo, jos 'dataId' on eri kuin 'selected'-tilan arvo (eli 
        // käyttäjä klikkaa eri elementtiä).
        // 8c. Jos arvot vastaavat, tiedetään käyttäjän klikanneen samaa elementtiä uudelleen, jolloin 'selected'-tilan
        // arvoksi asetetaan 'null', jolloin mikään elementti ei ole valittuna ja viimeksi valittu elementti suljetaan.
        setSelected(dataId === selected ? null : dataId);
    }
    // 7b. Kirjataan konsoliin 'selected'-tilan arvo jota verrataan 'dataId':n arvoon, jotta tiedetään niiden olevan samat.
    console.log('selected:', selected)


    return (
        <div className="wrapper">
           <div className="accordian">
            {
                // 2. Jos 'data' on olemassa ( === true) ja sen pituus on suurempi kuin 0, niin suoritetaan map-funktio.
                data && data.length > 0 ? 
                data.map(dataItem => (
                    // 3. Iteroidaan 'data' taulukko läpi ja palautetaan jokaisen alkion kohdalla uusi div-elementti,
                    // joka sisältää 'dataItem' muuttujan arvot (id, question, answer). 'id' arvo toimii jokaisen
                    // div-elementin uniikkina key-tunnisteena.
                    <div key={dataItem.id} className="item">
                        {/*4.  Annetaan div-elementille onClick-toimintona funktio 'handleSingleSelection', joka saa
                        parametrina 'dataItem.id':n arvon. Tämän käytöstä lisää itse funktion dokumentoinnissa. */}
                        <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                            {/* 8b. Tarkistetaan 'selected'-tilan arvo ja verrataan sitä 'dataItem.id'-arvoon. Mikäli ne ovat
                            vastaavat, renderöidään kyseisen 'dataItem' alkion 'answer'-attribuutin arvo. */}
                            {selected === dataItem.id ?
                                <div className="content">{dataItem.answer}</div>
                                 : null }
                        </div>
                    </div>
                )) :
                <div>No data found</div>
            }
           </div>
        </div>
    );
}

export default Accordian;
