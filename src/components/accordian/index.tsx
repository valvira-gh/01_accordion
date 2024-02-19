import React, { useState } from "react";
import data from "./data";

// single selection
// multiple selection

export default function Accordian() {

    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className="wrapper">
           <div className="accordian">
            {
                data && data.length > 0 ? 
                data.map(dataItem => (
                    <div className="item">
                        <div className="title">
                            <h3>{dataItem.question}</h3>
                        </div>
                    </div>
                )) :
                <div>No data found</div>
            }
           </div>
        </div>
    );
}