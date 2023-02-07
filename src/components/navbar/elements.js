import styled from "styled-components";

export const NavbarWrapper = styled.div`
  overflow: hidden;

  .container {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .bg-dark {
    background: transparent !important;
  }
  .navbar-dark .navbar-nav .nav-link {
    font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 12.5518px;
line-height: 16px;
text-transform: capitalize;
color: #D8F5E7;
    margin: 0px 10px;
    &:hover {
      color: #FFD452;
    }
    &:hover a {
      color: #ffffff;
    }
  }
  .navbar-nav {
    justify-content: center;
    align-items: center;
  }

  .navbar-brand {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    position: relative;

    .ring {
      height: 50px;
    }

    .logo {
      position: absolute;
      top: 10px;
      left: 7px;
    }

    .brandText {
      font-style: normal;
      font-weight: 700;
      font-size: 19.9783px;
      line-height: 30px;
      text-transform: uppercase;
      color: #ffffff;
      margin: 0 !important;
    }
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 991.98px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const AuditBtn = styled.button`
background: transparent;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 15px;
text-transform: capitalize; 
color: #D8F5E7;
border: 1px solid #ffd452;
padding: 8px 35px;

&:hover 
{
  background-color: #ffd452;
  color: black;
}
`

export const NavBtn = styled.button`
  background-color: transparent;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-transform: capitalize;
  color: #ffd452;

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: #ffd452;
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

export const LaunchAppBtn = styled.button`
  background: #ffd452;
  border-radius: 5px;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-transform: capitalize;
  color: #2e4756;
  width: 103px;
  height: 38px;

  &:hover {
    animation-name: heartBeat;
    animation-duration: 1s;
  }
`;
