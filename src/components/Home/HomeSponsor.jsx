import Sponsors from "../../constants/sponsors";

const HomeSponsor = () => {
    return (
        <div className="w-full pt-6">
            <div className="text-5xl font-bold text-center text-[#1360A5]">Sponsors</div>
            <div className="w-width h-[300px] mx-auto flex items-center justify-around">
                {Sponsors.map( (item, index) => {
                    return (
                        <img className="w-[150px] h-[150px] object-cover" key={index} src={item} alt="sponsors" />
                    )
                })}
            </div>
        </div>
    )
}

export default HomeSponsor;