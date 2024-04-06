import React, { useState } from 'react';
import { Model, Param } from '../App';

type Props = {
    params: Param[];
    model: Model;
    onUpdateModel: (updateModel: Model) => void;
}

const ParamEditor: React.FC<Props> = ({ params, model, onUpdateModel }) => {

    const handleChange = (paramId: number, value: string) => {
        model.paramValues.forEach((paramValue) => {
            if (paramValue.paramId === paramId) {
                paramValue.value = value;
            }
        });
        onUpdateModel({ ...model });
    };


    return (
        <div>
            {params.map((param) => {
                const paramValue = model.paramValues.find((pv) => pv.paramId === param.id);
                const value = paramValue ? paramValue.value : '';
                return (
                    <div key={param.id}>
                        <label>{param.name}</label>
                        <input
                            id={`param-${param.id}`}
                            type="text"
                            value={value}
                            onChange={(e) => handleChange(param.id, e.target.value)}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ParamEditor;