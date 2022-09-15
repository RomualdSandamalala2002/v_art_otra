import Link from 'next/link'
import header from './header.module.css'

function Header(){
    return(
        <>
            <div className={"navbar navbar-dark bg-dark "+header.a}>
                <div className="container ml-50 mt-30">
                    <h2 className={"text-light "+header.title}>V&lsquo;Art&lsquo;otra</h2>
                    <div className="form-group">
                        <input className="form-control form-control-color-dark" id={header.search} type="text" placeholder="Search"/>
                    </div>
                </div>
                <div className={header.l1}>
                    <Link href="/" className={header.link}>Home</Link>
                </div>
                <div className={header.l2}>
                    <Link href="/" className={header.link}>Paint</Link>
                </div>
                <div className={"container "+header.l3}>
                    <Link href="/" className={header.link}>Crafting</Link>
                </div>
                <div className={"container "+header.l4}>
                    <Link href="/" className={header.link}>Sculpture</Link>
                </div>
                <div className={"container "+header.l5}>
                    <Link href="/" className={header.link}>Book</Link>
                </div>
                <div className={"container "+header.l6}>
                    <Link href="/" className={header.link}>Others</Link>
                </div>
                <div className={"container "+header.l7}>
                    <Link href="/" className={header.link}>Login</Link>
                </div>
                <div className={header.l8}>
                    <Link href="/" className={header.link}>Sign-Up</Link>
                </div>
           </div>
        </>
    )
}
export default Header