import React from 'react';
import './list.css';

const List = () => {
  const items = [
    {
      title: 'Mycie klasyczne',
      price: 'Od 100 zł',
      key: 'title',
      elements: [
        {
          text: '- mycie płynem wstępnym oraz gąbką',
          key: 'text'
        },
        {
          text: '- mycie felg',
          key: 'text'
        },
        {
          text: '- mycie progów drzwi i bagażnika',
          key: 'text'
        },
        {
          text: '- suszenie pojazdu',
          key: 'text'
        }
      ]
    },
    {
      title: 'Mycie exclusive',
      price: 'Od 150 zł',
      key: 'title',
      elements: [
        {
          text: '- mycie płynem wstępnym oraz gąbką',
          key: 'text'
        },
        {
          text: '- mycie felg',
          key: 'text'
        },
        {
          text: '- mycie progów drzwi i bagażnika',
          key: 'text'
        },
        {
          text: '- dokładne wymywanie nadkoli',
          key: 'text'
        },
        {
          text: '- odkurzanie',
          key: 'text'
        },
        {
          text: '- przecieranie deski rozdzielczej oraz plastików',
          key: 'text'
        },
        {
          text: '- suszenie pojazdu',
          key: 'text'
        }
      ]
    },
    {
      title: 'Mycie premium',
      price: 'Od 200 zł',
      key: 'title',
      elements: [
        {
          text: '- mycie płynem wstępnym oraz gąbką',
          key: 'text'
        },
        {
          text: '- mycie felg',
          key: 'text'
        },
        {
          text: '- mycie progów drzwi i bagażnika',
          key: 'text'
        },
        {
          text: '- dokładne wymywanie nadkoli',
          key: 'text'
        },
        {
          text: '- odkurzanie',
          key: 'text'
        },
        {
          text: '- przecieranie deski rozdzielczej oraz plastików',
          key: 'text'
        },
        {
          text: '- mycie szyb',
          key: 'text'
        },
        {
          text: '- dokładne wycieranie progów oraz zakamarków pod maską',
          key: 'text'
        },
        {
          text: '- dresing do opon',
          key: 'text'
        },
        {
          text: '- suszenie pojazdu',
          key: 'text'
        }
      ]
    },
    {
      title: 'Mycie detailingowe',
      price: 'Od 300 zł',
      key: 'text',
      elements: [
        {
          text: '- mycie płynem wstępnym oraz gąbką',
          key: 'text'
        },
        {
          text: '- deironizacja',
          key: 'text'
        },
        {
          text: '- czyszczenie komory silnika',
          key: 'text'
        },
        {
          text: '- mycie felg specjalnymi środkami chemicznymi',
          key: 'text'
        },
        {
          text: '- mycie progów drzwi i bagażnika',
          key: 'text'
        },
        {
          text: '- dokładne wymywanie nadkoli',
          key: 'text'
        },
        {
          text: '- odkurzanie',
          key: 'text'
        },
        {
          text: '- przecieranie deski rozdzielczej oraz plastików',
          key: 'text'
        },
        {
          text: '- mycie szyb',
          key: 'text'
        },
        {
          text: '- dokładne wycieranie progów oraz zakamarków pod maską',
          key: 'text'
        },
        {
          text: '- dresing do opon',
          key: 'text'
        },
        {
          text: '- woskowanie',
          key: 'text'
        },
        {
          text: '- suszenie pojazdu',
          key: 'text'
        }
      ]
    },
    {
      title: 'Przygotowanie pojazdu do sprzedaży',
      price: 'Od 200 zł',
      key: 'title',
      elements: [
        {
          text: '- mycie płynem wstępnym oraz gąbką',
          key: 'text'
        },
        {
          text: '- mycie felg',
          key: 'text'
        },
        {
          text: '- mycie progów drzwi i bagażnika',
          key: 'text'
        },
        {
          text: '- dokładne wymywanie nadkoli',
          key: 'text'
        },
        {
          text: '- odkurzanie',
          key: 'text'
        },
        {
          text: '- przecieranie deski rozdzielczej oraz plastików',
          key: 'text'
        },
        {
          text: '- mycie szyb',
          key: 'text'
        },
        {
          text: '- dokładne wycieranie progów oraz zakamarków pod maską',
          key: 'text'
        },
        {
          text: '- dresing do opon',
          key: 'text'
        },
        {
          text: '- woskowanie',
          key: 'text'
        },
        {
          text: '- suszenie pojazdu',
          key: 'text'
        }
      ]
    },
    {
      title: 'Pranie standard',
      key: 'title',
      price: 'Od 100 zł',
      elements: [
        {
          text: '- Pranie fotela kierowcy',
          key: 'text'
        },
        {
          text: '- Pranie fotela pasażera',
          key: 'text'
        },
        {
          text: '- Pranie tylnej kanapy',
          key: 'text'
        }
      ]
    },
    {
      title: 'Pranie premium',
      key: 'title',
      price: 'Od 150 zł',
      elements: [
        {
          text: '- Pranie fotela kierowcy',
          key: 'text'
        },
        {
          text: '- Pranie fotela pasażera',
          key: 'text'
        },
        {
          text: '- Pranie tylnej kanapy',
          key: 'text'
        },
        {
          text: '- Pranie tapicerki drzwi',
          key: 'text'
        }
      ]
    },
    {
      title: 'Pranie exclusive',
      key: 'title',
      price: 'Od 200 zł',
      elements: [
        {
          text: '- Pranie fotela kierowcy',
          key: 'text'
        },
        {
          text: '- Pranie fotela pasażera',
          key: 'text'
        },
        {
          text: '- Pranie tylnej kanapy',
          key: 'text'
        },
        {
          text: '- Pranie tapicerki drzwi',
          key: 'text'
        },
        {
          text: '- Pranie podłogi',
          key: 'text'
        },
        {
          text: '- Pranie bagażnika',
          key: 'text'
        }
      ]
    }
  ];
  return (
    <div className="list-wrapper">
      {items.map((item) => {
        return (
          <div className="list-container col-start" key={item.title}>
            <h1 className="title">{item.title}</h1>
            <h3 className="price">{item.price}</h3>
            <div className="list-flex">
              {item.elements.map((element) => {
                return <li className="listElement">{element.text}</li>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
