import { useStaticQuery, graphql } from "gatsby"
export const newLocal = useStaticQuery(graphql`
  query {
    ramya: file(relativePath: { eq: "ramya.jpg" }) {
      publicURL
    }
    pranitha: file(relativePath: { eq: "pranitha.jpg" }) {
      publicURL
    }
    navya: file(relativePath: { eq: "navya.jpg" }) {
      publicURL
    }
    deepika: file(relativePath: { eq: "deepika.jpg" }) {
      publicURL
    }
    shivani: file(relativePath: { eq: "shivani.jpg" }) {
      publicURL
    }
    karthik: file(relativePath: { eq: "karthik.jpg" }) {
      publicURL
    }
    praneeth: file(relativePath: { eq: "praneeth.jpg" }) {
      publicURL
    }
    lasya: file(relativePath: { eq: "lasya.jpg" }) {
      publicURL
    }
    emmanuel: file(relativePath: { eq: "emmanuel.jpg" }) {
      publicURL
    }
    keerthi: file(relativePath: { eq: "keerthi.jpg" }) {
      publicURL
    }
    anjana: file(relativePath: { eq: "anjana.jpg" }) {
      publicURL
    }
    saipreeth: file(relativePath: { eq: "saipreeth.jpg" }) {
      publicURL
    }
    yoga: file(relativePath: { eq: "yoga.jpg" }) {
      publicURL
    }
    abhinav: file(relativePath: { eq: "abhinav.jpg" }) {
      publicURL
    }
    komal: file(relativePath: { eq: "komal.jpg" }) {
      publicURL
    }
  }
`)
