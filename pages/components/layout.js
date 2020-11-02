import Head from 'next/head'
import Navbar from './navbar'
const Layout=(props)=>(
    
    <div>
        <Head>
            <title>Next.js app</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>
        </Head>
        <Navbar/>
        {props.children}
    </div>
)
export default Layout