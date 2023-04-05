import "./form.css";
import { useEffect, useState } from "react";
import { RxEyeOpen } from "react-icons/rx";
import { RiEyeCloseLine } from "react-icons/ri";

export function Form() {
  const [disabled, setDisabled] = useState(true);
  const [showPass, setShowPass] = useState({ eyePass: false, eyeCPass: false });

  const [value, setValue] = useState({
    fullname: "",
    email: "",
    phone: "",
    pass: "",
    confirmPass: "",
  });
  const [warning, setWarning] = useState({
    fullname: "",
    email: "",
    phone: "",
    pass: "",
    confirmPass: "",
  });
  const [success, setSuccess] = useState({
    fullname: true,
    email: false,
    phone: false,
    pass: false,
    confirmPass: false,
  });

  useEffect(() => {
      if (
        success.fullname === true &&
        success.email === true &&
        success.phone === true &&
        success.pass === true &&
        success.confirmPass === true
      ) {
        setDisabled(false);
      } else {
        setDisabled(true);
    };
  }, [success]);

  const handleMail = (e) => {
    if (
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value) === false
    ) {
      setWarning({ ...warning, [e.target.name]: "Invalid email" });
      setSuccess({ ...success, [e.target.name]: false });
    } else {
      setWarning({ ...warning, [e.target.name]: "" });
      setSuccess({ ...success, [e.target.name]: true });
    }
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handlePass = (e) => {
    if (e.target.value.length < 8) {
      setWarning({
        ...warning,
        [e.target.name]: "Characters must be 8 or greater in length",
      });
      setSuccess({ ...success, [e.target.name]: false });
    } else {
      if (
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
          e.target.value
        ) === false
      ) {
        setWarning({
          ...warning,
          [e.target.name]:
            "Password must contains upper, lower letter and number",
        });
        setSuccess({ ...success, [e.target.name]: false });
      } else {
        if (value.confirmPass !== "") {
          if (value.confirmPass !== e.target.value) {
            setWarning({
              ...warning,
              [e.target.name]: "Passwords are not the same",
            });
            setSuccess({ ...success, [e.target.name]: false });
          } else {
            setSuccess({ ...success, [e.target.name]: true });
            setWarning({ ...warning, [e.target.name]: "" });
          }
        } else {
          setWarning({ ...warning, [e.target.name]: "" });
          setSuccess({ ...success, [e.target.name]: true });
        }
      }
    }
  };
  const handleConfPass = (e) => {
    if (value.pass !== e.target.value) {
      setWarning({ ...warning, [e.target.name]: "Passwords are not the same" });
      setSuccess({ ...success, [e.target.name]: false });
    } else {
      setSuccess({ ...success, [e.target.name]: true });
      setWarning({ ...warning, [e.target.name]: "" });
    }
  };

  const handlePhone = (e) => {
    if (e.target.value.length < 10) {
      setWarning({
        ...warning,
        [e.target.name]: "Characters must be 10 or greater in length",
      });
      setSuccess({ ...success, [e.target.name]: false });
    } else {
      setWarning({ ...warning, [e.target.name]: "" });
      setSuccess({ ...success, [e.target.name]: true });
    }
  };
  return (
    <div className="main">
      <form>
        <div className="li-pair">
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            name="fullname"
            className="fullname"
            placeholder="Name Surname"
            value={value.fullname}
            onChange={handleChange}
          />
          <span className="warning">{warning.fullname}</span>
        </div>
        <div className="li-pair">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="email"
            placeholder="sample@mail.com"
            value={value.email}
            onChange={(e) => {
              handleChange(e);
              handleMail(e);
            }}
          />
          <span className="warning">{warning.email}</span>
        </div>
        <div className="li-pair">
          <label htmlFor="phone">Phone number</label>
          <input
            type="number"
            name="phone"
            className="phone"
            placeholder="+994 00 123 45 67"
            value={value.phone}
            onChange={(e) => {
              handleChange(e);
              handlePhone(e);
            }}
          />
          <span className="warning">{warning.phone}</span>
        </div>
        <div className="li-pair">
          <label htmlFor="pass">Password</label>
          <div>
            <input
              type={showPass.eyePass ? "text" : "password"}
              className="pass"
              name="pass"
              placeholder="Password"
              value={value.pass}
              onChange={(e) => {
                handleChange(e);
                handlePass(e);
              }}
            />
            {showPass.eyePass ? (
              <RxEyeOpen
                className="eye"
                onClick={() =>
                  setShowPass({ ...showPass, eyePass: !showPass.eyePass })
                }
              />
            ) : (
              <RiEyeCloseLine
                className="eye"
                onClick={() =>
                  setShowPass({ ...showPass, eyePass: !showPass.eyePass })
                }
              />
            )}
          </div>
          <span className="warning">{warning.pass}</span>
        </div>
        <div className="li-pair">
          <label htmlFor="confirmPass">Confirm password</label>
          <div>
            <input
              type={showPass.eyeCPass ? "text" : "password"}
              className="confirmPass"
              name="confirmPass"
              placeholder="Password"
              value={value.confirmPass}
              onChange={(e) => {
                handleChange(e);
                handleConfPass(e);
              }}
            />
            {showPass.eyeCPass ? (
              <RxEyeOpen
                className="eye"
                onClick={() =>
                  setShowPass({ ...showPass, eyeCPass: !showPass.eyeCPass })
                }
              />
            ) : (
              <RiEyeCloseLine
                className="eye"
                onClick={() =>
                  setShowPass({ ...showPass, eyeCPass: !showPass.eyeCPass })
                }
              />
            )}
          </div>
          <span className="warning">{warning.confirmPass}</span>
        </div>
        <div className="sbutton">
          <button type="submit" disabled={disabled}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

// true - islemir
// false - isleyir
