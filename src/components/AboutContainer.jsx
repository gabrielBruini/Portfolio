import { useEffect } from "react";
import { useState } from "react";

const AboutContainer = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(800);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }



  return (
    <section className="about-container">
      <h2>.{text}</h2>
      <p>
        Olá, sou o Gabriel de Souza Bruini!
        Formado em Análise e desenvolvimento de sistemas, com uma paixão por tecnologia e desenvolvimento,
        sempre estou a procura de novos desafios e aprendizados. Gosto muito do desenvolvimento front-end e back-end,
        por isso não sei qual escolher, dessa forma decidi escolher ambos.
      </p>
    </section>
  );
};

export default AboutContainer;
