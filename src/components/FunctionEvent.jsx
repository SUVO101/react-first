const FunctionEvent = () => {

    const getName = (fname, lname) => { // its a funtion
            return (fname + " " + lname).toUpperCase();
        };

    const doubleClickHandelar=()=>{
        alert('Double Clicked');
    }

  return (
    <div style={{padding:"10px"}}>
      <h2>{getName("Amir", "Khan")}</h2> {/*here we call function*/}
      <button onClick={()=>alert('Button Clicked')}>Click</button>
      <button onDoubleClick={doubleClickHandelar}>Double Click</button>
    </div>
  );
};

export default FunctionEvent;
