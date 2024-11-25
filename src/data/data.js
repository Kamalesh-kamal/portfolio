import img1 from "../images/Lapmocart.png";
import img2 from "../images/Traveldairy.png";
import react from "../images/react.png";
import reduxToolkit from "../images/reduxToolkit.png";
import reactRouter from "../images/reactRouter.png";
import tailwind from "../images/tailwind.png";
import styledComponents from "../images/styledComponents.png";
import leaflet from "../images/leaflet.png";
import lapmocart2 from "../images/lapmocart-2.png";
import lapmocart3 from "../images/lapmocart-3.png";
import Traveldiary2 from "../images/Traveldiary2.png";
import Traveldiary3 from "../images/Traveldairy3.png";

export const navData = [
  {
    id: "home",
    Name: "Home",
  },
  {
    id: "about",
    Name: "About",
  },
  {
    id: "education",
    Name: "Education",
  },
  {
    id: "skills",
    Name: "Skills",
  },
  {
    id: "projects",
    Name: "Projects",
  },
];

export const datasEducation = [
  {
    course: "Bachelor's in Computer Science",
    studiedIn:
      "Government Arts College Udhagamandalam (Affiliated to Bharathiar University)",
    year: "2020-2023",
  },

  {
    course: "Higher Secondary",
    studiedIn: "Cordite Factory Higher Secondary School Aruvankadu ",
    year: "2018-2020",
  },

  {
    course: "High School",
    studiedIn: "Defence Employees Matriculation School Aruvankadu",
    year: "upto 2018",
  },
];

export const projects = [
  {
    id: 1,
    Name: "LAPMOCART",
    img: img1,
    description:
      "Lapmocart is an e-commerce platform specializing of laptops and mobile phones.",
  },
  {
    id: 2,
    Name: "TRAVEL DIARY",
    img: img2,
    description:
      "Travel Diary is a platform designed for users to document their travel experiences.",
  },
];

export const projectData = [
  {
    id: 1,
    Name: "LAPMOCART",
    Type: "E-COMMERCE",
    img: [img1, lapmocart2, lapmocart3],
    description:
      "Lapmocart is an e-commerce platform specializing in the sale of laptops and mobile phones. The platform aims to provide a seamless shopping experience and   with competitive pricing and product specifictions.",
    website: "https://lapmocart.netlify.app/",
    github: "https://github.com/Kamalesh-kamal/Lapmocart",
    stacks: [
      {
        id: 1,
        Name: "REACT",
        Img: react,
        desc: "LAPMOCART, built with React.js, facilitates efficient coding by breaking down functionality into small, reusable components. These components are organized into distinct files, enhancing searchability and readability. Leveraging React's library capabilities ensures clarity and ease in integrating these components into cohesive projects.",
      },
      {
        id: 2,
        Name: "TAILWIND",
        Img: tailwind,
        desc: "LAPMOCART utilizes Tailwind CSS for inline styling, which allows for efficient and responsive design. By leveraging Tailwind CSS, I can easily create and manage responsive layouts without the need for writing extensive custom CSS. This approach not only streamlines the development process but also ensures consistency across the project.",
      },
      {
        id: 3,
        Name: "ROUTER",
        Img: reactRouter,
        desc: "LAPMOCART employs React Router for its routing functionality, enabling seamless navigation across multiple pages. This allows for a dynamic and user-friendly experience, as users can easily move between different sections of the application without page reloads.",
      },
      {
        id: 4,
        Name: "REDUX TOOLKIT",
        Img: reduxToolkit,
        desc: "LAPMOCART utilizes Redux Toolkit, a React library, to enhance its cart functionality. With Redux Toolkit, I've implemented features to add, delete, and adjust product quantities in the cart. Product data is stored locally using the web browser's localStorage, ensuring seamless user interaction and persistence.",
      },
    ],
    stackDesc:
      "LAPMOCART is an e-commerce web application tailored for selling mobiles and laptops. It is built with React, offering a component-based architecture that enhances modularity and reusability. Tailwind CSS is used to achieve a sleek, responsive design, ensuring a consistent user experience across devices. React Router manages the app's navigation, allowing for seamless transitions between pages. Redux provides robust state management, ensuring data consistency and facilitating complex state interactions. The product data is stored in a JSON file, which is deployed on Render.com. Together, these technologies create a powerful, efficient, and user-friendly platform for online shopping",
  },
  {
    id: 2,
    Name: "Travel Diary",
    Type: "TRAVEL-LIST",
    img: [img2, Traveldiary2, Traveldiary3],
    description:
      "Travel Diary is a platform designed for users to document their travel experiences. It allows travelers to record their journeys, including  notes, and maps,  Users can organize their trips by destinations and dates, making it easy to revisit memories.",
    website: "https://travel-diarys.netlify.app/",
    github: "https://github.com/Kamalesh-kamal/Travel-Diary",
    stacks: [
      {
        id: 1,
        Name: "REACT",
        Img: react,
        desc: "Travel Diary, built with React.js, facilitates efficient coding by breaking down functionality into small, reusable components. These components are organized into distinct files, enhancing searchability and readability. Leveraging React's library capabilities ensures clarity and ease in integrating these components into cohesive projects.",
      },
      {
        id: 2,
        Name: "STYLED COMPONENTS",
        Img: styledComponents,
        desc: "Travel Diary uses styled components for styling, which helps in creating responsive web applications with internal styling. This approach allows for a modular and maintainable design, enabling components to have their own encapsulated styles. The use of styled components ensures that the styling is consistent and scalable, making it easier to manage and update the application’s appearance as it evolves.",
      },
      {
        id: 3,
        Name: "ROUTER",
        Img: reactRouter,
        desc: "Travel Diary leverages React Router to handle its routing needs, facilitating seamless navigation between multiple pages within the application. This enhances user experience by providing smooth and efficient transitions across different sections of the app.",
      },
      {
        id: 4,
        Name: "REDUX TOOLKIT",
        Img: reduxToolkit,
        desc: "In Travel Diary, users input data through forms, which is then saved in local storage. This approach ensures that the data persists even when the application is closed or refreshed. To manage the data effectively, the application uses Redux Toolkit. This powerful tool allows for retrieving the stored data and performing various manipulations on it.",
      },
      {
        id: 5,
        Name: "REACT LEAFLET",
        Img: leaflet,
        desc: "Travel Diary includes a map feature powered by React Leaflet, allowing users to search for places. The Nominatim GeoJSON API retrieves data for the searched place, including its name and coordinates. This data is used to mark the location on the map, providing a visual representation of the searched places within the application.",
      },
    ],
    stackDesc:
      "Travel-diary is a platform designed to help users store their travel experiences.Utilizing React-Leaflet, the application offers a map feature to mark and track visited places.The search functionality is powered by the Nominatim opensource Map data API, enabling users to easily find and search for places through the search bar.Data regarding visited places is entered via a form and stored locally using local storage. Users can then access and view this data through a modal window.",
  },
];
