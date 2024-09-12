import LinkedInIcon from "@mui/icons-material/LinkedIn";

const sections = [
  {
    title: "Sobre Nosotros",
    items: ["Marketing", "Analytics", "Marketing", "Analytics"],
  },
  {
    title: "Sobre Nosotros",
    items: ["Marketing", "Analytics", "Marketing", "Analytics"],
  },
  {
    title: "Sobre Nosotros",
    items: ["Marketing", "Analytics", "Marketing", "Analytics"],
  },
  {
    title: "Sobre Nosotros",
    items: ["Marketing", "Analytics", "Marketing", "Analytics"],
  },
];

export const Footer = () => {
  return (
    <footer className="w-full py-y px-2 bg-b-gray text-white md:flex md:justify-around">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        {sections.map((section, index) => (
          <div key={index} className="mr-6">
            <h6 className="font-bold text-lg pt-2">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="py-1 text-gray-500 hover:text-white cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        {
          <div className="mr-6">
            <h6 className="font-bold text-lg pt-2">Numero</h6>
            <p className="py-1 text-gray-500 hover:text-white cursor-pointer">
              9935538268
            </p>
            <h6 className="font-bold text-lg pt-2">Redes Sociales</h6>
            <p className="py-1 text-gray-500 hover:text-white cursor-pointer">
              <LinkedInIcon />
              LinkedIn
            </p>
          </div>
        }
      </div>
    </footer>
  );
};
