import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaCss3Alt, FaJava } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { SiFlutter } from "react-icons/si";
import { BsFiletypeSql } from 'react-icons/bs';
import { SiTailwindcss, SiJavascript } from 'react-icons/si';

export default function Tech() {
  const { ref: techRef, inView: techIsVisible } = useInView({ triggerOnce: true });

  return (
    <div ref={techRef} className="techObserve">
      <h2
        className={`techHead text-lightHdrClr dark:text-darkHdrClr ${
          techIsVisible ? 'techHead-grid-animation' : ''
        }`}
      >
        Tech Stack:
      </h2>

      <div className="techGrid text-lightHdrClr dark:text-darkHdrClr">
        <Link href="/repositories/react" className="cardWrapper" id="react">
          <div className={`skillCard ${techIsVisible ? 'column3-grid-animation' : ''}`}>
            <div className="skillLogo">
              <FaReact color="aqua" />
            </div>
            <div className="skillName">React</div>
          </div>
        </Link>

        <Link href="/repositories/python" className="cardWrapper" id="python">
          <div className={`skillCard ${techIsVisible ? 'column5-grid-animation' : ''}`}>
            <div className="skillLogo">
              <FaPython color="#0172b6" />
            </div>
            <div className="skillName">Python</div>
          </div>
        </Link>

        <Link href="/repositories/sql" className="cardWrapper" id="sql">
          <div className={`skillCard ${techIsVisible ? 'column4-grid-animation' : ''}`}>
            <div className="skillLogo">
              <BsFiletypeSql />
            </div>
            <div className="skillName">SQL</div>
          </div>
        </Link>

        <Link href="/repositories/tailwind" className="cardWrapper" id="tailwind">
          <div className={`skillCard ${techIsVisible ? 'column2-grid-animation' : ''}`}>
            <div className="skillLogo">
              <SiTailwindcss color="teal" />
            </div>
            <div className="skillName">Tailwind</div>
          </div>
        </Link>

        <Link href="/repositories/java" className="cardWrapper" id="java">
          <div className={`skillCard ${techIsVisible ? 'column5-grid-animation' : ''}`}>
            <div className="skillLogo">
              <FaJava color="darkblue" />
            </div>
            <div className="skillName">Java</div>
          </div>
        </Link>

        <Link href="/repositories/javascript" className="cardWrapper" id="javascript">
          <div className={`skillCard ${techIsVisible ? 'column3-grid-animation' : ''}`}>
            <div className="skillLogo">
              <SiJavascript color="yellow" />
            </div>
            <div className="skillName">Javascript</div>
          </div>
        </Link>

        <Link href="/repositories/css" className="cardWrapper" id="css">
          <div className={`skillCard ${techIsVisible ? 'column2-grid-animation' : ''}`}>
            <div className="skillLogo">
              <FaCss3Alt color="blue" />
            </div>
            <div className="skillName">CSS</div>
          </div>
        </Link>

        <Link href="/repositories/flutter" className="cardWrapper" id="flutter">
          <div className={`skillCard ${techIsVisible ? 'column1-grid-animation' : ''}`}>
            <div className="skillLogo">
              <SiFlutter color="#03569b"/>
            </div>
            <div className="skillName">Flutter</div>
          </div>
        </Link>
        <div id="clickText" className="clickText">
          (Click One)
        </div>
      </div>
    </div>
  );
}
