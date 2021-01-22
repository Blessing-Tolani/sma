import ReactCarousel from "react-elastic-carousel";

const team = [
    {name: "Marvellous Sunmiboye", role: "Director", image: "images/marvy.jpg", link: "/marvellous"},
    {name: "Testimony Adebiyi", role: "Administrator", image: "images/test.jpg", link: "/testimony"},
    {name: "Eniola Olasogba", role: "Head, Contents and Communications", image: "images/eniola.jpg", link: "/eniola"},
    {name: "Samuel Adekunle", role: "Head, Strategy and Logistics", image: "images/sam.jpg", link: "/sam"},
    {name: "Damilola Daniel", role: "Head, Media", image: "images/st.jpeg", link: "/damilola"},
    {name: "Doyinsolami Olatunji", role: "Deputy Head, Strategy and Logistics", image: "images/doyin.jpg", link: "/doyin"},
    {name: "Adesola Oyewole", role: "Head, Finance", image: "images/adesola.jpg", link: "/adesola"},
]


export default function Carousel({breakPoints}) {
    return (
        <ReactCarousel breakPoints={breakPoints} className="py-14">
            {
                team.map(
                    ({name, role, image, link}, index) => 
                    <div key={index} className="imgdiv">
                        <a href={link}>
                        <div className="w3-card whole">
                            <img className="img" src={image} alt="" />
                            <div className="w3-container text">
                            <h4 className="w3-center un4">{name}</h4>
                            <p className="w3-center un5">{role}</p>
                            </div>
                        </div>
                        </a>
                    </div>
                )
            }
        </ReactCarousel>
    )
}
