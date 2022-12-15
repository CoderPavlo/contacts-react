import './App.css';
import React, { useState, useRef } from "react";
import { useForm } from 'react-hook-form'
import Contacts from './Contacts';

function App() {
  const [appData, SetAppData]=useState(GetDefaultappData());
  const { register, handleSubmit } = useForm();
  const ref = useRef();

  function handleRegistration(data){
    if(data.name!==""){

      let contacts = appData.contacts;
      contacts.unshift(data.name);
      SetAppData({contacts: contacts});

      localStorage.setItem('appData', JSON.stringify({contacts:contacts}));
      ref.current.reset();
    }
  }  

  function GetDefaultappData(){

    let json = localStorage.getItem("appData");
    let Result=JSON.parse(json);

    if(Result===null)
            Result = {
                contacts: []
            }
    return Result;
  }

  function Clear(){
    SetAppData({contacts:[]});
    localStorage.setItem('appData', null);
  }
  return (
    <div className="App">
      <h1>Контакти</h1>
      <form className='box' onSubmit={handleSubmit(handleRegistration)} ref={ref}>
        <div className='input-block'>
          <label className="label" htmlFor="name">Ім'я</label>
          <input className="name-input" name="name" type="text" {...register('name')}/>
        </div>
        <input className="button" type="submit" value="Додати контакт"/>
      </form>
      <Contacts data={appData}/>
      <h4 style={{margin: -10 + 'px auto'}}>Кількість контактів: {appData.contacts.length}</h4>
      <input className="button" type="button" value="Очистити" onClick={Clear}/>
    </div>
  );
}

export default App;
