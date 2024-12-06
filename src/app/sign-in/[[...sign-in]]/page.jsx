import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <div className='mt-3 p-3 flex items-center justify-center'>
    <SignIn />
    </div>
}