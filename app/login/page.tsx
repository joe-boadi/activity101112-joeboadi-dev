import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import Link from 'next/link';
 
export default function LoginPage() {
  return (
    <main className="flex items-center bg-base-100 justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-primary p-3 md:h-36">
          <div className="w-32 text-base-content md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
        <div  className='pt-8 flex items-center justify-center text-sm text-base-content hover:text-base-content'>
          <Link className=' text-base-content hover:text-base-content' href={'/app'} placeholder='Go to Homepage'/>
        </div>
      </div>
    </main>
  );
}