import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Footer from "../Footer";
import InputProvider from "../../components/common/inputs/input-provider";
import { InputTypes } from "../../constants/enums";
import { useFormik } from "formik";
import { signupSchema } from "./schema";
import CustomButton from "../../components/common/Button";
import { LoginStyle, PasswordField } from "./style";
import { useDispatch,useSelector } from "react-redux";
import { login } from "../../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
// import {login} from 
const LoginForm = () => {
const {t} = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
const [submittedValues, setSubmittedValues] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password, rememberMe });
    console.log("كييييييييييفك كوتش");
    setEmail("");
    setPassword("");
   setRememberMe(false);
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    console.log("Forgot password clicked");
  };

  const handleGoogleSignIn = () => {
    console.log("Sign in with Google");
  };

  const handleFacebookSignIn = () => {
    console.log("Sign in with Facebook");
  };

const formik = useFormik ({
initialValues : {
  email: "",
  password:"",

},
validationSchema : signupSchema,

 onSubmit: (values) => {

       setSubmittedValues (values);
       dispatch(login(values.email));
    },

});

     const connectField = (name) => ({

    name,
    fieldValue: formik.values[name],
    onChangeFunction: (value) => formik.setFieldValue(name, value),
    onBlurFunction: () => formik.setFieldTouched(name, true),
    errorMessage: formik.touched[name] && formik.errors[name],

  });
const fields = [
{
      type: InputTypes.EMAIL,
      fieldLabel: "Email Address",
      placeholder: "you@example.com",
      ...connectField("email"),
    },

{
      type: InputTypes.PASSWORD,
      fieldLabel: "Password",
      placeholder: "Min. 6 characters",
      ...connectField("password"),
    },
  {
      type: InputTypes.CHECKBOX,
      fieldLabel: "Remember me",
      ...connectField("isAgreed"),
    },
  ];
const dispatch = useDispatch();
const user = useSelector ((state) => state.auth.user);
const navigate = useNavigate();

  return (
    <LoginStyle >
            
           {user ? 
           (<section className="login-hero-user" dir="ltr">
            
              <div className="login-form-user">
                  <h2>{t("loginWelcomeBack")}</h2>
                  <p>{t("loginSubtitle")}</p>
                <div className="login-success-card">
                  <div className="success-icon"><FaCheck size={20}/></div>
                  <h2>{t("loginSuccessTitle")}</h2>
                  <p>{t("loginSuccessText")}</p>
                  <CustomButton
                    label={t("loginGoToHome")}
                    variant="primary"
                    fullWidth="160px"
                    onClickFunction={() => navigate("/home")}
                  />
                  </div>
                </div>
                
                <Link to="/home" id="forgotPassword">
                {t("loginBackToHome")}
              </Link>
              </section>
            ) 
            :
            (
            
            <section className="login-hero" dir="ltr">
              <div className="login-hero-content">
                {/* onSubmit={handleSubmit} */}
                <form onSubmit={formik.handleSubmit} className="login-form" >
                  <h2>{t("loginWelcomeBack")}</h2>
                  <p>{t("loginSubtitle")}</p>
                  
      
                 { fields.slice(0,1).map((ite)=> (
                  <InputProvider key={ite.name} itemObject={ite} />
                  
                  ))}
      
                  <PasswordField>
                    {fields.slice(1, 2).map((ite) => (
                      <InputProvider key={ite.name} itemObject={ite} />
                    ))}
                  </PasswordField>
      
              
                   {fields.slice(2).map((item) => (
                  <InputProvider key={item.name} itemObject={item} />
                  
                ))}
      
                  <CustomButton 
                type="submit"
                label={t("loginSignIn")}
                variant="primary"
                fullWidth="100%"
                />
      
      
                  <p>{t("loginOrContinueWith")}</p>
                  <div className="social-login">
                    <button type="button" onClick={handleGoogleSignIn}>
                      <FcGoogle size={20}/>
                      Google
                    </button>
      
                    <button type="button" onClick={handleFacebookSignIn}>
                      <FaFacebook size={20} color="blue" />
                      Facebook
                    </button>
                  </div>
                  <p>
                    {t("loginNoAccount")} <a href="#">{t("loginSignUp")}</a>
                  </p>
                </form>
              </div>
              <Link to="/home" id="forgotPassword">
                {t("loginBackToHome")}
              </Link>
            </section>
      )}
            <section className="gaq">
              <div className="gaq-content">
                <h2>{t("homeGaqTitle")}</h2>
                <p>{t("loginGaqText")}</p>
              </div>
      
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                    >
                      {t("homeAccordionItem1")}
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">....</div>
                  </div>
                </div>
      
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                    >
                      {t("homeAccordionItem2")}
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">.....</div>
                  </div>
                </div>
      
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                    >
                      {t("homeAccordionItem3")}
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">.....</div>
                  </div>
                </div>
              </div>
            </section>
            
    </LoginStyle>
  );
};

export default LoginForm;
