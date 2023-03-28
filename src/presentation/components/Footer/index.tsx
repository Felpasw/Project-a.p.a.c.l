import styled from 'styled-components'
import { BsPersonVcardFill } from 'react-icons/bs'
import * as textContent from '../../text-content'


const FooterContent = styled.footer`
    display: flex;
    align-items: center;
    background-color: rgb(35, 35, 46);;
    color: #fff;
    max-width: 100%;
    max-height: 100%;
`
// const

export default function Footer() {
  return (
    <FooterContent>
      <h3 style={{ "alignSelf": "center" }}>
        <BsPersonVcardFill /> {textContent.Responsable}
      </h3>
      <hr />
    </FooterContent>
  )
}