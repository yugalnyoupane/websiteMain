import testimonies from '../../constants/Testimonies'

const HomeTestimonialsTemplate = () => {
    return (
        <>
            <h1 className="text-4xl font-extrabold text-center">Testimonials</h1>
            <div className="w-width mx-auto whitespace-nowrap overflow-y-hidden">
                {testimonies.map((item, index) => {
                    return (
                        <div key={index} className="w-[320px] h-[510px] inline-block mr-7 pt-[75px] ">
                            <div className="h-[425px] relative pt-[80px] px-5 bg-[#E5EDF2] rounded-2xl shadow-boxShadow">
                                <img className="w-[150px] h-[150px] rounded-[50%] absolute top-[-75px] left-[85px] object-cover" src={item.PersonImage} alt="personimage" />
                                <div className="whitespace-normal opacity-65">{item.Testimony}</div>
                                <h1 className="text-center text-xl font-bold">{item.Name}</h1>
                                <h1 className="text-center text-xl opacity-65">{item.Role}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default HomeTestimonialsTemplate