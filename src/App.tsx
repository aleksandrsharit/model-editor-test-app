import React, { useState } from 'react';
import './App.css';
import ParamEditor from './components/ParamEditor';

export type Param = {
  id: number;
  name: string;
}

export type ParamValue = {
  paramId: number;
  value: string;
}

export type Model = {
  paramValues: ParamValue[];
}

function App() {

  const params: Param[] = [
    { id: 1, name: 'Назначение' },
    { id: 2, name: 'Длина' },
  ]

  const initialModel: Model = {
    'paramValues': [
      {
        'paramId': 1,
        'value': 'повседневное',
      },
      {
        'paramId': 2,
        'value': 'макси',
      },
    ]
  }

  const [model, setModel] = useState<Model>(initialModel);

  const handleUpdateModel = (updateModel: Model) => {
    setModel(updateModel);
  }

  const getModel = () => {
    return model;
  }
  console.log(getModel());


  return (
    <div >
      <ParamEditor params={params} model={model} onUpdateModel={handleUpdateModel} />
    </div >
  );
}


export default App;
