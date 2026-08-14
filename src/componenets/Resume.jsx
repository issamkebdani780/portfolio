import React from "react";
import WindowControle from "./WindowControle";
import { windowWrapper } from "../hoc/WindowWrapper";

const Resume = ({ windowKey }) => {
  return (
    <div className="flex flex-col bg-[#f3f4f6] dark:bg-[#1a1a1a] rounded-xl overflow-hidden w-full h-full">
      {/* ── macOS Title Bar ───────────────────────────────────── */}
      <div
        className={`drag-handle-${windowKey} flex items-center justify-between px-4 py-2.5 bg-[#ececec] dark:bg-[#2c2c2e] border-b border-gray-300 dark:border-gray-700 select-none cursor-move`}
      >
        <WindowControle appId={windowKey} />
        <span className="absolute left-1/2 -translate-x-1/2 text-[13px] font-semibold text-gray-600 dark:text-gray-300 pointer-events-none">
          Resume.pdf
        </span>
        <div className="w-4 h-4" />
      </div>

      {/* ── HTML Resume Document ──────────────────────────────── */}
      <div className="overflow-auto flex justify-center p-4 sm:p-8" style={{ maxHeight: "calc(100vh - 120px)" }}>
        <div className="bg-white dark:bg-[#252525] w-full max-w-[800px] h-full shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10 p-8 sm:p-12 text-gray-800 dark:text-gray-300 text-[13px] leading-relaxed font-sans select-text">

          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-6 border-b border-gray-300 dark:border-gray-700 pb-6 text-center sm:text-left">
            <img
              src="/me.jpg"
              alt="Issam Kebdani"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-md border-2 border-blue-500/30 flex-shrink-0"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-1">Issam Kebdani</h1>
              <h2 className="text-[15px] font-medium text-blue-600 dark:text-blue-400 mb-2">Junior Full-Stack Web Developer</h2>
              <div className="text-gray-600 dark:text-gray-400 text-[12px] flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1">
                <span>Algeria</span>
                <span>•</span>
                <span>+213 781 24 39 66</span>
                <span>•</span>
                <a href="mailto:kebdaniissam780@gmail.com" className="hover:text-blue-500 transition-colors">kebdaniissam780@gmail.com</a>
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-[12px] flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 mt-1">
                <a href="https://linkedin.com/in/issam-kebdani-8b6154334" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">linkedin.com/in/issam-kebdani-8b6154334</a>
                <span>•</span>
                <a href="https://github.com/issamkebdani780" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">github.com/issamkebdani780</a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-5">
            <h3 className="text-[14px] font-bold text-gray-900 dark:text-white uppercase border-b-2 border-gray-800 dark:border-gray-400 pb-1 mb-2">Professional Summary</h3>
            <p className="text-justify">
              Junior Full-Stack Web Developer with professional experience developing responsive web applications within a development team and hands-on experience building full-stack applications from frontend to backend and database. Strong foundation in React.js, JavaScript, HTML, CSS, Tailwind CSS, Express.js, REST APIs, and MySQL.
            </p>
            <p className="text-justify mt-2">
              Built and deployed business websites, e-commerce platforms, booking systems, and management applications, including a healthcare appointment management platform. Previous experience in e-commerce sales and client communication developed strong skills in understanding customer needs and business-oriented communication. Seeking a remote Junior Web Developer opportunity focused on building responsive, modern, and functional web applications.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-5">
            <h3 className="text-[14px] font-bold text-gray-900 dark:text-white uppercase border-b-2 border-gray-800 dark:border-gray-400 pb-1 mb-2">Technical Skills</h3>
            <ul className="space-y-1">
              <li><span className="font-semibold text-gray-900 dark:text-white">Frontend:</span> HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Responsive Web Design</li>
              <li><span className="font-semibold text-gray-900 dark:text-white">Backend:</span> Node.js, Express.js, REST APIs, JWT</li>
              <li><span className="font-semibold text-gray-900 dark:text-white">Database:</span> MySQL, Relational Database Design, SQL</li>
              <li><span className="font-semibold text-gray-900 dark:text-white">Tools & Workflow:</span> Git, GitHub, API Integration, Responsive Development</li>
              <li><span className="font-semibold text-gray-900 dark:text-white">Other:</span> E-commerce, Shopify, Business Websites, Client Communication</li>
            </ul>
          </div>

          {/* Professional Experience */}
          <div className="mb-5">
            <h3 className="text-[14px] font-bold text-gray-900 dark:text-white uppercase border-b-2 border-gray-800 dark:border-gray-400 pb-1 mb-2">Professional Experience</h3>

            <div className="mb-3">
              <div className="flex justify-between items-baseline">
                <h4 className="font-bold text-gray-900 dark:text-white">CREAPLUS DIGITAL</h4>
                <span className="text-[12px] font-medium text-gray-600 dark:text-gray-400">April 2026 – August 2026</span>
              </div>
              <div className="italic text-gray-700 dark:text-gray-300 mb-1">Junior Frontend Developer (Remote)</div>
              <ul className="list-disc list-inside space-y-1 ml-1 text-justify">
                <li>Develop responsive web applications using React.js, JavaScript, HTML, CSS, and Tailwind CSS.</li>
                <li>Build reusable frontend components and integrate REST APIs.</li>
                <li>Translate business requirements and interface requirements into functional, responsive web experiences.</li>
                <li>Contribute to the development of business platforms, management systems, and brand websites.</li>
              </ul>
            </div>

            <div className="mb-3">
              <div className="flex justify-between items-baseline">
                <h4 className="font-bold text-gray-900 dark:text-white">MMG</h4>
                <span className="text-[12px] font-medium text-gray-600 dark:text-gray-400">January 2025 – October 2025</span>
              </div>
              <div className="italic text-gray-700 dark:text-gray-300 mb-1">Closer & VIP Closer</div>
              <ul className="list-disc list-inside space-y-1 ml-1 text-justify">
                <li>Managed sales conversations for an e-commerce training program, guiding prospects through the buying process.</li>
                <li>Used CRM tools to manage prospects, follow up with leads, and maintain organized customer communication.</li>
                <li>Handled customer objections and adapted communication to different customer needs.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h4 className="font-bold text-gray-900 dark:text-white">MEDIAZ</h4>
                <span className="text-[12px] font-medium text-gray-600 dark:text-gray-400">December 2025 – February 2026</span>
              </div>
              <div className="italic text-gray-700 dark:text-gray-300 mb-1">Closer</div>
              <ul className="list-disc list-inside space-y-1 ml-1 text-justify">
                <li>Managed customer conversations and sales processes for a management program.</li>
                <li>Identified customer needs, handled objections, and guided prospects toward purchasing decisions.</li>
              </ul>
            </div>
          </div>

          {/* Selected Projects */}
          <div className="mb-5">
            <h3 className="text-[14px] font-bold text-gray-900 dark:text-white uppercase border-b-2 border-gray-800 dark:border-gray-400 pb-1 mb-2">
              Selected Projects
            </h3>

            <div className="mb-2">
              <div>
                <span className="font-bold text-gray-900 dark:text-white">
                  Healthora
                </span>{" "}
                — Healthcare Appointment & Management Platform
              </div>

              <a
                href="https://healthoraweb.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 dark:text-blue-400 text-[11px] hover:underline mb-1"
              >
                https://healthoraweb.netlify.app/
              </a>
              <a
                href="https://healthora-portal-client.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 dark:text-blue-400 text-[11px] hover:underline mb-1"
              >
                https://healthora-portal-client.vercel.app/
              </a>

              <span className="text-gray-600 dark:text-gray-400 italic">
                (React.js, Tailwind CSS, Express.js, MySQL)
              </span>

              <ul className="list-disc list-inside space-y-0.5 ml-1 mt-1 text-justify">
                <li>
                  Built a full-stack healthcare management platform for doctor-patient
                  appointment management.
                </li>
                <li>
                  Developed both the frontend and backend, including API integration and
                  database functionality.
                </li>
              </ul>
            </div>

            <div className="mb-2">
              <div>
                <span className="font-bold text-gray-900 dark:text-white">
                  RiseManager
                </span>{" "}
                — COD Order Management Platform
              </div>

              <a
                href="https://risemanager.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 dark:text-blue-400 text-[11px] hover:underline mb-1"
              >
                https://risemanager.vercel.app/
              </a>

              <span className="text-gray-600 dark:text-gray-400 italic">
                (React.js, Tailwind CSS)
              </span>

              <ul className="list-disc list-inside space-y-0.5 ml-1 mt-1 text-justify">
                <li>
                  Developed a landing page designed to manage, confirm, and deliver Cash
                  on Delivery (COD) orders.
                </li>
              </ul>
            </div>

            <div className="mb-2">
              <div>
                <span className="font-bold text-gray-900 dark:text-white">
                  Unik
                </span>{" "}
                — Cosmetics Brand Website
              </div>

              <a
                href="https://unik-eosin.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 dark:text-blue-400 text-[11px] hover:underline mb-1"
              >
                https://unik-eosin.vercel.app/
              </a>

              <span className="text-gray-600 dark:text-gray-400 italic">
                (React.js, Tailwind CSS, JavaScript)
              </span>

              <ul className="list-disc list-inside space-y-0.5 ml-1 mt-1 text-justify">
                <li>
                  Developed a modern responsive website for a cosmetics brand with
                  reusable frontend components.
                </li>
              </ul>
            </div>

            <div className="mb-2">
              <div>
                <span className="font-bold text-gray-900 dark:text-white">
                  Baytee
                </span>{" "}
                — Hotel Booking Platform
              </div>

              <a
                href="https://baytee.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 dark:text-blue-400 text-[11px] hover:underline mb-1"
              >
                https://baytee.vercel.app/
              </a>

              <span className="text-gray-600 dark:text-gray-400 italic">
                (React.js, Tailwind CSS, JavaScript)
              </span>

              <ul className="list-disc list-inside space-y-0.5 ml-1 mt-1 text-justify">
                <li>
                  Developed a responsive hotel booking platform focused on presenting
                  accommodation information.
                </li>
              </ul>
            </div>

            <div className="mb-2">
              <div>
                <span className="font-bold text-gray-900 dark:text-white">
                  Carvo
                </span>{" "}
                — Automotive Web Project
              </div>

              <a
                href="http://carvo-mocha.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 dark:text-blue-400 text-[11px] hover:underline mb-1"
              >
                http://carvo-mocha.vercel.app/
              </a>

              <span className="text-gray-600 dark:text-gray-400 italic">
                (React.js, Tailwind CSS, JavaScript)
              </span>

              <ul className="list-disc list-inside space-y-0.5 ml-1 mt-1 text-justify">
                <li>
                  Developed a responsive automotive-focused web interface using React.js
                  and Tailwind CSS.
                </li>
              </ul>
            </div>

            <div className="mb-2">
              <div>
                <span className="font-bold text-gray-900 dark:text-white">
                  Artigiano DZ
                </span>{" "}
                — E-commerce Project
              </div>

              <a
                href="https://www.instagram.com/artigianodz/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 dark:text-blue-400 text-[11px] hover:underline mb-1"
              >
                https://www.instagram.com/artigianodz/
              </a>

              <span className="text-gray-600 dark:text-gray-400 italic">
                (E-commerce, Web Development, Meta Ads)
              </span>

              <ul className="list-disc list-inside space-y-0.5 ml-1 mt-1 text-justify">
                <li>
                  Built and developed an online presence for a footwear e-commerce
                  business.
                </li>
                <li>
                  Worked on website development, product presentation, and digital
                  marketing.
                </li>
              </ul>
            </div>
          </div>

          {/* Education & Languages */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-white uppercase border-b-2 border-gray-800 dark:border-gray-400 pb-1 mb-2">Education</h3>
              <div className="font-bold text-gray-900 dark:text-white">Université Abou Bekr Belkaid — Tlemcen</div>
              <div className="italic text-gray-700 dark:text-gray-300">Licence in Computer Science</div>
            </div>
            <div>
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-white uppercase border-b-2 border-gray-800 dark:border-gray-400 pb-1 mb-2">Languages</h3>
              <ul className="space-y-1">
                <li><span className="font-semibold text-gray-900 dark:text-white">Arabic:</span> Native</li>
                <li><span className="font-semibold text-gray-900 dark:text-white">English:</span> Basic to Intermediate (A2–B1)</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default windowWrapper(Resume);
