import React from 'react'
import './list.css'

const List = () => {
  const items = [
    {
      title: 'Test', 
      key: 'test', 
      elements: [
        {
          text: 'testtext',
          key: 'testtext1'
        },
        {
          text: 'testtext33',
          key: 'testtext2'
        }
      ]
    },
    {
      title: 'Test2',
      key: 'test2',
      elements: [
        {
          text: 'testtext22222',
          key: 'testtext1111'
        },
        {
          text: 'testtext4444',
          key: 'testtext2222'
        }
      ]
    },
  ]
        return (
          <>
          {items.map((item) => {
            return (
            <div className='container' key={item.title}>
              <h1 className='title'>{item.title}</h1>
              {item.elements.map((element) => {
                return (
                  <ul className='list' key={element.text}>
                    <li className='listElement'>{element.text}</li>
                  </ul>
                )
              })}
              
            </div>
            )
          })}
          </>
          
        )
}

export default List