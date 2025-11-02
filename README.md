📚 Course Management Web App

A Full Stack Course Management Application built using Spring Boot (Backend) and React.js (Frontend) that performs complete CRUD operations (Create, Read, Update, Delete) for managing courses.

🚀 Features

Add new courses

View all courses

Update existing courses

Delete unwanted courses

RESTful API integration between React frontend and Spring Boot backend

User-friendly interface built with Reactstrap and Bootstrap

🛠️ Tech Stack

Frontend: React.js, Reactstrap, Bootstrap, Axios, Toastify
Backend: Spring Boot, Spring Web, Spring Data JPA, MySQL
Build Tools: Maven, npm
Database: MySQL

📂 Project Structure
course-web-app/
│
├── backend/                 # Spring Boot backend
│   ├── src/main/java/com/example/springrestApp/
│   │   ├── controller/
│   │   ├── entities/
│   │   ├── service/
│   │   └── SpringrestAppApplication.java
│   └── pom.xml
│
└── frontend/                # React frontend
    ├── src/
    │   ├── components/
    │   ├── api/
    │   ├── App.js
    │   └── index.js
    └── package.json

⚙️ How to Run the Project
1. Clone the Repository
git clone https://github.com/<your-username>/<your-repo-name>.git

2. Setup Backend (Spring Boot)

Open backend in IntelliJ or VS Code, then:

Configure application.properties for MySQL:

spring.datasource.url=jdbc:mysql://localhost:3306/course
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
server.port=8080


Run the application:

mvn spring-boot:run


or run the main class SpringrestAppApplication.java

✅ Backend will start on http://localhost:8080

3. Setup Frontend (React)

Open a new terminal and go to frontend folder:

cd frontend


Install dependencies:

npm install


Run the frontend:

npm start


✅ React app will start on http://localhost:3000

🔗 Connect Frontend with Backend

In your React app (e.g., api/bootapi.js), set base URL:

const base_url = "http://localhost:8080";
export default base_url;


Now both frontend and backend will communicate smoothly.

🧪 CRUD Functionalities Explained
Operation	HTTP Method	Endpoint	Description
Create	POST	/courses	Add a new course
Read	GET	/courses	Fetch all courses
Update	PUT	/courses/{id}	Update existing course
Delete	DELETE	/courses/{id}	Delete course by ID

💡 Future Improvements

Add user authentication (Spring Security + JWT)

Pagination and sorting

Search functionality

👨‍💻 Author

Devansh Srivastava
Backend Developer | Java | Spring Boot | React
📧 [engineerayush66@gmail.com
]
🌐 [https://www.linkedin.com/in/devansh-srivastava-551431247/]
