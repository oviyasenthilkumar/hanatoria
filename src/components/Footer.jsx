import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FooterWithMenu = () => {
  // const containerRef = useRef(null);
  // const helperRef = useRef(null);
  // const WALL_THICKNESS = 80;

  // useEffect(() => {
  //   const MATTER_CONTAINER = containerRef.current;
  //   const MATTER_HELPER = helperRef.current;

  //   const Engine = Matter.Engine;
  //   const Render = Matter.Render;
  //   const Runner = Matter.Runner;
  //   const Bodies = Matter.Bodies;
  //   const World = Matter.World;
  //   const Composite = Matter.Composite;

  //   const engine = Engine.create();
  //   const render = Render.create({
  //     element: MATTER_HELPER,
  //     engine: engine,
  //     background: "black",
  //     options: {
  //       width: MATTER_CONTAINER.offsetWidth,
  //       height: MATTER_CONTAINER.offsetHeight,
  //       wireframes: false,
  //     },
  //   });

  //   const domBodies = document.querySelectorAll(".menu__item");
  //   const matterBodies = {};
  //   let runner;
  //   let leftWall, rightWall, ground;

  //   const createBounds = () => {
  //     ground = Bodies.rectangle(
  //       MATTER_CONTAINER.offsetWidth / 2,
  //       MATTER_CONTAINER.offsetHeight + WALL_THICKNESS / 2,
  //       6000,
  //       WALL_THICKNESS,
  //       { isStatic: true }
  //     );

  //     leftWall = Bodies.rectangle(
  //       0 - WALL_THICKNESS / 2,
  //       MATTER_CONTAINER.offsetHeight / 2,
  //       WALL_THICKNESS,
  //       MATTER_CONTAINER.offsetHeight * 5,
  //       { isStatic: true }
  //     );

  //     rightWall = Bodies.rectangle(
  //       MATTER_CONTAINER.offsetWidth + WALL_THICKNESS / 2,
  //       MATTER_CONTAINER.offsetHeight / 2,
  //       WALL_THICKNESS,
  //       MATTER_CONTAINER.offsetHeight * 5,
  //       { isStatic: true }
  //     );
  //   };

  //   const createMatterBodies = () => {
  //     domBodies.forEach((domBody) => {
  //       const matterBody = Bodies.rectangle(
  //         MATTER_CONTAINER.offsetWidth / 2,
  //         -MATTER_CONTAINER.offsetHeight,
  //         domBody.offsetWidth,
  //         domBody.offsetHeight,
  //         {
  //           chamfer: {
  //             radius: domBody.offsetHeight / 2,
  //           },
  //           restitution: 0.925,
  //           density: Math.random() * 15,
  //           angle: Math.random() * 10,
  //           friction: Math.random() * 50,
  //           frictionAir: Math.random() / 150,
  //         }
  //       );
  //       domBody.id = matterBody.id;
  //       matterBodies[matterBody.id] = matterBody;
  //     });
  //   };

  //   const updateElementPositions = () => {
  //     domBodies.forEach((domBody) => {
  //       const matterBody = matterBodies[domBody.id];

  //       if (matterBody) {
  //         domBody.style.transform =
  //           `translate(${matterBody.position.x - domBody.offsetWidth / 2}px, ` +
  //           `${matterBody.position.y - domBody.offsetHeight / 2}px) ` +
  //           `rotate(${matterBody.angle}rad)`;
  //       }
  //     });

  //     window.requestAnimationFrame(updateElementPositions);
  //   };

  //   const handleResize = () => {
  //     render.canvas.width = MATTER_CONTAINER.offsetWidth;
  //     render.canvas.height = MATTER_CONTAINER.offsetHeight;

  //     Matter.Render.setPixelRatio(render, window.devicePixelRatio);

  //     Matter.Body.setPosition(
  //       ground,
  //       Matter.Vector.create(
  //         MATTER_CONTAINER.offsetWidth / 2,
  //         MATTER_CONTAINER.offsetHeight + WALL_THICKNESS / 2
  //       )
  //     );

  //     Matter.Body.setPosition(
  //       leftWall,
  //       Matter.Vector.create(
  //         0 - WALL_THICKNESS / 2,
  //         MATTER_CONTAINER.offsetHeight / 2
  //       )
  //     );

  //     Matter.Body.setPosition(
  //       rightWall,
  //       Matter.Vector.create(
  //         MATTER_CONTAINER.offsetWidth + WALL_THICKNESS / 2,
  //         MATTER_CONTAINER.offsetHeight / 2
  //       )
  //     );
  //   };

  //   const init = () => {
  //     createBounds();
  //     Composite.add(engine.world, [leftWall, rightWall, ground]);
  //     Render.run(render);
  //     runner = Runner.create();
  //     Runner.run(runner, engine);
  //     createMatterBodies();
  //     World.add(engine.world, Object.values(matterBodies));
  //     window.requestAnimationFrame(updateElementPositions);
  //     window.addEventListener("resize", handleResize);
  //   };

  //   init();

  //   return () => {
  //     Render.stop(render);
  //     Runner.stop(runner);
  //     World.clear(engine.world);
  //     Engine.clear(engine);
  //     render.canvas.remove();
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <>
      <footer className="bg-black text-white py-10 ">
        <div className="max-w-[1600px] mx-auto px-5 grid gap-8 lg:grid-cols-5 sm:grid-cols-1">
          {/* Left Section (Takes 2 columns on large screens) */}
          <div className="text-6xl lg:text-8xl 2xl:text-9xl font-light lg:col-span-2 font-lexend leading-[6rem]">
            Let’s Talk
          </div>

          {/* Center Section (Takes 1 column) */}
          <div>
            <h3 className="text-base leading-5 font-semibold mb-4 font-inter ">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-y-2 w-[95%]">
              <li>
                <a
                  href="#"
                  className="hover:underline text-[#fff] opacity-50 font-lexend font-normal text-sm leading-[1.125rem]"
                >
                  <Link to="/"> Home </Link>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-[#fff] opacity-50 font-lexend font-normal text-sm leading-[1.125rem]"
                >
                  <Link to="/about">About Us</Link>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-[#fff] opacity-50 font-lexend font-normal text-sm leading-[1.125rem]"
                >
                  <Link to="/works"> Our works</Link>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-[#fff] opacity-50 font-lexend font-normal text-sm leading-[1.125rem]"
                >
                  <Link to="/services"> Our Services </Link>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-[#fff] opacity-50 font-lexend font-normal text-sm leading-[1.125rem]"
                >
                  <Link to="/contact">Contact</Link>
                </a>
              </li>
            </ul>
          </div>
          {/* socials */}
          <div className="w-[80%]">
            <h3 className="text-base leading-5 font-semibold mb-4 font-inter">
              Social Links
            </h3>
            <ul className="grid grid-cols-2 gap-y-2 ">
              <li>
                <a
                  href="https://wa.me/918122879321"
                  className="hover:underline text-[#fff] opacity-50 font-lexend font-normal text-sm leading-[1.125rem]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whatsapp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hana_toria"
                  className="hover:underline text-[#fff] opacity-50 font-lexend font-normal text-sm leading-[1.125rem]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100089837880458"
                  className="hover:underline text-[#fff] opacity-50 font-lexend font-normal text-sm leading-[1.125rem]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/89910172/admin/dashboard/"
                  className="hover:underline text-[#fff] opacity-50 font-lexend font-normal text-sm leading-[1.125rem]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/hanator-ades"
                  className="hover:underline text-[#fff] opacity-50 font-lexend font-normal text-sm leading-[1.125rem]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Behance
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section (Takes 1 column) */}
          <div>
            <h3 className="text-base leading-5 font-semibold mb-4 font-inter">
              Our Office
            </h3>
            <p className="mb-2 font-lexend opacity-50 font-semibold text-base leading-[1.125rem] ">
              India
            </p>
            <p className="mb-2 font-lexend font-normal text-sm leading-none">
              Nava India Rd, near Radisson Blu,
              <br />
              Coimbatore, Tamil Nadu 641004
            </p>
            <div className="flex gap-2">
              <p className="flex items-center gap-2 ">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#F15A28]" />
                <a
                  href="mailto:info@hanatoria.com"
                  className="hover:underline font-lexend opacity-50 font-normal text-xs leading-[1.125rem] "
                >
                  info@hanatoria.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="text-[#F15A28]" />
                <a
                  href="tel:+918122879321"
                  className="hover:underline font-lexend opacity-50 font-normal text-xs leading-[1.125rem]"
                >
                  +91 8122879321
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* <hr className="mt-5" /> */}
      </footer>
      {/* <section
        id="container"
        className="playground w-screen h-[40%] bg-black overflow-hidden  hidden lg:block"
        ref={containerRef}
      >
        <ul className="menu">
          {[
            {
              name: "Instagram",
              link: "https://www.instagram.com/hana_toria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            },
            { name: "Whatsapp", link: "https://wa.me/918122879321" },
            {
              name: "Facebook",
              link: "https://www.facebook.com/profile.php?id=100089837880458",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/company/89910172/admin/dashboard/",
            },
            { name: "Behance", link: "https://www.behance.net/hanator-ades" },
          ].map((item, index) => (
            <li
              key={index}
              className="menu__item border-2 border-black-300 rounded-[25px] shadow-lg font-medium text-lg absolute bg-white-300 text-white"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="menu__link text-white no-underline block p-3 text-center font-lexend"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </section> */}
    </>
  );
};

export default FooterWithMenu;