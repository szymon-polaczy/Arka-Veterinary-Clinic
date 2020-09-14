import { useQuery } from '@apollo/react-hooks'
import gpl from 'graphql-tag'
import React from 'react'
import renderHTML from 'react-render-html'
import Styled from 'styled-components'
import GraphImg from 'graphcms-image'

import GMap from './GMap'
import BottomSection from './AppFooterComponents/BottomSection'
import DesktopImage from './AppFooterComponents/DesktopImage'

const TopSection = Styled.section`
  margin: 0 auto 2rem auto;
  background: ${props => props.theme.dark};
  color: ${props => props.theme.light};
  padding: 1rem;
  max-width: 2000px;
  box-sizing: border-box;

  .info-section {
    .small-imp {
      font-size: .85rem;
      max-width: 25ch;
      line-height: 130%;
    }

    .imp {
      line-height: 130%;
      text-decoration: underline;
    }

    article {
      margin-top: 1.65rem;

      h3 {
        letter-spacing: .1rem;
			  font-family: ${props => props.theme.secondaryFontFamily};
      }

      &:first-child {
        margin: 0;
      }
    }

    .map {
      filter: grayscale(100%);
      height: 15rem;
      padding: 1rem 0;
    }

    @media (min-width: 600px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      article {
        margin: 0;
      }
    }

    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);

      .map {
        grid-column: 1 / span 3;
      }
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);

      .map {
        grid-column: unset;
      }
    }

    @media (min-width: 1800px) {
      grid-template-columns: repeat(5, 1fr);

      .map {
        grid-column: 4 / span 2;
      }
    }
  }

  .partners-section {
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: space-around;
    filter: grayscale(100%);

    .graphcms-image-wrapper {
      width: 5rem;
      margin: .35rem;
    }
  }

  @media (min-width: 900px) {
    margin-bottom: 0;
  }

  @media (min-width: 1200px) {
    margin-top: 3rem;
    width: calc(100vw - 8rem);
  }

  @media (min-width: 1800px) {
    position: fixed;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
  }
`

const TransparentOverlay = Styled.div`
  @media (min-width: 1800px) {
    height: calc(28rem + 400px);
  }
`

const AppFooter = () => {
  const query = gpl`
    query MyQuery {
      contactInfos {
        address {
          html
        }
        openHours {
          html
        }
        contact {
          html
        }
      }
      ourPartnersImgs {
        id
        alt
        title
        logo {
          handle
          width
          height
        }
      }
      footerImages {
        alt
        image {
          handle
          height
          width
        }
      }
    }
  `
  
  const { loading, error, data } = useQuery(query);

  return (
    <footer>
      <TransparentOverlay/>
        {loading ? "Ładowanie..." :
          error !== undefined ? "Coś poszło nie tak, przepraszamy." :
          <>
            <DesktopImage photo={data.footerImages[0]}/>
            <TopSection>
              <div className="info-section">
                <article>
                  <h3>Kontakt</h3>
                  {renderHTML(data.contactInfos[0].contact.html)}
                </article>
                <article>
                  <h3>Godziny Otwarcia</h3>
                  {renderHTML(data.contactInfos[0].openHours.html)}
                </article>
                <article>
                  <h3>Adres</h3>
                  {renderHTML(data.contactInfos[0].address.html)}
                </article>
                <article className="map">
                  <GMap title="Nasze-Położenie-Stopka"/>
                </article>
              </div>
              <div className="partners-section">
                {data.ourPartnersImgs.map(({logo, alt, title, id}) => 
                  <GraphImg image={logo} maxWidth={80} alt={alt} title={title} key={id}/>)}
              </div>
            </TopSection>
          </>
        }
      <BottomSection/>
    </footer>
  )
}

export default AppFooter