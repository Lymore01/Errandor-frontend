import Layout from "./Layout";

const FormVariants = {
  name: "SignIn",
  description: {
    title: "Create An Account",
    link: "SignIn",
  },
  buttonDes: "Create account",
  linkTo:"/sign-in",
  href: "/sign-in"
};
const SignUp = () => {
  return <Layout {...FormVariants} />;
};

export default SignUp;
