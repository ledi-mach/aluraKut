import React, { useState } from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';



const ProfileSideBar = (props) => {
  return (
    <Box as='aside'>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />
      <p>
        <a className='boxLink' href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const userGitHub = 'ledi-mach';

  const [comunidades, setComunidades] = useState([{
    id:'12324345656',
    title:'Eu odeio acordar cedo',
    image:'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }])

  const pessoasFavoritas = [
    'jjullimayanne',
    'laismune',
    'Giuthamie',
    'caroAlvim',
    'LarissaSiq',
    'Tauana-Pacheco'
  ]

  return (

    <>
      <AlurakutMenu />
      <MainGrid>

        <div className='profileArea' style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={userGitHub} />
        </div>

        <div className='welcomeArea' style={{ gridArea: 'welcomeArea' }}>
          <Box >
            <h1 className='title'>Bem vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className='subTitle'>O que você deseja fazer?</h2>

            <form onSubmit={function handleSubmit(e) {
              e.preventDefault();
              const dadosForm = new FormData(e.target)//vai pegar os dados do formulário e trazer para a gente

              const comunidade = {
                id: new Date().toISOString(),
                title: dadosForm.get('title'),
                image: dadosForm.get('image')
              }

              const comunidadesAtualizadas = [...comunidades, comunidade];
              setComunidades(comunidadesAtualizadas)
            }}>

              <div>
                <input
                  placeholder='Qual vai ser o nome da sua comunidade?'
                  name='title'
                  type='text'
                  aria-label='Qual vai ser o nome da sua comunidade?'
                />
              </div>

              <div>
                <input
                  placeholder='Coloque uma URL para ser a capa da sua comunidade'
                  name='image'
                  type='text'
                  aria-label='Coloque uma URL para ser a capa da sua comunidade'
                />
              </div>
              <button>Criar comunidade</button>
            </form>
            
          </Box>
        </div>

        <div className='profileRelationsArea' style={{ gridArea: 'profileRelationsArea' }}>

          <ProfileRelationsBoxWrapper >
            <ul>
              {comunidades.map((item) => {
                return (
                  <li key={item.id}>
                    <a href={`/users/${item.title}`} key={item.title}>
                      <img src={item.image}></img>
                      <span>{item.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper >
            <h2 className='smallTitle'>Pessoas da comunidade ({pessoasFavoritas.length})</h2>
            <ul>
              {pessoasFavoritas.map((item) => {
                return (
                  <li key={item}>
                    <a href={`/users/${item}`}>
                      <img src={`https://github.com/${item}.png`}></img>
                      <span>{item}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>


        </div>

      </MainGrid>
    </>
  )
}
