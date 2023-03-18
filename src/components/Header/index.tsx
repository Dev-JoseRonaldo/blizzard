import { Dropdown } from '../Dropdown'
import {
  FooterDropdownGamesMock,
  FooterDropdownSportsMock,
} from '../Dropdown/mock'
import { IconGamesMock, IconSportsMock } from '../IconGame/mock'
import { Logo } from '../Logo'
import { Button } from '../Button'
import { RiUser3Line } from 'react-icons/ri'

export const Header = () => {
  return (
    <header className="w-screen border-y-[1.5px] border-t-transparent border-b-[rgb(250,250,250,0.15)] bg-[#0F1117]">
      <div className="flex justify-between w-full max-w-[1300px] p-7 mx-auto">
        <div className="flex items-center justify-center gap-8">
          <div className="mr-24">
            <Logo />
          </div>
          <Dropdown
            items={IconGamesMock}
            type="games"
            name="Jogos"
            FooterItems={FooterDropdownGamesMock}
          />
          <Dropdown
            items={IconSportsMock}
            type="sports"
            name="esportes"
            FooterItems={FooterDropdownSportsMock}
          />
          <ul className="flex items-center justify-center gap-8 text-white font-medium text-sm">
            <li>
              <a href="">Loja</a>
            </li>
            <li>
              <a href="">Notícias</a>
            </li>
            <li>
              <a href="">Suporte</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <Button size="small" variant="secondary">
            Criar conta
          </Button>
          <Button size="small" variant="primary">
            <RiUser3Line fontSize={18} />
            Logar
          </Button>
        </div>
      </div>
    </header>
  )
}
