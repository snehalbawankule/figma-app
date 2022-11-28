
import '../Home/Home.css';
import './checkbox1.css';
const Checkbox001 = () => {

    return (
      <>
            <div className='box01'>
        <input type="checkbox" id="cbox1"/> 
        <label htmlFor="cbox1"> Learn programming by 12am </label><br />
        <input type="checkbox" id="cbox2"/> 
        <label htmlFor="cbox2"> Learn how to cook by 1pm </label><br />
        <input type="checkbox" id="cbox3"/> 
        <label htmlFor="cbox3"> Pick up the kids by 2pm </label><br />
        <input type="checkbox" id="cbox4"/> 
        <label htmlFor="cbox4">have lunch by 3pm </label><br />
        <input type="checkbox" id="cbox5"/> 
        <label htmlFor="cbox5"> Go visit mum by 4pm </label><br />
      </div>

      </>
    )
  };
  export default Checkbox001;