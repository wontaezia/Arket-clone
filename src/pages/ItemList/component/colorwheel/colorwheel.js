import React from 'react'
import { COLOR_BEIGE, COLOR_YELLOW, COLOR_BLACK, COLOR_WHITE, DEFAULT_COLORS, COLORS, COLOR_NAMES } from '../../constants';
import './colorwheel.css';

export const ColorFilterWheel = ({ colorFilter, setColorFilter, COLORS, COLOR_NAMES }) => {

    return (
        <div className="PizzaContainer">
            <div className="PizzaBackground">
                <div  style={{zIndex: "10"}} id="PizzaSliceYellow" className="hold">
                    <div className="Pizza"
                        onClick={(event) => {
                setColorFilter({
                  ...colorFilter,
                  [COLOR_YELLOW]: !colorFilter[COLOR_YELLOW],
                });
              }}></div>
                </div>
                <div style={{zIndex: "10"}} id="PizzaSliceBlack" className="hold" >
                    <div className="Pizza"
                    onClick={(event) => {
                setColorFilter({
                  ...colorFilter,
                  [COLOR_BLACK]: !colorFilter[COLOR_BLACK],
                });
              }}></div>
                </div>
                <div style={{zIndex: "10"}} id="PizzaSliceWhite" className="hold">
                    <div className="Pizza"
                    onClick={(event) => {
                setColorFilter({
                  ...colorFilter,
                  [COLOR_WHITE]: !colorFilter[COLOR_WHITE],
                });
              }}></div>
                </div>
                <div style={{zIndex: "10"}} id="PizzaSliceBeige" className="hold">
                    <div className="Pizza"
                    onClick={(event) => {
                setColorFilter({
                  ...colorFilter,
                  [COLOR_BEIGE]: !colorFilter[COLOR_BEIGE],
                });
              }}></div>
                </div>
                <div style={{zIndex: "1"}} id="PizzaSliceOrange" className="hold">
                    <div className="Pizza"></div>
                </div>
                <div style={{zIndex: "1"}} id="PizzaSliceLime" className="hold">
                    <div className="Pizza" ></div>
                </div>
            </div>
        </div>
    )
}
