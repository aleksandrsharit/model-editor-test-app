import React, { useState } from 'react';
import { ModelType, ParamType } from '../types/types';
import s from './ParamsEditor.module.scss';
import uuid from 'react-uuid';

const ParamsEditor: React.FC = () => {
  const initialParams: ParamType[] = [
    { id: uuid(), name: 'Назначение' },
    { id: uuid(), name: 'Длина' },
  ];

  const initialModel: ModelType = {
    paramValues: [
      {
        paramId: initialParams[0].id,
        value: 'повседневное',
      },
      {
        paramId: initialParams[1].id,
        value: 'макси',
      },
    ],
  };

  const [model, setModel] = useState<ModelType>(initialModel);
  const [param, setParam] = useState<ParamType[]>(initialParams);
  const [editedParam, setEditedParam] = useState('');

  const getModel = () => {
    return {
      param: param,
      model: model,
    };
  };

  console.log(getModel());

  const handleModelChange = (paramId: string, value: string) => {
    const updatedParamValues = model.paramValues.map((paramValue) => {
      if (paramValue.paramId === paramId) {
        return { ...paramValue, value };
      }
      return paramValue;
    });

    setModel({ ...model, paramValues: updatedParamValues });
  };

  const activateEditParam = (paramId: string) => {
    setEditedParam(paramId);
  };

  const activateViewParam = () => {
    setEditedParam('');
  };

  const onChangeParam = (paramId: string, name: string) => {
    const updatedParamName = param.map((paramItem) => {
      if (paramItem.id === paramId) {
        return { ...paramItem, name };
      }
      return paramItem;
    });

    setParam(updatedParamName);
  };


  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        {param.map((paramItem) => (
          <div key={paramItem.id} className={s.paramContainer}>
            {editedParam === paramItem.id ? (
              <input
                id={paramItem.id}
                value={paramItem.name}
                onBlur={() => activateViewParam()}
                onChange={(e) => onChangeParam(paramItem.id, e.target.value)}
                autoFocus
              />
            ) : (
              <span onDoubleClick={() => activateEditParam(paramItem.id)}>
                {paramItem.name}
              </span>
            )}
            <input
              id={paramItem.id}
              value={model.paramValues.find((pv) => pv.paramId === paramItem.id)?.value || ''}
              onChange={(e) => handleModelChange(paramItem.id, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};



export default ParamsEditor;
