import "./form.css";

export function Form() {
  return (
    <div className="main">
      <form>
        <div className="li-pair">
          <label htmlFor="fullname">Fullname</label>
          <input type="text" name="fullname" className="fullname" />
        </div>
        <div className="li-pair">
          <label htmlFor="email">Email</label>
          <input type="email" name="email"  className="email" />
        </div>
        <div className="li-pair">
          <label htmlFor="phone">Phone number</label>
          <input type="number" name="phone" className="phone" />
        </div>
        <div className="li-pair">
          <label htmlFor="pass">Password</label>
          <input type="password" className="pass" />
        </div>
        <div className="li-pair">
          <label htmlFor="againPass">Again password</label>
          <input type="password" className="againPass" />
        </div>
        <div className="sbutton">
            <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
