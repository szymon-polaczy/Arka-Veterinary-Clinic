import { useQuery } from '@apollo/react-hooks'
import gpl from 'graphql-tag'
import React from 'react'
import renderHTML from 'react-render-html'
import Styled from 'styled-components'

const Container = Styled.article` 
  h2, p {
    margin: 0;
  }

  .very-imp {
    text-align: center;
    padding: 1.5rem 1rem;
  }

  section:not(.very-imp) {
    padding: .9rem 1rem;

    h2 {
      font-family: 'Barrio', cursive;
      letter-spacing: .1rem;
      padding-bottom: .3rem;
    }

    .small-imp {
      width: 25ch;
      font-size: .85rem;
      margin-top: .75rem;
    }

    .imp {
      margin-top: .75rem;
    }

    p {
      line-height: 130%;
    }
  }
`

const ContactInfo = () => {
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
      veryImportantInfos {
        info {
          html
        }
      }
    }
  `

  const { data } = useQuery(query);

  return (
    <Container>
      <section className="very-imp">
        <h2>{data === undefined ? 'Loading...' : renderHTML(data.veryImportantInfos[0].info.html)}</h2>
      </section>
      <section>
        <h2>Kontakt</h2>
        {data === undefined ? 'Loading...' : renderHTML(data.contactInfos[0].contact.html)}
      </section>
      <section>
        <h2>Godziny Otwarcia</h2>
        {data === undefined ? 'Loading...' : renderHTML(data.contactInfos[0].openHours.html)}
      </section>
      <section>
        <h2>Nasz Adres</h2>
        {data === undefined ? 'Loading...' : renderHTML(data.contactInfos[0].address.html)}
      </section>
    </Container>
  )
}

export default ContactInfo