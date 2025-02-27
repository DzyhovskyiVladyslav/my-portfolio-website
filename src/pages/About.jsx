function About() {
  return (
    <div className="container mx-auto py-16 px-6">
      <section className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Who I am</h2>
        <p className="text-gray-400 text-xl mb-6">Let Me Introduce Myself</p>
        <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
          I am a passionate software engineer specializing in Java, Spring, and PostgreSQL.
          My expertise spans cloud computing and backend development, with experience in Docker and Kubernetes.
          I focus on building scalable, efficient, and maintainable systems that drive business success.
          Open to communication, proactive, and love working in a team.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="h-80">
            <img src="/images/my-photo.jpg" alt="My Photo" className="w-full h-full shadow-xl rounded-lg"/>
          </div>
          <div className="text-left text-gray-300 text-lg leading-relaxed">
            <p><strong className="text-white">Name:</strong> Vladyslav Dzyhovskyi</p>
            <p><strong className="text-white">Birth Date:</strong> 04 October 2000</p>
            <p><strong className="text-white">Email:</strong> dzyhovskyi.vladyslav@gmail.com</p>
            <p><strong className="text-white">Mobile:</strong> +41 76 630 7190</p>
            <p><strong className="text-white">Address:</strong> Herznach, Switzerland</p>
          </div>
        </div>
      </section>
      <hr className="border-gray-700 my-12" />
      <section className="text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Work Experience</h2>
        <div className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed text-left">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white">Data Center Technician & IT Supporter</h3>
            <p className="italic text-gray-400">Microsoft (04/2024 – 06/2024)</p>
            <ul className="list-disc list-inside mt-2">
              <li>Registered and managed Data Center Hardware within the Data Center Logical System.</li>
              <li>Monitored, troubleshooted, and resolved issues for optimal performance.</li>
              <li>Streamlined procurement by ordering hardware and liaising with manufacturers.</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white">Java Android Developer</h3>
            <p className="italic text-gray-400">United Thinkers (07/2021 – 06/2022)</p>
            <ul className="list-disc list-inside mt-2">
              <li>Designed and implemented application logic for new features.</li>
              <li>Refactored code to enhance efficiency, maintainability, and readability.</li>
              <li>Developed and maintained banking terminal features with gateway integration.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">STEM Mentor for Teens</h3>
            <p className="italic text-gray-400">Inventor STEM School (09/2019 – 06/2021)</p>
            <ul className="list-disc list-inside mt-2">
              <li>Taught and trained students for Robotics Olympics with Lego Mindstorm EV3.</li>
              <li>Conducted courses in Web Design, Game Design, and Microelectronics.</li>
            </ul>
          </div>
        </div>
      </section>
      <hr className="border-gray-700 my-12" />
      <section className="text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Education</h2>
        <div className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed text-left">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white">Master’s Degree in Computer Science (Grade: A)</h3>
            <p className="italic text-gray-400">09/2022 – 01/2024</p>
            <p className="italic text-gray-400">National Technical University of Ukraine 'Kyiv Polytechnic Institute'</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Bachelor’s Degree in Computer Science (Grade: B+)</h3>
            <p className="italic text-gray-400">09/2018 – 06/2022</p>
            <p className="italic text-gray-400">National Aviation University</p>
          </div>
        </div>
      </section>
      <hr className="border-gray-700 my-12" />
      <section className="text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>
        <div className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed text-left">
          <ul className="list-disc list-inside">
            <li><strong className="text-white">Languages:</strong> Java, JavaScript, Kotlin, Python, C++, Bash</li>
            <li><strong className="text-white">Libraries/Frameworks:</strong> Spring, Hibernate, React Native, Angular, JQuery</li>
            <li><strong className="text-white">Databases:</strong> MySQL, PostgreSQL, MongoDB</li>
            <li><strong className="text-white">Platforms:</strong> Unix, Windows, Android, Docker, Kubernetes, AWS</li>
            <li><strong className="text-white">IDE:</strong> IntelliJ IDEA, Visual Studio, Eclipse</li>
            <li><strong className="text-white"> Methodologies:</strong>Agile, Cross-functional Communication, Scalability, Architecture and Design Patterns, Unit and Integration Testing, Parallel and Distributed Computing, RESTful and Cloud Services</li>
            <li><strong className="text-white">Others:</strong> HTML, CSS, Git Control System, Postman, JUnit, Jenkins</li>
          </ul>
        </div>
      </section>
      <hr className="border-gray-700 my-12" />
      <section className="text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
        <div className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed text-left">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white"><a href="https://www.sunmi.com/" target="_blank" className="text-blue-400 hover:underline">Tidypay One Sunmi</a></h3>
            <p className="italic text-gray-400">Portable terminal on the Android platform for banking operations through the UniPay gateway.</p>
            <p><strong className="text-white">Technologies and Tools:</strong> Java, Android, Android Studio, Gradle, MVVM, SmartGit, Postman.</p>
          </div>
        </div>
      </section>
      <hr className="border-gray-700 my-12" />
      <section className="text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Accomplishments</h2>
        <div className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed text-left mb-15">
          <ul className="list-disc list-inside">
            <li>Contributed to the Tidypay One Sunmi project, which attracted approximately 1M merchants and improved checkout efficiency by 50%.</li>
            <li>Guided approximately 50 students through various training courses as a STEM mentor for teens.</li>
            <li>Achieved second place in the University Mathematics Olympiad in 2019 and reached the semifinals of the University Hackathon in 2022.</li>
            <li>Actively contributed to school projects in computer science, including Scratch, Robotics, and Web Design.</li>
          </ul>
        </div>
      </section>
      <section className="text-center">
        <a href="/Vladyslav Dzyhovskyi - Software Engineer.pdf" download="Vladyslav Dzyhovskyi - Software Engineer.pdf" className="bg-gray-700 hover:bg-gray-600 text-white text-xl px-8 py-4 rounded-xl shadow-lg transition">Download Resume (PDF)</a>
      </section>
    </div>
  );
}

export default About;