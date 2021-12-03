
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';



const ProfileSideBar = (props) => {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const userGitHub = 'ledi-mach';

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
        </div>

        <div className='profileRelationsArea' style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper >
             <h2 className='smallTitle'>Pessoas da comunidade ({pessoasFavoritas.length})</h2>
            <ul>
              {pessoasFavoritas.map((item) => {
                return (
                  <li>
                  <a href= {`/users/${item}`} key={item}>
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
