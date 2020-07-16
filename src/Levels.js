import React from 'react';
import './Levels.css';
import getSvgCircle from './paintFunctions.js';

function getAchivmentCircle(isAchivmentGot, radius) {
    return isAchivmentGot ? getSvgCircle("#3E3E3E", radius) : getSvgCircle("red", radius);
}

function Levels(props) {
    const launchLevelFunction = props.launchLevelFunction;
    return (
        <div className="levels">
            {
                Object.values(props.levels).map(
                    (levelPack, levelPackIndex) => <div key={levelPackIndex} style={{backgroundColor: levelPack.color}} className="levelPack">
                          <div className="levelPackName">{levelPack.name}</div>
                          <div className="levels">
                              {
                                  Object.values(levelPack.levels).map(
                                      (level, levelIndex) => <div key={levelIndex} className="levelCell">
                                          <div className="level"
                                              onClick={event => launchLevelFunction(levelPackIndex, levelIndex+1)}>
                                              <div className="levelNumber">{levelIndex+1}</div>
                                          </div>
                                      </div>
                                  )
                              }
                          </div>
                      </div>
                )
            }
        </div>
    );
}

export default Levels;