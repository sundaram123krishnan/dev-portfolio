import Image from "next/image";

export default function skills() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center bg-black py-10 z-0">
      <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-center text-gray-400">
        Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center auto-rows-max z-0">
        <div className="card w-96 bg-base-100 shadow-xl image-full h-72">
          <figure>
            <Image src="/java-script.png" width={300} height={300} alt="js" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Javascript</h2>
            <p>
              JavaScript is a versatile and widely-used programming language,
              primarily employed for web development to enhance interactivity
              and create dynamic content on websites.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full h-72">
          <figure>
            <Image src="/typescript.png" width={300} height={300} alt="js" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Typescript</h2>
            <p>
              TypeScript is a statically-typed superset of JavaScript that adds
              optional static typing, allowing developers to catch and prevent
              potential runtime errors during development while maintaining
              compatibility with existing JavaScript code.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full h-72">
          <figure>
            <Image src="/html.png" width={300} height={300} alt="js" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">HTML5</h2>
            <p>
              HTML (Hypertext Markup Language) is the standard markup language
              for creating and structuring web content, defining the elements
              and their arrangement on a webpage
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full h-72">
          <figure>
            <Image src="/structure.png" width={300} height={300} alt="js" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">REACT</h2>
            <p>
              React is a declarative and efficient JavaScript library for
              building user interfaces, developed by Facebook. It allows
              developers to create reusable UI components, manage the state of
              an application, and efficiently update the DOM.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full h-72">
          <figure>
            <Image src="/python.png" width={300} height={300} alt="js" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Python</h2>
            <p>
              Python is a high-level, interpreted programming language known for
              its readability, versatility, and ease of use. Created by Guido
              van Rossum and first released in 1991.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full h-72">
          <figure>
            <Image src="/tailwind.png" width={300} height={300} alt="js" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tailwind CSS</h2>
            <p>
              Tailwind CSS is a utility-first CSS framework that provides a
              comprehensive set of pre-designed utility classes, enabling
              developers to rapidly build and style modern, responsive web
              interfaces.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full h-72">
          <figure>
            <Image src="/aws.png" width={300} height={300} alt="js" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">AWS</h2>
            <p>
              Amazon Web Services, Inc. (AWS) is a subsidiary of Amazon that
              provides on-demand cloud computing platforms and APIs to
              individuals, companies, and governments, on a metered,
              pay-as-you-go basis.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full h-72">
          <figure>
            <Image src="/gcp.png" width={300} height={300} alt="js" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">GCP</h2>
            <p>
              Google Cloud Platform (GCP) is a suite of cloud computing services
              offered by Google, providing scalable and reliable infrastructure
              solutions for computing, storage, machine learning, and more.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full h-72">
          <figure>
            <Image src="/linux.png" width={300} height={300} alt="js" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">LINUX</h2>
            <p>
              Linux is an open-source, Unix-like operating system kernel that
              serves as the foundation for a variety of free and customizable
              operating systems.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full h-72">
          <figure>
            <Image src="/next.png" width={298} height={300} alt="js" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">NEXT JS</h2>
            <p>
              Next.js is a React framework that simplifies and accelerates web
              application development by offering features like server-side
              rendering, automatic code splitting, and easy API routes.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full h-72">
          <figure>
            <Image src="/rust.png" width={298} height={300} alt="js" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">RUST</h2>
            <p>
              Rust is a systems programming language known for its focus on
              memory safety, zero-cost abstractions, and strong type system,
              empowering developers to build efficient and reliable software.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full h-72">
          <figure>
            <Image src="/bash.png" width={298} height={300} alt="js" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">BASH</h2>
            <p>
              Bash, or the Bourne Again Shell, is a widely-used Unix shell and
              command language, providing a powerful interface for interacting
              with operating systems through command-line operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
