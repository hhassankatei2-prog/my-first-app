import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { signupSchema } from "./schema";
import { InputTypes } from "../../constants/enums";
import CustomButton from "../../components/common/Button";
import {
  RegisterHero,
  RegisterForm,
  NameRow,
  HelperText,
  ALink,
  SocialRow,
  HrMargin,
} from "./style";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import InputProvider from "../../components/common/inputs/input-provider";
import Footer from "../Footer";


const Register = () => {
  const { t } = useTranslation();
    const [submittedValues, setSubmittedValues] = useState(null);

    const formik = useFormik ({
      initialValues: {

       fName: "",
       lName: "",
       email: "",
       phone: "",
       password: "",
       confirmPassword: "",
       isAgreed: false,
      },
      validationSchema: signupSchema,

      onSubmit: (values) => {

        setSubmittedValues(values);
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
        type: InputTypes.TEXT,
        fieldLabel: t("registerFirstNameLabel"),
        placeholder: t("registerFirstNamePlaceholder"),
        ...connectField("fName"),
      },
      {
        type: InputTypes.TEXT,
        fieldLabel: t("registerLastNameLabel"),
        placeholder: t("registerLastNamePlaceholder"),
        ...connectField("lName"),
      },
      {
        type: InputTypes.EMAIL,
        fieldLabel: t("loginEmailLabel"),
        placeholder: "you@example.com",
        ...connectField("email"),
      },
      
      {
        type: InputTypes.PASSWORD,
        fieldLabel: t("loginPasswordLabel"),
        placeholder: t("loginPasswordPlaceholder"),
        ...connectField("password"),
      },
      {
        type: InputTypes.PASSWORD,
        fieldLabel: t("registerConfirmPasswordLabel"),
        placeholder: t("registerConfirmPasswordPlaceholder"),
        ...connectField("confirmPassword"),
      },
      {
        type: InputTypes.CHECKBOX,
        fieldLabel: (
          <Trans
            i18nKey="registerAgree"
            components={{
              terms: <a href="/terms-of-service">terms</a>,
              privacy: <a href="/privacy-policy">privacy</a>,
            }}
          />
        ),
        ...connectField("isAgreed"),
      },
    ];
  
    return (
    <>
      <RegisterHero>
        <RegisterForm>
          <h3>{t("registerTitle")}</h3>
          <p>{t("registerSubtitle")}</p>
  
          <form onSubmit={formik.handleSubmit}>
            <NameRow>
              {fields.slice(0, 2).map((item) => (
                <InputProvider key={item.name} itemObject={item} />
              ))}
            </NameRow>
  
            {fields.slice(2).map((item) => (
              <InputProvider key={item.name} itemObject={item} />
            ))}
  
            <CustomButton 
            type="submit"
            label={t("registerSubmit")}
            variant="primary"
            fullWidth="100%"
            />
          </form> 
  
  
  
          {submittedValues ? (
            <pre>{JSON.stringify(submittedValues, null, 2)}</pre>
          ) : null}
  
           <HelperText>{t("registerOrSignUpWith")}</HelperText>
           <SocialRow>
            <CustomButton 
            onClickFunction={() => console.log("Google")}
            label="Google" 
           variant ="white"
            icon={FcGoogle}
            fullWidth="100%"
            />
  
  
           <CustomButton onClickFunction={() => console.log("Facebook")} 
           label="Facebook"
            variant ="white"
           icon={FaFacebookF }
  
            />
            
          </SocialRow>
          <HelperText>
            {t("registerHaveAccount")} <a href="/login">{t("registerSignIn")}</a>
          </HelperText>
        </RegisterForm>
  
        <ALink>
          <a href="home">{t("loginBackToHome")}</a>
        </ALink>
      </RegisterHero>
     <HrMargin/>
      {/* <Footer/> */}
      </>
    );
  };
  
  export default Register;
  

//  const fields = [
//     {
//       type: InputTypes.TEXT,
//       fieldLabel: "First Name",
//       placeholder: "John",
//       ...connectField("fName"),
//     },
//     {
//       type: InputTypes.TEXT,
//       fieldLabel: "Last Name",
//       placeholder: "Doe",
//       ...connectField("lName"),
//     },
//     {
//       type: InputTypes.EMAIL,
//       fieldLabel: "Email Address",
//       placeholder: "you@example.com",
//       ...connectField("email"),
//     },
    
//     {
//       type: InputTypes.PASSWORD,
//       fieldLabel: "Password",
//       placeholder: "Min. 6 characters",
//       ...connectField("password"),
//     },
//     {
//       type: InputTypes.PASSWORD,
//       fieldLabel: "Confirm password",
//       placeholder: "Repeat your password",
//       ...connectField("confirmPassword"),
//     },
//     {
//       type: InputTypes.CHECKBOX,
//       fieldLabel: (
//         <>
//           I agree to the{" "}
//           <a href="/terms-of-service">Terms of Service</a>{" "}
//           and{" "}
//           <a href="/privacy-policy">Privacy Policy</a>
//         </>
//       ),
//       ...connectField("isAgreed"),
//     },
//   ];

//   return (
//   <>
//     <RegisterHero>
//       <RegisterForm>
//         <h3>Create Account</h3>
//         <p>Join DKUST today — it's free</p>

//         <form onSubmit={formik.handleSubmit}>
//           <NameRow>
//             {fields.slice(0, 2).map((item) => (
//               <InputProvider key={item.name} itemObject={item} />
//             ))}
//           </NameRow>

//           {fields.slice(2).map((item) => (
//             <InputProvider key={item.name} itemObject={item} />
//           ))}

//           <CustomButton 
//           type="submit"
//           label="CREATE ACCOUNT"
//           variant="primary"
//           fullWidth="100%"
//           />
//         </form> 



//         {submittedValues ? (
//           <pre>{JSON.stringify(submittedValues, null, 2)}</pre>
//         ) : null}

//          <HelperText>or sign up with</HelperText>
//          <SocialRow>
//           <CustomButton 
//           onClickFunction={() => console.log("Google")}
//           label="Google" 
//          variant ="white"
//           icon={FcGoogle}
//           fullWidth="100%"
//           />


//          <CustomButton onClickFunction={() => console.log("Facebook")} 
//          label="Facebook"
//           variant ="white"
//          icon={FaFacebookF }

//           />
          
//         </SocialRow>
//         <HelperText>
//           Already have an account? <a href="/login">Sign in</a>
//         </HelperText>
//       </RegisterForm>

//       <ALink>
//         <a href="home">Back to Home</a>
//       </ALink>
//     </RegisterHero>
//    <HrMargin/>
//     {/* <Footer/> */}
//     </>
//   );
// };

// export default Register;
