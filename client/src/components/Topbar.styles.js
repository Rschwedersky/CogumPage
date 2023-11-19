import styled from 'styled-components';
import logo from './../assets/Logo.png'

export const Logo = styled.img.attrs({
  src: logo
})`
  width: "20%";
  `;

export const Box = styled.div`
    width: "100%";
    height: "100%";
    position: absolute;
    z-index: 2;
    display: flex;
  `;

export const SlideShowConteiner = styled.div`
    width: "100%";
    height: "100%";
    z-index: -1;
   
  `;

export const SlideShowIndicator = styled.img`
    width: 100px;
    height: 100px;
    margin: 5px;
    border-radius: 10px;
  `;

export const SlideShowImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
  `;