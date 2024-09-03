import Layout from "./Layout"

const FormVariants = {
  name: "Login",
  description:{
    title:"Hi, Welcome back",
    link:"SignUp"
  },
  buttonDes: "Login",
  linkTo:"/sign-up",
  href: "/dashboard"
}

const SignIn = () => {
  return (
    <Layout {...FormVariants}/>
  )
}

export default SignIn