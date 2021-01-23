import ReactCarousel from "react-elastic-carousel";

const team = [
    {name: "Marvellous Sunmiboye", role: "Director", image: "images/marvy.jpg", link: "/marvellous"},
    {name: "Testimony Adebiyi", role: "Administrator", image: "images/test.jpg", link: "/testimony"},
    {name: "Eniola Olasogba", role: "Head, Contents and Communications", image: "images/eniola.jpg", link: "/eniola"},
    {name: "Samuel Adekunle", role: "Head, Strategy and Logistics", image: "images/sam2.jpeg", link: "/sam"},
    {name: "Doyinsolami Olatunji", role: "Deputy Head, Strategy and Logistics", image: "images/doyin.jpg", link: "/doyin"},
    {name: "Damilola Daniel", role: "Head, Media", image: "images/st.jpeg", link: "/damilola"},
    {name: "Joshua Badejo", role: "Deputy Head, Media", image: "images/badejo.jpeg", link: "/badejo"},
    {name: "Adesola Oyewole", role: "Head, Finance/Ife Chapter Coordinator 1", image: "images/adesola.jpg", link: "/adesola"},
    {name: "Oladapo Olatunbosun", role: "Ife Chapter Coordinator 2", image: "images/daniel.jpeg", link: "/daniel"},
  
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
