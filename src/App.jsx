


import { Header } from './Components/header';
import { Sidebar } from './Components/Sidebar';
import { Post } from './Components/Post';

import './global.css';
import styles from './App.module.css';



const posts = [
  {
      id:1,
      author: {
          avatarUrl: 'https://github.com/galomanco.png',
          name: 'Jonas Franco',
          role: 'Dev Junior'
      },
      content: [
          {type: 'paragraph', content: 'Fala galeraa 👋'},
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          {type: 'link', content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2023-12-11 20:55:00')
  },
  {
      id:2,
      author: {
          avatarUrl: 'https://github.com/diego3g.png',
          name: 'Diego Brito',
          role: 'Professor'
      },
      content: [
          {type: 'paragraph', content: 'Bom dia 👋'},
          {type: 'paragraph', content: 'Acabei de subir mais uma aula para você estudarem 🚀'},
          {type: 'link', content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2023-12-09 15:15:00')
  },
]

      

export function App() {

  return (
    <>
        <Header/>
        <div className={styles.wrapper}>
            <Sidebar/>
            <main>
                  {/* interação sobre uma lista */}
                    {posts.map(posts => {
                          return (
                                    <Post 
                                        key={posts.id}
                                        author={posts.author}
                                        content={posts.content}
                                        publishedAt={posts.publishedAt}
                                    />
                                  )
                        }
                      )
                    }

            </main>
        </div>
    </>
   )
}
    
        





               
                


        


    
    


