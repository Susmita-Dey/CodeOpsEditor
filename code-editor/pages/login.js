import LoginComponent from '@/components/LoginComponent'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
    return (
        <>
            <LoginComponent />
        </>
    )
}
