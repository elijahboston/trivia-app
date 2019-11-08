import css from 'styled-jsx/css'

/**
 * This fragment should be used within <style jsx global></style> tags
 */
const globalStyle = css.global`
html {
  font-family: 'Open Sans', sans-serif;
  color: #fff;
}

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  background-color: #784BA0;
  background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);
  background-size: cover;
}

#root {
  display: flex;
  justify-content: center;
  align-items: center;
}
`

export default globalStyle