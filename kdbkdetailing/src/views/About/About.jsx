import React from 'react';
import './about.css';

function About() {
  return (
    <div className="container-about">
      <div className="image-about" />
      <div className="content-about">
        <h1 className="title-header">O NAS</h1>
        <p className="about-us">
          KDBK Detailing to studio auto detailngu, w którym Twój samochód nabierze nowego blasku!
        </p>
        <p className="about-us">
          KDBK to kosmetyka pojazdów, detailing, korekty lakieru, powłoki ochronne, woski polimerowe
          i wszystko co sprawi, że Twój samochód znów zalśni.
        </p>
        <p className="about-us">
          Ręczne mycie z niebywałą dokładnością, korekta lakieru, renowacja oraz konserwacja
          plastików, kosmetyka wnętrz, pranie tapicerek materiałowych, czyszczenie i pranie
          podsufitek oraz wykładzin, czyszczenie oraz konserwacja skór, polerowanie szyb, nakładanie
          niewidzialnej wycieraczki, woskowanie, oraz powłoki ochronne to jedne z wielu naszych
          usług, na które serdecznie Państwa zapraszamy!
        </p>
      </div>
    </div>
  );
}

export default About;
