import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className='auth-margin'>
      <SignIn />
    </div>
  );
};
export default SignInPage;
