import './App.css';

function Contacts(props) {
    function editContact(e){
      const result = prompt("Введіть ім'я:", "");
      const id =e.target.parentElement.getAttribute('id');
      e.target.parentElement.childNodes[0].data=result;
      let json = localStorage.getItem("appData");
      let Contacts=JSON.parse(json);
      Contacts.contacts[id]=result;
      localStorage.setItem("appData", JSON.stringify(Contacts));
    }
    let key=0;
  return (
    <div className="App">
      {props.data.contacts.map(item=>(
        <div className='contact' id={key} key={key++}>
            {item!=="" && item}
            <button className="editButton" onClick={editContact}/>
        </div>
      ))}
    </div>
  );
}

export default Contacts;
