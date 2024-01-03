import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import account from './data/account.json';
import { validate } from './engine/validate';
import { ValidatorProps } from './engine/validator-props';
import { EValidatorType } from './engine/validator-type.enum';
import { Engine } from 'json-rules-engine';

const INPUT = {
  "accountId": '',
  'age': 18,
  children: {
    "firstName": "john"
  },
  users: [{ age: 12 }],
  tags: [2, 4, 5]
};
const CONFIG: Record<string, ValidatorProps | ValidatorProps[]> = {
  accountId: {
    type: EValidatorType.string,
    required: {
      value:true, 
      clientError:'this field are required'
    },
    minLength: {value:1},
    maxLength: {value:2, clientError: ''},
  },
  age: {
    type: EValidatorType.number,
    required: {value:true},
    minValue: {value:18},
    maxValue: {value:60}
  },
  children:
  {
    type: EValidatorType.object,
    required: {value:true},
    objectValidators: {
      "firstName": {
        type: EValidatorType.string,
        minLength: {value:100}
      }
    },
  },
  users: {
    type: EValidatorType.collection,
    itemValidators: {
      "age": {
        type: EValidatorType.number,
        minValue: {value:22}
      }
    }
  },
   tags: {
    type:EValidatorType.collection,
    itemValidators: {
      "": {
        type: EValidatorType.number,
        minValue: {value:22}
      }
    }
   }

};


const engine = new Engine();
engine.addRule({ 
  conditions:{
    all: [
      {
        fact: 'age',
        operator: 'required',
        value: true,
        
      },
    ] 
  },
  event: { type: 'custom', params: { message: 'age is required' } }
});

function App() {
  const [output,setOutput] = useState<string>('');
  const [input,setInput] = useState<string>(JSON.stringify(INPUT,null,2));
  const [config,setConfig] = useState<string>(JSON.stringify(CONFIG,null,2));

  useEffect(() =>{
    try {
    const inputObj = JSON.parse(input);
    const configObj = JSON.parse(config);
    if(inputObj && configObj) {
      setOutput(JSON.stringify(validate(inputObj, configObj), null, 2))
    }
  }
  catch {}
  },[input,config]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {  
    setInput(e.target.value)
  }

  const handleConfigChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {  
    setConfig(e.target.value);
  }
  return (<div className='block_el' >
  <div>
    Source
    <textarea onChange={handleInputChange} value={input} /></div>
  <div>
    Validation Config
    <textarea onChange={handleConfigChange} value={config} /></div>
  <div>
    Validation Result
    <textarea value={output} /></div>
    </div>
  );
}

export default App;
