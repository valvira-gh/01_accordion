import React, { useState } from "react";
import data from "./data";
import './styles.css';

const Accordian: React.FC = () => {
    const [selected, setSelected] = useState<string | null>(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState<boolean>(false);
    const [multipleSelection, setMultipleSelection] = useState<[]>([]);

    function handleSingleSelection(dataId: string) {
        console.log('dataId:', dataId)
        setSelected(dataId === selected ? null : dataId);
    }
    console.log('selected:', selected)


    return (
        <div className="wrapper">
            <button className="btn">Enable Multi-Selection</button>

           <div className="accordian">
            {
                data && data.length > 0 ? 
                data.map(dataItem => (
                    <div key={dataItem.id} className="item">
                        <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
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
