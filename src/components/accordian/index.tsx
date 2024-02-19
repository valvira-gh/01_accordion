/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import data from './data';
import './styles.css';

const Accordian: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [enableMultiSelection, setEnableMultiSelection] =
    useState<boolean>(false);
  const [multiple, setMultiple] = useState<string[]>([]);

  function handleSingleSelection(dataId: string) {
    console.log('dataId:', dataId);
    setSelected(dataId === selected ? null : dataId);
  }

  function handleMultiSelection(dataId: string) {
    //Luodaan kopio statesta, jotta voidaan muokata sitä React-sääntöjen mukaisesti
    const copyMultiple: string[] = [...multiple];

    const findIndexOfCurrentId = copyMultiple.indexOf(dataId);

    if (findIndexOfCurrentId === -1 && dataId) {
      copyMultiple.push(dataId);
    } else if (findIndexOfCurrentId !== -1) {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(copyMultiple);
  }
  console.log('selected:', selected, 'multiple:', multiple);

  return (
    <div className='wrapper'>
      <button
        onClick={() =>
          setEnableMultiSelection((prevValue) => (prevValue = !prevValue))
        }
        className='btn'
      >
        Enable Multi-Selection
      </button>

      <div className='accordian'>
        {
          // Tarkistetaan, onko data-array olemassa ja sisältääkö se elementtejä
          data && data.length > 0 ? (
            // Jos data-array on olemassa ja sisältää elementtejä, käydään läpi jokainen elementti
            data.map((dataItem) => (
              // Jokaiselle elementille luodaan div-elementti, jonka avain on elementin id
              <div key={dataItem.id} className='item'>
                {/* Tämän div-elementin klikkaaminen laukaisee joko handleMultiSelection- 
                tai handleSingleSelection-funktion riippuen siitä, onko monivalinta käytössä */}
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className='title'
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>

                  {/* Jos monivalinta on käytössä ja elementin id löytyy multiple-arraysta, näytetään elementin vastaus
                        Jos monivalinta ei ole käytössä ja elementin id on sama kuin valitun elementin id, 
                        näytetään elementin vastaus */}
                  {enableMultiSelection
                    ? multiple.indexOf(dataItem.id) !== -1 && (
                        <div className='content'>{dataItem.answer}</div>
                      )
                    : selected === dataItem.id && (
                        <div className='content'>{dataItem.answer}</div>
                      )}
                </div>
              </div>
            ))
          ) : (
            <div>No data found</div>
          )
        }
      </div>
    </div>
  );
};

export default Accordian;
