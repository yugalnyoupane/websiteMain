import { NavLink } from "react-router-dom"
import logo from "../../images/assets/logo.png"
import pages from '../../constants/pages'

function Navbar() {
    return (
        <div className="w-full h-[75px] grid place-content-center shadow-navbarShadow sticky top-0 z-20 bg-white">
            <div className="w-width h-[55px] flex items-center justify-between">
                <NavLink className="grid place-content-center" to='/'>
                    <img src={logo} alt="Tensor" height='50px' width='165px'/>
                </NavLink>
                <div>
                    {pages.map((page,index) => {
                        return (
                            <NavLink key={index} className={
                                `text-[18px] no-underline px-[14px] py-[14px] hover:opacity-100
                                ${(index === (pages.length -1)) ? `opacity-100 bg-applybgcolor rounded-lg` : 'opacity-55'}
                                `
                            } to={`/${page.toLowerCase()}`}>{page}</NavLink>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Navbar;